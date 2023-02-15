import { useRef, useEffect, useCallback } from "react";

export const useCircleMove = () => {
  const circleView = useRef<any>(null);
  const mouseMoveHandler = useCallback((e: any, planetImg: any) => {
    const circleRect = circleView.current.getBoundingClientRect();
    const [relX, relY] = [
      e.clientX - circleRect.left,
      e.clientY - circleRect.top,
    ];
    planetImg.forEach((item: any) => {
      item.style.transform = `translate(${relX / 6}px, ${relY / 6}px)`;
    });
  }, []);
  useEffect(() => {
    const planetImg = circleView.current.querySelectorAll(".moveCircle");
    circleView.current.addEventListener("mousemove", (e: any) => {
      mouseMoveHandler(e, planetImg);
    });
    circleView.current.addEventListener("mouseleave", (e: any) => {
      console.log(e.target);
      planetImg.forEach((item: any) => {
        item.style.transform = `translate(0px, 0px)`;
      });
    });
  }, []);

  return circleView
};
