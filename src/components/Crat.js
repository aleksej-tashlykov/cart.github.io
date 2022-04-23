import React from "react";

export default function Cart(props) {
  let fruits = props.data;
  let cart = props.cart;
  let total = 0;
  let cartArr = Object.keys(cart);
  cartArr.map((item) => {
    total += fruits[item]["cost"] * cart[item];
    return total;
  });
  return (
    <>
      <tbody className="table-body">
        {cartArr.map((item) => {
          return (
            <tr className="table-body-row" key={fruits[item]["articul"]}>
              <td className="table-body-cell">
                <div className="table-body-goods">
                  <p className="table-goods-title">{fruits[item]["title"]}</p>
                  <img
                    className="img-thumb"
                    src={fruits[item]["image"]}
                    alt={fruits[item]["title"]}
                  />
                </div>
              </td>
              <td className="table-body-cell">{fruits[item]["cost"]}</td>
              <td className="table-body-cell">{cart[item]}</td>
              <td className="table-body-cell">
                {fruits[item]["cost"] * cart[item]}
              </td>
              <td className="table-body-cell">
                <div className="table-body-action">
                  <button
                    className="button table-body-button decrease-button"
                    data-key={fruits[item]["articul"]}
                    title="Уменьшить на 1"
                  ></button>
                  <button
                    className="button table-body-button delete-button"
                    data-key={fruits[item]["articul"]}
                    title="Удалить"
                  ></button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot className="table-footer">
        <tr className="table-footer-row">
          <td className="table-footer-cell" colSpan="5">
            <span className="total-text">Итого:</span>
            <span className="total-sum">{total} ₽</span>
          </td>
        </tr>
      </tfoot>
    </>
  );
}
