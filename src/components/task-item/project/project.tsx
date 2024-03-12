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
    <g id={task.id} tabIndex={0} className={styles.projectWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith < 36 ? 36 : projectWith}
        y={task.y + task.height / 4}
        height={task.height / 2}
        ry={projectWith < 36 ? 0 : 5}
        rx={projectWith < 36 ? 0 : 5}
        className={styles.projectTop}
      />

      <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y}
        height={task.height}
        ry={projectWith < 36 ? 0 : 5}
        rx={projectWith < 36 ? 0 : 5}
        fill={processColor}
      />

      {projectWith > 50 && (
        <svg
          height={task.height * 1.15}
          width={projectWith}
          x={task.x1}
          y={task.y}
          fill={barColor}
        >
          <polygon
            points={`10,${task.height / 2} 40,${task.height / 2} 15,${
              task.height * 1.15
            } 10,${task.height * 1.15}`}
          />
        </svg>
      )}

      {projectWith > 50 && (
        <svg
          height={task.height * 1.15}
          width={projectWith}
          x={task.x1}
          y={task.y}
          fill={barColor}
        >
          <polygon
            points={`${projectWith - 10},${task.height / 2} ${
              projectWith - 40
            },${task.height / 2}
            ${projectWith - 15},${task.height * 1.15}
            ${projectWith - 10},${task.height * 1.15}`}
          />
        </svg>
      )}
    </g>
  );
};
