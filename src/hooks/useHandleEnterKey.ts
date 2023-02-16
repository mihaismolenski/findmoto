import { useEffect } from "react";

export const useHandleEnterKey = (handleKey: Function) => {
  useEffect(() => {
    const handleEnterKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleKey();
      }
    };
    window.addEventListener("keypress", handleEnterKeyPress);
    return () => window.removeEventListener("keypress", handleEnterKeyPress);
  }, [handleKey]);
};
