import { Button, Form, Input, Modal, Switch } from "antd";
import { CloudUploadIcon, Plus, PoundSterling } from "lucide-react";
import React, { useState } from "react";

export default function AddAIProvider() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleNextStep = () => {
    setStep(2);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [previewImage,setPreviewImage]=useState<any>(null)

  return (
    <>
      <button
        onClick={showModal}
        className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5"
      >
        Add AI Provider
      </button>

      <Modal
        title="Add New AI Provider"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="mt-5">
            <Button onClick={handleCancel} className="mr-5">
              Cancel
            </Button>
            {step == 1 ? (
              <Button
                className="text-white bg-[#3838F0] px-5"
                onClick={handleNextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                className="text-white bg-[#3838F0] px-5"
                onClick={handleOk}
              >
                Add AI Provider
              </Button>
            )}
          </div>,
        ]}
      >
        {step == 1 ? (
          <Form layout="vertical" initialValues={{}}>
            <Form.Item name="name" label="AI Provider Name">
              <Input className="py-2" placeholder="Name" />
            </Form.Item>
            <Form.Item name="api_key" label="API Key">
              <Input className="py-2" placeholder="API Key" />
            </Form.Item>
            <Form.Item name="price" label="Price">
              <Input className="py-2" placeholder="Price" />
            </Form.Item>
            <div className="flex justify-between mt-5">
              <p>Enable / Disable Visibility</p>
              <Switch />
            </div>
          </Form>
        ) : (
          <Form layout="vertical" initialValues={{}}>
            <div className="flex flex-col">
              <p className="text-lg font-semiBold">AI Logo</p>
              <div className="flex flex-col items-center py-5">
                <input
                  type="file"
                  accept="image/*"
                  id="imageUpload"
                  className="hidden"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setPreviewImage(event.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {previewImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer text-[#3838F0]"
                    >
                      <CloudUploadIcon className="h-6 w-6 mr-2" />
                      <span>Change</span>
                      
                    </label>
                  </div>
                ) : (
                  <label
                    htmlFor="imageUpload"
                    className="flex items-center cursor-pointer text-[#3838F0]"
                  >
                    <CloudUploadIcon className="h-6 w-6 mr-2" />
                    <span>Click to Add image</span>
                  </label>
                )}
              </div>
            </div>
            <div className="flex flex-col my-7">
              <p className="text-lg font-semiBold">Pros</p>
              <div className="flex">
                <Input className="py-2" placeholder="Add Benefits" />
                <button className="bg-[#3838F0] text-white px-3 py-2 rounded-md ml-3">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="flex flex-col my-7">
              <p className="text-lg font-semiBold">Cons</p>
              <div className="flex">
                <Input className="py-2" placeholder="Add Demerits" />
                <button className="bg-[#3838F0] text-white px-3 py-2 rounded-md ml-3">
                  <Plus />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Modal>
    </>
  );
}
