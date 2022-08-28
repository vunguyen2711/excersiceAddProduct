import React from "react";
import { Form, Input, Checkbox, Radio } from "antd";
const FormField = ({ form }) => {
  return (
    <div>
      <Form.Item
        label="Product Name"
        name="productname"
        rules={[{ required: true, message: "Please input your product name!" }]}
      >
        <Input placeholder="Ex: Iphone 13 Promax" type="text"></Input>
      </Form.Item>
      <Form.Item
        label="Product Amount"
        name="productamount"
        rules={[
          { required: true, message: "Please input your product amount!" },
          {
            message: "A value must be number",
            pattern: new RegExp(/^[0-9]+$/),
          },
          // {
          //   type: "number",
          //   min: 1,
          //   message: "Amount can not be less than 1!",
          // },
        ]}
      >
        <Input placeholder="Ex: 122" type="number"></Input>
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Checkbox.Group>
          <Checkbox className="form__checkbox" value="Boxed">
            Boxed
          </Checkbox>
          <Checkbox className="form__checkbox" value="UnBoxed">
            UnBoxed
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Transport by" name="transport">
        <Radio.Group>
          <Radio className="form__checkbox" value="Air">
            Air Transport
          </Radio>
          <Radio className="form__checkbox" value="Train">
            Train Transport
          </Radio>
          <Radio className="form__checkbox" value="Cruise ">
            Cruise Transport
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Creator"
        name="creator"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input type="text" placeholder="Ex: Johnny Deep" />
      </Form.Item>
    </div>
  );
};

export default FormField;
