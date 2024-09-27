import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Modal, Tabs, TabsProps } from "antd";
import { BanIcon } from "lucide-react";
import React, { useState } from "react";
import UserInformation from "./UserInformation";
import AccessAndPermission from "./AccessAndPermission";
import { Warning } from "@phosphor-icons/react";
import Activities from "./Activities";
import Referals from "./Referals";
import ReportAndViolations from "./ReportAndViolations";
import RejectRegistration from "./RejectRegistration";
import SendVerificationLink from "./SendVerificationLink";
import { useParams } from "react-router-dom";
import TourGuide from "./TourGuide";

export default function UserDetail() {
  const { id } = useParams();
  console.log("User ID:", id);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "User Information",
      children: <UserInformation />,
    },
    {
      key: "2",
      label: "Access & Permission",
      children: <AccessAndPermission />,
    },
    {
      key: "3",
      label: "Activities",
      children: <Activities />,
    },
    {
      key: "4",
      label: "Referrals",
      children: <Referals />,
    },
    {
      key: "5",
      label: "Tour Guides",
      children: <TourGuide/>,
    },

    {
      key: "6",
      label: "Report & Violation",
      children: <ReportAndViolations />,
    },
  ];

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

  const [openBan, setOpenBan] = useState(false);
  const showBanModal = () => {
    setOpenBan(true);
  };

  const handleBanOk = () => {
    setOpenBan(false);
  };

  const handleBanCancel = () => {
    setOpenBan(false);
  };

  return (
    <div className="p-3 flex flex-col">
      <div className="flex justify-between">
        <p className="text-bold text-lg">Mashood Adam</p>
        {
          id&&parseInt(id?.toString())%2==0?<div className="flex justify-end ">
          <Button danger className="p-5 mr-2" onClick={showModal}>
            <CloseCircleFilled /> Suspended User
          </Button>
          <Button
            className="text-white p-5 mr-2"
            type="primary"
            danger
            onClick={showBanModal}
          >
            <BanIcon /> Ban User
          </Button>
        </div>:<div className="flex justify-end ">
          <RejectRegistration/>
          <SendVerificationLink/>
        </div>
        }
      </div>

      <div className="bg-white rounded-md mt-5">
        <Tabs defaultActiveKey="1" items={items} className="p-3" />
      </div>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Suspend Account</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleOk}
            >
              Suspend
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you certain you wish to delete this item? Deleting this item will
          permanently remove it from the system. This action cannot be undone.
        </p>
      </Modal>

      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Ban Account</p>
          </div>
        }
        open={openBan}
        onOk={handleBanOk}
        // confirmLoading={confirmLoading}
        onCancel={handleBanCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={handleBanCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleBanOk}
            >
              Ban
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you certain you wish to ban this user? Deleting this item will
          permanently remove it from the system. This action cannot be undone.
        </p>
      </Modal>
    </div>
  );
}
