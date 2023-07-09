import { useState } from "react";


export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("Both buttom increase");
  }

  return (
    <div>
      <h1>Welcome to my App in React</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <SingleButton />
      <SingleButton />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <>
    <button onClick={(onClick)}>
      Button clicked {count} times
    </button>
    </>
  );
}

function SingleButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("Button just increase by his own " + count)
  }

  return (
    <button onClick={handleClick}>
      Single button {count}
    </button>
  );

}