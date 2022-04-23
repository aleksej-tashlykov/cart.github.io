import React from "react";
import GoodsList from "./containers/GoodsList";
import CartList from "./containers/CartList";

export default function Main() {
  return (
    <main className="main-content">
      <div className="container">
        <h1 className="main-title">Фруктовая лавка</h1>
        <GoodsList />
        <CartList />
      </div>
    </main>
  );
}
