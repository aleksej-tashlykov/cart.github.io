import React from "react";

export default function GoodsItem(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <li className="goods-item item" key={item.articul}>
            <img
              className="item-img"
              src={item.image}
              width="125"
              height="125"
              alt={item.title}
            />
            <p className="item-title">{item.title}</p>
            <p className="item-cost cost">
              <span className="cost-text">Стоимость:</span>
              <span className="cost-sum">{item.cost} ₽</span>
            </p>
            <button
              className="button item-button add-to-cart"
              data-key={item.articul}
            >
              Добавить в корзину
            </button>
          </li>
        );
      })}
    </>
  );
}
