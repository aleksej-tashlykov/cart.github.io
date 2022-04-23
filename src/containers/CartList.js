import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFruits } from "../store/fruitsSlice";
import { selectCart, minus, remove } from "../store/cartSlice";
import Cart from "../components/Crat";

export default function CartList() {
  const dispatch = useDispatch();
  const fruits = useSelector(selectFruits);
  const cart = useSelector(selectCart);
  let fruitsArr = fruits.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const clickHandel = (event) => {
    event.preventDefault();
    let item = event.target;
    if (item.classList.contains("decrease-button")) {
      dispatch(minus(item.dataset.key));
    } else if (item.classList.contains("delete-button")) {
      dispatch(remove(item.dataset.key));
    } else {
      return true;
    }
  };

  return (
    <>
      <h2 className="main-subtitle">Корзина</h2>
      <table className="cart-table" onClick={clickHandel}>
        <thead className="table-header">
          <tr className="table-header-row">
            <th className="table-header-cell product">Товар</th>
            <th className="table-header-cell">Цена за кг.</th>
            <th className="table-header-cell">Количество</th>
            <th className="table-header-cell">Стоимость</th>
            <th className="table-header-cell">Действие</th>
          </tr>
        </thead>
        <Cart data={fruitsArr} cart={cart} />
      </table>
    </>
  );
}
