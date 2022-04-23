import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/cartSlice";
import { selectFruits } from "../store/fruitsSlice";
import GoodsItem from "./GoodsItem";

export default function GoodsList() {
  const goods = useSelector(selectFruits);
  const dispatch = useDispatch();
  const clickHandle = (event) => {
    event.preventDefault();
    let item = event.target;
    if (item.classList.contains("add-to-cart")) {
      dispatch(increment(item.dataset.key));
    } else {
      return false;
    }
  };
  return (
    <>
      <ul className="goods-list" onClick={clickHandle}>
        <GoodsItem data={goods} />
      </ul>
    </>
  );
}
