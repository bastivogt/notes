import { useState } from "react";

export function useReRender() {
  const [update, setUpdate] = useState({});
  return function () {
    setUpdate({ ...update });
  };
}
