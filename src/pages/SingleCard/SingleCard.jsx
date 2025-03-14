import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../mock/index";
import "./SingleCard.css";

const SingleCard = () => {
  const { id } = useParams();
  const product = DATA.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Mahsulot topilmadi</h2>;
  }

  return (
    <div className="singlecard">
      <div className="container">
        <div className="singlecard-wrapper">
          <div className="singlecard-image">
            <img src={product.url} alt={product.model} />
          </div>
          <div className="singlecard-info">
            <h2>{product.title}</h2>
            <h3 className="price">Narxi: {product.price} so'm</h3>
            <mark className="installment">{product.oyiga} so'm/oyiga</mark>
            <div className="wrapper-a">
              <button className="order-btn">
                <a href="/">Qaytish</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
