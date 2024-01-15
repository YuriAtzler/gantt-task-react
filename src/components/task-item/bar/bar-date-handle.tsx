import React from "react";
import styles from "./bar.module.css";

type BarDateHandleProps = {
  x: number;
  y: number;
  position: "left" | "right";
  width: number;
  height: number;
  arrowColor?: string;
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDateHandle: React.FC<BarDateHandleProps> = ({
  x,
  y,
  position,
  onMouseDown,
  width,
  height,
  arrowColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      x={x}
      y={y}
      ry={0}
      rx={0}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={
          position === "left"
            ? "20,2.5 2.5,12.5 20,22.5"
            : "5,2.5 22.5,12.5 5,22.5"
        }
        className={styles.barHandle}
        style={{ fill: arrowColor }}
        onMouseDown={onMouseDown}
      />
    </svg>
  );
};
