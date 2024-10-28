import { useSearchParams } from "react-router-dom";

export type NextType =
  | "generate-download"
  | "ai-modal"
  | "payment-mode"
  | "general-risk"
  | "make-payment"
  | "upload";

function isNextType(value: string | null): value is NextType {
  return (
    value === "generate-download" ||
    value === "ai-modal" ||
    value === "payment-mode" ||
    value === "general-risk" ||
    value === "make-payment" ||
    value === "upload"
  );
}

export type GenerateTypes = "generate-download" | "enter-text" | "use-ai";

const HandleParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = ({
    next,
    previous,
    type,
  }: {
    next: NextType;
    previous?: NextType;
    type?: GenerateTypes;
  }) => {
    if (!previous) {
      searchParams.delete("previous");
    }

    const GType = searchParams.get("type");

    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...(GType && { type: GType }),
      page: next,
      ...(previous && { previous }),
      ...(type && { type: type }),
    });
  };

  const handleClear = () => {
    setSearchParams();
  };

  const getP = (key: "previous" | "page"): NextType | null => {
    const value = searchParams.get(key);
    return isNextType(value) ? value : null;
  };

  return { handlePageChange, searchParams, handleClear, getP };
};

export default HandleParams;
