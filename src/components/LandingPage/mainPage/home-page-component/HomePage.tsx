import HandleParams from "@/lib/hooks/handle-params";

import ScrollTop from "@/lib/hooks/scroll-top";
import GeneralRisk from "../../GeneralRisk";
import PaymentMode from "../../Payment";
import MakePayment from "../../Payment/MakePayment";
import { Upload } from "../Upload";
import ChooseServices from "./choose-service";
import { GenerateDownload } from "./generate-download";
import { AIModel } from "./select-api-modal";
import EnterDuration from "../enter-duration";

const HomePage = () => {
  const { getP } = HandleParams();

  ScrollTop();

  const chooseServices = () => {
    switch (getP("page")) {
      case "generate-download":
        return <GenerateDownload />;
      case "ai-modal":
        return <AIModel />;
      case "payment-mode":
        return <PaymentMode />;
      case "general-risk":
        return <GeneralRisk />;
      case "make-payment":
        return <MakePayment />;
      case "upload":
        return <Upload />;
      case "duration":
        return <EnterDuration />;
      default:
        return <ChooseServices />;
    }
  };

  return <div className="">{chooseServices()}</div>;
};

export default HomePage;
