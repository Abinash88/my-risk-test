import { Button, Card, Col, Form, Input, Row, Switch } from "antd";
import { Verified } from "lucide-react";
import React from "react";

export default function UserInformation() {
  // const form=Form()
  return (
    <div className="mt-2">
      <Card title="Personal Details">
        <Form
          name="form_item_path"
          layout="vertical"
          initialValues={{
            first_name: "Mashood",
            ceo_name: "Taofeeq Moha",
            house_no: "Block 34",
            state: "Amsterdam",
            surname: "Adam",
            business_name: "Samusa Enterprise",
            street_name: "Abraham lincoln Plaza",
            zip_code: "386293",
            email: "mashood@gmail.com",
            registration_date: "July 1, 2024 - 10:30AM",
            town: "Bonah",
          }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="First Name" name="first_name">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="CEO Name" name="ceo_name">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>

              <Form.Item label="House No/House Name" name="house_no">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>

              <Form.Item label="State / City" name="state">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="Surname" name="surname">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="Business Name" name="business_name">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="Street Name" name="street_name">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="ZIP Code" name="zip_code">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="Email" name="email">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="Registration Date" name="registration_date">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
              <Form.Item label="Town" name="town">
                <Input className="p-2 bg-[#EEF5F9]" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card className="mt-3" title="Account Access">
        <div className="flex flex-col">
          <div className="rounded-lg border border-grey">
            <div className="flex justify-between items-center p-3">
              <p className="font-bold">Account Type</p>
              <p className="font-bold">Business</p>
            </div>
          </div>
          <div className="rounded-lg border border-grey my-3">
            <div className="flex justify-between items-center p-3">
              <div className="flex items-center">
                <Verified className="bg-[#4B4BFF] text-white rounded-full mr-4" />
                <p>Verification badge</p>
              </div>
              <Switch className="text-[#3838F0]" />
            </div>
          </div>
          <div className="rounded-lg border border-grey my-3">
            <div className="flex justify-between items-center p-2">
              <p className="">Send link to user to reset password</p>
              <Button className="bg-[#3838F0] text-white">Reset Password</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
