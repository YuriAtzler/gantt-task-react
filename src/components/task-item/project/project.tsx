import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./project.module.css";

export const Project: React.FC<TaskItemProps> = ({ task, isSelected }) => {
  const barColor = isSelected
    ? task.styles.backgroundSelectedColor
    : task.styles.backgroundColor;
  const processColor = isSelected
    ? task.styles.progressSelectedColor
    : task.styles.progressColor;
  const projectWith = task.x2 - task.x1;

  return (
    <g tabIndex={0} className={styles.projectWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height}
        ry={5}
        rx={5}
        className={styles.projectTop}
      />
      <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y}
        height={task.height}
        ry={5}
        rx={5}
        fill={processColor}
      />
    </g>
  );
};
