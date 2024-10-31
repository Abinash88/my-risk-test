import HandleParams from "@/lib/hooks/handle-params";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BgSection } from "../../shared/ReuseAble";
import { PaymentTitle } from "./MakePayment";

const PayLogo = [
  {
    id: 1,
    image: "/images/apple-pay.png",
  },
  {
    id: 2,
    image: "/images/amazon.png",
  },
  {
    id: 3,
    image: "/images/samsung-pay.png",
  },
  {
    id: 4,
    image: "/images/google-pay.png",
  },
  {
    id: 5,
    image: "/images/master.png",
  },
  {
    id: 6,
    image: "/images/paypal.png",
  },
  {
    id: 7,
    image: "/images/visa.png",
  },
  {
    id: 8,
    image: "/images/maestro.png",
  },
  {
    id: 9,
    image: "/images/circus.png",
  },
];
const PaymentMode = () => {
  const [selectPayment, setSelectPayment] = useState<number | undefined>();
  const { handlePageChange, getP } = HandleParams();

  return (
    <>
      <BgSection image="images/background.png">
        <div className="bg-white rounded-lg w-full lg:w-[35%] mr-auto ml-auto py-6">
          <PaymentTitle title="Select your Payment Method" />

          <div className="my-3 px-[1rem] md:px-[5rem] flex justify-center gap-5 flex-wrap  ml-auto mr-auto">
            {PayLogo.map((logo, i) => (
              <button
                onClick={() => {
                  setSelectPayment(
                    selectPayment === logo.id ? undefined : logo.id
                  );
                }}
                className={cn(
                  `bg-white shadow p-3 border rounded-lg`,
                  selectPayment === logo.id && "shadow-lg border-gray-400"
                )}
                key={i + 3}
              >
                <img
                  src={logo.image}
                  alt={logo.image + i}
                  className="w-[80px]"
                />
              </button>
            ))}
          </div>
          <div className="flex gap-5 justify-center mt-6">
            <button
              onClick={() => {
                const prev = getP("previous");
                if (prev) {
                  handlePageChange({
                    next: prev,
                    previous: "generate-download",
                  });
                }
              }}
              aria-disabled={true}
              className="bg-[#000080] text-white px-4 py-2 rounded w-[35%]"
            >
              Back
            </button>
            <button
              disabled={!selectPayment}
              onClick={() => {
                handlePageChange({
                  next: "make-payment",
                  previous: "payment-mode",
                });
              }}
              className={cn(
                `bg-[#000080] w-[35%] text-white px-4 py-2 rounded`,
                !selectPayment && "opacity-50"
              )}
            >
              Next
            </button>
          </div>
        </div>
      </BgSection>
    </>
  );
};

export default PaymentMode;
