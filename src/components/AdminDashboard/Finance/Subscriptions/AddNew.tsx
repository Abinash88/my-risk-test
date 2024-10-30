import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, Modal, Row } from "antd";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

interface FakeDataItem {
  type: "item" | "benefit" | "extra";
  name?: string;
  qty?: number;
  price?: number;
  description?: string;
}

const fakeData: FakeDataItem[] = [
  { type: "item", name: "AI Generated risk profile", qty: 1, price: 4 },
  { type: "item", name: "Power System Risk", qty: 1, price: 4 },
  {
    type: "benefit",
    description:
      "Interact with our T&O standings such as vote risk up/down, like and comment.",
  },
  {
    type: "benefit",
    description:
      "Refer others to join and participate through our referral channel.",
  },
  {
    type: "benefit",
    description: "Manage risks you have added to the T&O standings",
  },
  {
    type: "extra",
    name: "AI Generated risk profile",
    qty: 1,
    price: 4,
  },
];

export default function AddNew() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [data, setData] = useState(fakeData);
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(true);
  console.log(data);
  return (
    <div>
      <button
        className="rounded-md px-6 py-2 text-white bg-[#3838F0] flex items-center"
        onClick={() => showModal()}
      >
        Create New Page
      </button>
      <Modal
        width={800}
        // title="Add New Payment Processor"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-end mb-7">
            <button
              className="mr-3 rounded-md text-black bg-white border border-grey py-2 px-3"
              onClick={handleOk}
            >
              Cancel
            </button>
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Create Package
            </button>
          </div>,
        ]}
      >
        <div className="bg-white w-full pb-5">
          <div className="w-full bg-[#000080] text-white rounded-t-lg rounded-tr-lg p-3 mb-5">
            <Form layout="vertical">
              <Row gutter={16} className="w-full flex justify-between">
                <Form.Item
                  label={<span className=" text-white">Package Title</span>}
                  name="title"
                  className="w-2/5"
                >
                  <Input
                    className="bg-[#EEF5F9] py-2"
                    placeholder="Write here..."
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-white">Subtitle</span>}
                  name="subtitle"
                  className="w-2/5"
                >
                  <Input
                    className="bg-[#EEF5F9] p-2"
                    placeholder="Write here..."
                  />
                </Form.Item>
              </Row>
            </Form>
          </div>
          <div className="p-3">
            <div className="flex justify-between gap-4 text-[18px] font-[600] text-[rgba(0,0,0,0.7)] mb-2 text-center">
              <h4 className="w-[50%]">Item</h4>
              <h4 className="w-[25%]">Min Qty</h4>
              <h4 className="w-[25%]">Max Qty</h4>
              <h4 className="w-[12%]">£</h4>
            </div>
            <div className="flex flex-col gap-4">
              {data
                ?.filter((item) => item.type === "item")
                .map((item, index) => (
                  <div
                    key={index}
                    className="text-white text-sm flex justify-between gap-4"
                  >
                    <div className="w-[52%] flex gap-1 items-center justify-between">
                      <div className="w-full rounded-lg bg-[#6666b3] flex items-center justify-center">
                        <select
                          // value={item?.name}
                          onSelect={() =>
                            setData((prev) => {
                              const rebuild = [...prev];
                              const newData = rebuild
                                .filter((item) => item?.type === "item")
                                .map((item, i) => {
                                  if (index === i)
                                    return { ...item, name: item?.name };
                                  return item;
                                });
                              const unBenefitData = rebuild?.filter(
                                (item) => item?.type !== "item"
                              );

                              return [...newData, ...unBenefitData];
                            })
                          }
                          className="px-2 focus-visible:outline-none text-gray-00 bg-[#6666b3] py-5 rounded-lg w-full"
                        >
                          <option
                            className=""
                            value={"AI Generated risk profile"}
                          >
                            AI Generated risk profile
                          </option>
                          <option className="" value={"Power System Risk"}>
                            Power System Risk
                          </option>
                        </select>
                        {/* <p className="px-2 py-5  rounded-lg flex-1">
                          {item.name}
                        </p> */}
                      </div>
                    </div>

                    <div className="border border-[#6666b3] rounded-lg flex w-[25%]">
                      <input
                        type="number"
                        className="h-full outline-none text-black bg-transparent w-[50%] text-center"
                        value={item.qty}
                        readOnly
                      />
                      <div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="cursor-pointer text-[#06DC1B]"
                          // onClick={() => handleIncrease(item.id)}
                        />
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="cursor-pointer text-[#FF0000]"
                          // onClick={() => handleDecrease(item.id)}
                        />
                      </div>
                    </div>
                    <div className="border border-[#6666b3] rounded-lg flex w-[25%]">
                      <input
                        type="number"
                        className="h-full outline-none text-black bg-transparent w-[50%] text-center"
                        value={item.qty}
                        readOnly
                      />
                      <div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="cursor-pointer text-[#06DC1B]"
                          // onClick={() => handleIncrease(item.id)}
                        />
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="cursor-pointer text-[#FF0000]"
                          // onClick={() => handleDecrease(item.id)}
                        />
                      </div>
                    </div>
                    <input
                      value={item?.price}
                      onChange={(e) => {
                        setData((prev) => {
                          const rebuild = [...prev];
                          const newData = rebuild
                            .filter((item) => item?.type === "item")
                            .map((item, i) => {
                              if (index === i)
                                return {
                                  ...item,
                                  price: Number(e.target.value),
                                };
                              return item;
                            });
                          const unBenifitData = rebuild?.filter(
                            (item) => item?.type !== "item"
                          );
                          return [...newData, ...unBenifitData];
                        });
                      }}
                      type="number"
                      className="px-3 bg-[#6666B3] flex justify-center items-center w-[12%] rounded-lg"
                    />
                  </div>
                ))}
              <button
                onClick={() => {
                  setData((prev) => [
                    ...prev,
                    {
                      type: "item",
                      name: "",
                      qty: 1,
                      price: 4,
                    },
                  ]);
                }}
                className="flex items-center text-[#6969F4]"
              >
                {" "}
                <PlusIcon className="mr-2" /> Add Item
              </button>
            </div>
          </div>
          <div className="mt-5 px-3">
            <div
              className="flex justify-between gap-2 mb-4 cursor-pointer"
              onClick={() => setIsBenefitsVisible(!isBenefitsVisible)}
            >
              <h4 className="font-[600]">Other benefits</h4>
            </div>
            <div className="flex flex-col gap-3">
              {data
                ?.filter((item) => item?.type === "benefit")
                .map((item, i) => (
                  <input
                    key={i}
                    value={item?.description}
                    onChange={(e) => {
                      setData((prev) => {
                        const rebuild = [...prev];
                        const newData = rebuild
                          .filter((item) => item?.type === "benefit")
                          .map((item, index) => {
                            if (index === i)
                              return { ...item, description: e.target.value };
                            return item;
                          });
                        const unBenifitData = rebuild?.filter(
                          (item) => item?.type !== "benefit"
                        );
                        return [...newData, ...unBenifitData];
                      });
                    }}
                    placeholder="Write here"
                    className="p-2 bg-[#6666B3] text-white rounded-md focus:outline-none"
                  />
                ))}
              <button
                onClick={() => {
                  setData((prev) => [
                    ...prev,
                    { description: "", type: "benefit" },
                  ]);
                }}
                className="flex items-center text-[#6969F4]"
              >
                {" "}
                <PlusIcon className="mr-2" /> Add Benefit
              </button>
            </div>
            {/* {isBenefitsVisible && (
              <div className="flex flex-col gap-3">
                {data
                  .filter((item) => item.type === "benefit")
                  .map((benefit) => (
                    <p
                      key={benefit.id}
                      className="bg-[#6666B3] text-white p-3 rounded-lg"
                    >
                      {benefit.description}
                    </p>
                  ))}
              </div>
            )} */}
          </div>
          <div className="my-5 px-3 flex flex-col gap-2">
            <label className="text-lg">Price</label>
            <input
              className="bg-[#F0F0FF] rounded-lg p-2 flex items-center justify-center text-center text-2xl focus:outline-none"
              placeholder="Enter Price"
            />
            {/* <h3 className="bg-[#F0F0FF] font-[600] px-3 py-4 text-[25px] rounded-lg w-full text-center text-[#000080] ">
              
            </h3> */}
          </div>
          <div className="my-5 px-3">
            <div className="flex justify-between items-center bg-[#F0F0FF] p-3 rounded-lg ">
              <h3 className=" font-[400] text-[#000080]">Extras</h3>
              <p className="text-[#FD1E20]">No Extra</p>
            </div>
            <div className="flex flex-col gap-4">
              <div
                // key={item.id}
                className="w-full text-white text-sm flex justify-between gap-4 mt-3"
              >
                <div className="w-[52%] flex gap-1 items-center justify-between">
                  <input
                    placeholder="Write here"
                    className="w-full bg-[#6666B3] rounded-lg px-2 py-4 flex items-center text-lg focus:outline-none"
                  />
                </div>

                <div className="border border-[#6666b3] rounded-lg flex w-[25%]">
                  <input
                    type="number"
                    className="h-full outline-none text-black bg-transparent w-[50%] text-center"
                    value={1}
                    readOnly
                  />
                  <div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="cursor-pointer text-[#06DC1B]"
                      // onClick={() => handleIncrease(item.id)}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer text-[#FF0000]"
                      // onClick={() => handleDecrease(item.id)}
                    />
                  </div>
                </div>
                <div className="border border-[#6666b3] rounded-lg flex w-[25%]">
                  <input
                    type="number"
                    className="h-full outline-none text-black bg-transparent w-[50%] text-center"
                    value={1}
                    readOnly
                  />
                  <div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="cursor-pointer text-[#06DC1B]"
                      // onClick={() => handleIncrease(item.id)}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer text-[#FF0000]"
                      // onClick={() => handleDecrease(item.id)}
                    />
                  </div>
                </div>
                <p className="px-1 bg-[#6666B3] flex justify-center items-center w-[12%] rounded-lg">
                  10
                </p>
              </div>
              <button className="flex items-center text-[#6969F4]">
                {" "}
                <PlusIcon className="mr-2" /> Add Extra
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
