import { useEffect, useState } from "react";
import "./TypeMain.css";
let intervalId;
//let num = 0;
const Timer = () => {
  const [num, setNum] = useState(0);

  const Stop = () => {
    // debugger
    clearInterval(intervalId);
  };

  // useEffect(() => {
  //   UpCounter();
  //   console.log("asss");
  // }, []);

  const UpCounter = () => {
    intervalId = setInterval(() => {
      setNum((num) => num + 1);
    }, 1000);
    console.log(intervalId);
  };

  return (
    <>
      <div className="TimerWrapper">
        <h6 className="TimerHeading">
          Time: {num}s{" "}
          <span>
            <button onClick={UpCounter}>START</button>
            <button onClick={Stop}>STOP</button>
          </span>{" "}
        </h6>
        <h6 className="TimerHeading">my best time: {}</h6>
      </div>
    </>
  );
};

export default Timer;
