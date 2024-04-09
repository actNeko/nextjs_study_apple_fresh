"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"]; // let [수량, 수량변경] = useState({});
  let [cnt, setCnt] = useState([0, 0, 0]);

  // const decreaseQuantity = (product) => {
  //   if (수량[product] && 수량[product] > 0) {
  //     수량변경({
  //       ...수량,
  //       [product]: 수량[product] - 1,
  //     });
  //   }
  // };

  // const increaseQuantity = (product) => {
  //   수량변경({
  //     ...수량,
  //     [product]: (수량[product] || 0) + 1,
  //   });
  // };

  const setCount = (type, index) => {
    let copy = [...cnt];
    type === "+" ? copy[index]++ : copy[index]--;
    if (copy[index] < 0) copy[index] = 0;
    setCnt(copy);
  };
  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" alt={product} />
            <h4>{product} $40</h4>
            {/* <button onClick={() => decreaseQuantity(product)}>-</button> */}
            <button
              onClick={() => {
                setCount("-", i);
              }}
            >
              -
            </button>
            {/* var result=0;
            let { product } = 수량;
            product(false) && result = product; */}
            {/* <span>{수량[product] || 0}</span> */}
            <span>{cnt[i]}</span>
            {/* <button onClick={() => increaseQuantity(product)}>+</button> */}
            <button
              onClick={() => {
                setCount("+", i);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
