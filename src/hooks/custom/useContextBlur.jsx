import { useEffect } from "react";

const useContextBlur = (ref, callback) => {
  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.body.addEventListener("mousedown", handleClick);
    return () => {
      document.body.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

export default useContextBlur;
