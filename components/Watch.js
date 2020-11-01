import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  useSpring,
  animated,
  useTransition,
  useChain,
  useSprings,
  config,
} from "react-spring";

import useMousePosition from "../Hooks/useMousePosition";

let childNodeX;
let childNodeY;
let childNodeClientX;
let childNodeClientY;

export default function Watch(props) {
  const [distanceX, setDistanceX] = useState();
  const [distanceY, setDistanceY] = useState();
  const [current, set] = useState(0);

  const { x, y } = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const parentContainer = useRef();
  useEffect(() => {
    const center = parentContainer.current.childNodes.length / 2 - 0.5;

    childNodeClientX = parentContainer.current.clientWidth / 2;
    childNodeClientY = parentContainer.current.clientHeight / 2;
    childNodeX = parentContainer.current.offsetLeft + childNodeClientY;
    childNodeY = parentContainer.current.offsetTop + childNodeClientX;

    const scaleX = limitNumberWithinRange((1 / Math.abs(childNodeX - x)) * 600);
    const scaleY = limitNumberWithinRange((1 / Math.abs(childNodeY - y)) * 600);
    if (scaleX > scaleY) {
      set(scaleY);
    } else {
      set(scaleX);
    }
  }, [x,y]);

  function limitNumberWithinRange(num, min, max) {
    const MIN = min || 1.0;
    const MAX = max || 2.0;
    const parsed = parseInt(num);
    return Math.min(Math.max(num, MIN), MAX);
  }

  return (
    <animated.div
      ref={parentContainer}
      class="col-start-4 col-span-1 bg-yellow-300 rounded-full"
      style={{
        width: "12rem",
        height: "12rem",
        maxHeight: "24rem",
        maxWidth: "24rem",
        transform: `scale(${current})`,
        backgroundImage: 'url("/200x200.jpg")',
      }}
    ></animated.div>
  );
}
