import * as Converter from "html-to-image";
import html2pdf from "html2pdf.js";
import { BlendMode, NonFullScreenPageMode, PDFDocument } from "pdf-lib";
import type React from "react";

type DownloadPdfType = {
  pdfs: (HTMLIFrameElement | null)[] | NonFullScreenPageMode;
  overlay?: HTMLDivElement | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DownloadPdf = async ({
  pdfs,
  overlay,
  setLoading,
}: DownloadPdfType) => {
  if (!pdfs) return;

  setLoading(true);

  const pdfDoc = await PDFDocument.create();

  for (const pdf of pdfs) {
    if (!pdf) {
      continue;
    }

    // If the PDF is a string, it is a PDF URL
    // If the PDF is a File object, read its bytes and add its pages to the new document
    if (pdf instanceof File) {
      const existingPdfBytes = await pdf.arrayBuffer();
      const existingPdfDoc = await PDFDocument.load(existingPdfBytes);

      const copiedPages = await pdfDoc.copyPages(
        existingPdfDoc,
        existingPdfDoc.getPageIndices() // Till the end of document
      );

      copiedPages.forEach((page) => pdfDoc.addPage(page));

      continue;
    }

    // If pdf is not a string, it is a HTMLIframeElement, append the element to the document
    if (typeof pdf !== "string" && pdf.contentWindow) {
      await new html2pdf()
        .set({
          filename: "myfile.pdf",
          image: { type: "png", quality: 1 },
          html2canvas: {
            dpi: 300,
            windowWidth: 764,
            scale: 2,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
            precision: 100,
          },
          margin: [40, 0, 60, 0],
          pagebreak: { after: ["#pagebreak"] },
        })
        .from(pdf.contentWindow?.document.body)
        .outputPdf()
        .get("pdf")
        .then(async (res: { output: (type: string) => string }) => {
          const pdfBlob = res.output("bloburl");

          const existingPdfBytes = await fetch(pdfBlob).then((res) =>
            res.arrayBuffer()
          );
          const existingPdfDoc = await PDFDocument.load(existingPdfBytes);

          const copiedPages = await pdfDoc.copyPages(
            existingPdfDoc,
            existingPdfDoc.getPageIndices() // Till the end of document
          );

          copiedPages.forEach((page) => pdfDoc.addPage(page));
        });
    }
  }

  if (overlay) {
    const pages = pdfDoc.getPages();
    // Convert the overlay to a PNG image
    const pngImage = await Converter.toPng(overlay as HTMLElement, {
      skipFonts: true,
    });
    const embeddedImage = await pdfDoc.embedPng(pngImage);

    // Add the overlay image to each page of the PDF
    for (const page of pages) {
      // Get the width and height of the page
      const { width, height } = page.getSize();

      // Overlay will be 100% of the width of the page
      const overlayWidth = width;

      // Overlay height will be calculated based on the aspect ratio of the image
      // !OC const overlayHeight = (overlayWidth * embeddedImage.height) / embeddedImage.width
      const overlayHeight = height;

      // Center the overlay image on the page
      const overlayX = (width - overlayWidth) / 2;
      const overlayY = (height - overlayHeight) / 2;

      // Draw the overlay image on the page
      page.drawImage(embeddedImage, {
        x: overlayX,
        y: overlayY,
        width: overlayWidth,
        height: overlayHeight,
        opacity: 1,
        blendMode: BlendMode.Multiply,
      });
    }
  }

  setLoading(false);

  const pdfBytes = await pdfDoc.save();
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(pdfBlob);

  // Trigger download or open the PDF in a new tab
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "merged-pdf-with-overlay.pdf";
  link.click();

  // If pdf is not a string, it is a HTMLIframeElement, append the element to the document
};
