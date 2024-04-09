import { age } from "./data.js";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.map((a, i) => {
        return <CartItem item={a} key={i} />;
      })}
      <Banner content="현대카드" />
      <Banner content="롯데카드" />
      <Button color="red" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>{age}개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function Button(props) {
  return <button style={{ background: props.color }}>Button</button>;
}
