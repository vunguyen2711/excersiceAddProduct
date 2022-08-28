import { Divider, Tag, Button, Typography } from "antd";
import * as S from "./style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, allProducts } from "../../features/productSlice";
const CardShow = ({ product, index }) => {
  const { productname, productamount, creator, status, transport } = product;
  console.log(index);
  const products = useSelector(allProducts);
  const dispatch = useDispatch();
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(index));
  };
  return (
    <S.CardItem>
      <h2 className="card__title">{productname}</h2>
      <Divider></Divider>
      <h3 className="card__subtitle">
        Amount: <span className="card__paragraph">{productamount}</span>
      </h3>
      <h2 className="card__subtitle">
        Status:
        {status ? (
          status.map((item, index) => (
            <Tag key={index} color={item === "Boxed" ? `success` : `default`}>
              {item}
            </Tag>
          ))
        ) : (
          <span className="card__paragraph">None</span>
        )}
      </h2>
      <h2 className="card__subtitle">
        Transport by: <span className="card__paragraph">{transport}</span>
      </h2>
      <h2 className="card__subtitle">
        Creator by: <span className="card__paragraph">{creator}</span>
      </h2>
      <Button onClick={handleDeleteProduct} type="danger">
        Delete
      </Button>
    </S.CardItem>
  );
};

export default CardShow;
