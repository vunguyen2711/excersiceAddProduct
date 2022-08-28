import React from "react";
import * as S from "./style";
import { Form, Button, Typography, Space, Row, Col } from "antd";
import FormField from "../../components/FormField/FormField";
import { useSelector, useDispatch } from "react-redux";
import {
  allProducts,
  addProduct,
  deleteProduct,
} from "../../features/productSlice";
import CardShow from "../../components/CardShow/CardShow";
const { Title } = Typography;
const MainContent = () => {
  const products = useSelector(allProducts);
  console.log(products);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { productname, productamount, creator, status, transport } = values;
    dispatch(
      addProduct({
        id: products.length + 1,
        productname,
        productamount,
        creator,
        status,
        transport,
      })
    );
    form.resetFields();
  };
  const onResetForm = () => {
    form.resetFields();
  };
  return (
    <S.MainContainer>
      <Title level={2}>Create Product Information</Title>
      <S.MainForm>
        <Form
          name="createProductList"
          layout="vertical"
          onFinish={(values) => handleSubmit(values)}
          form={form}
        >
          <FormField form={form} />

          <Space size="middle" className="button__container">
            <Button htmlType="submit" type="primary" className="form__button">
              Add Product
            </Button>
            <Button
              type="default"
              className="form__button"
              onClick={onResetForm}
            >
              Reset Field
            </Button>
          </Space>
        </Form>
      </S.MainForm>

      <S.MainShowCase>
        <Title level={2}>Products List</Title>
        <Row gutter={[30, 30]} justify="start">
          {products &&
            products.map((product, index) => (
              <Col key={index} xs={24} sm={12} lg={6}>
                <CardShow index={index} product={product} />
              </Col>
            ))}
        </Row>
      </S.MainShowCase>
    </S.MainContainer>
  );
};

export default MainContent;
