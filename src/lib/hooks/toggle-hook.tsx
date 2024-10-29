import { useState } from "react";

const ToggleHook = <T,>(data:T) => {
  const [toggle, setToggle] = useState<T>(data);
  return { setToggle, toggle };
};

export default ToggleHook;
