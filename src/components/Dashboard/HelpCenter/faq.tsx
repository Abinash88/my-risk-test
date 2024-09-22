import { useState } from "react";
import { faqs } from "../../../lib/fakedata";

const FAQComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" flex items-start justify-between flex-wrap gap-2">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4 w-full md:w-[49%]">
          <div
            className="text-sm font-semibold cursor-pointer flex justify-between items-center text-[#6666B3]"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {/* <span className="text-gray-500">
							{expandedIndex === index ? "-" : "+"}
						</span> */}
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              expandedIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
