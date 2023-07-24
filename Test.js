import React, { useEffect, useLayoutEffect, useRef } from "react";

export const SomeComponent = () => {
  const [val, setVal] = React.useState(0);
  const ref = useRef();
  console.log({ a: val });

  useEffect(() => {
    console.log("useLayoutEffect");
    if (val < 3) {
      return;
    }
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum = sum + sum * i;
    }
    console.log("useLayoutEffect 2");
    ref.current.style.backgroundColor = "red";
  }, [val]);

  console.log("CHALA");
  return (
    <div style={{ backgroundColor: "blue" }}>
      {val > 2 && (
        <div ref={ref} style={{ backgroundColor: "green" }}>
          SOME DIV
        </div>
      )}
      <button style={{ margin: "10px" }} onClick={() => setVal((v) => v + 1)}>
        Click SomeComponent
      </button>
      <p>myt val is {val}</p>
      {/* <MyCom initialVal={val} /> */}
    </div>
  );
};

const MyCom = ({ initialVal }) => {
  console.log(initialVal);
  const [val, setVal] = React.useState(initialVal);

  useEffect(() => {
    setVal(initialVal);
  }, [initialVal]);

  return (
    <div>
      <button onClick={() => setVal((v) => v + 1)}>Click MyCom</button>
      <p>myt val is {val}</p>
    </div>
  );
};
