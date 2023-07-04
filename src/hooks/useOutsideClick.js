import { useEffect, useRef } from "react";

const useOutsideClick = (cb) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    document.addEventListener("click", handleOutside);

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [cb]);

  return ref;
};

export default useOutsideClick;
