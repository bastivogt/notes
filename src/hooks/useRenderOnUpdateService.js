//import { useState } from "react";
import { useReRender } from "./useReRender";

/*export function useRenderOnUpdateService(
  ServiceInstance,
  updateEvent = "onUpdate"
) {
  const [update, setUpdate] = useState({});

  ServiceInstance[updateEvent] = function () {
    setUpdate({});
  };
}*/

export function useRenderOnUpdateService(
  ServiceInstance,
  updateEvent = "onUpdate"
) {
  const reRender = useReRender();
  ServiceInstance[updateEvent] = function () {
    reRender();
  };
}
