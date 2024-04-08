import { RefObject, useEffect } from "react";

const useScrollToComponent = (
  ref: RefObject<HTMLDivElement>,
  condition: boolean,
  path: string
) => {
  useEffect(() => {
    if (condition) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [condition, path]);
};

export default useScrollToComponent;
