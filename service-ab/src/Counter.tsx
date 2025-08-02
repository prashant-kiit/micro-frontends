import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
      Count is {count}
    </button>
  );
}

export default Counter;
