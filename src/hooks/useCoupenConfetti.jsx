import { useEffect } from "react";
import confetti from "canvas-confetti";

const useCoupenConfetti = (trigger) => {
  useEffect(() => {
    if (trigger) {
      const end = Date.now() + 2 * 1000;
      const colors = ["#bb0000", "#ff6600"];

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [trigger]);
};

export default useCoupenConfetti;
