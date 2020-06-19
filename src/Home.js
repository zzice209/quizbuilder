import React, { useState } from "react";

const Home = () => {
  const [state, setState] = useState({
    arr: [1, 2, 3, 4, 5, 6, 7,8],
    arrS: [1, 2],
    curr: 2
  });
  // let [arrSplice,setArrSplice] = useState(arr.slice(0, 3));
  const handleClick = () => {
    const { arr, curr } = state;
    console.log(curr);
    if (curr + 2 <= arr.length) {
      setState({
        arr,
        arrS: arr.slice(curr, curr + 2),
        curr: curr + 2
      });
    } else {
      return false;
    }
  };
  const handlePrev = () => {
    const { arr, curr } = state;
    console.log(state);
    if (curr <= arr.length && curr > 2) {
      setState({
        arr,
        arrS: arr.slice(curr - 4, curr - 2),
        curr: curr - 2
      });
    } else {
      return false;
    }
  };
  return (
    <div>
      {state.arrS.map((val, index) => {
        return <div key={index}>{val}</div>;
      })}
      <button onClick={() => handlePrev()}>Previous</button>
      <button onClick={() => handleClick()}>Next</button>
    </div>
  );
};

export default Home;
