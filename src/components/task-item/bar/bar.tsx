import React from "react";
import { getProgressPoint } from "../../../helpers/bar-helper";
import { BarDisplay } from "./bar-display";
import { BarDateHandle } from "./bar-date-handle";
import { BarProgressHandle } from "./bar-progress-handle";
import { TaskItemProps } from "../task-item";
import styles from "./bar.module.css";
import { Tag } from "./tag";

export const Bar: React.FC<TaskItemProps> = ({
  task,
  isProgressChangeable,
  isDateChangeable,
  rtl,
  onEventStart,
  isSelected,
}) => {
  const progressPoint = getProgressPoint(
    +!rtl * task.progressWidth + task.progressX,
    task.y,
    task.height
  );

  const handleHeight = task.height - 2;
  return (
    <g id={task.id} className={styles.barWrapper} tabIndex={0}>
      {task.showsPlanned && task.finalX1 && task.finalX2 && (
        <BarDisplay
          x={task.x1}
          y={task.y}
          width={task.x2 - task.x1}
          height={task.height}
          progressX={task.progressX}
          progressWidth={task.progressWidth}
          barCornerRadius={task.barCornerRadius}
          isGhost={true}
          tag={task.tag}
          styles={task.styles}
          isSelected={isSelected}
          onMouseDown={e => {
            isDateChangeable && onEventStart("move", task, e);
          }}
        />
      )}

      {!task.finalX1 && !task.finalX2 && (
        <BarDisplay
          x={task.x1}
          y={task.y}
          width={task.x2 - task.x1}
          height={task.height}
          progressX={task.progressX}
          progressWidth={task.progressWidth}
          barCornerRadius={task.barCornerRadius}
          isGhost={false}
          tag={task.tag}
          styles={task.styles}
          isSelected={isSelected}
          onMouseDown={e => {
            isDateChangeable && onEventStart("move", task, e);
          }}
        />
      )}

      {/**
       * @Description
       * -> Background final dates
       */}
      {task.finalX1 && task.finalX2 && (
        <g>
          <rect
            x={task.finalX1}
            width={
              task.finalX2 - task.finalX1 < 15
                ? 15
                : task.finalX2 - task.finalX1
            }
            y={task.y}
            height={task.height}
            ry={5}
            rx={5}
            fill={task.styles.barFinalExecutionColor}
            style={{ strokeWidth: 0 }}
          />

          {task.tag?.name && (
            <Tag
              tag={task.tag}
              x={task.finalX1}
              height={task.height}
              width={
                task.finalX2 - task.finalX1 < 15
                  ? 15
                  : task.finalX2 - task.finalX1
              }
              y={task.y}
            />
          )}
        </g>
      )}

      <g className="handleGroup">
        {isDateChangeable && (
          <g>
            {/* left */}
            <BarDateHandle
              x={task.x1 - 25}
              y={task.y + 1}
              width={28}
              height={handleHeight}
              position="left"
              arrowColor={task.styles.barArrowColor}
              onMouseDown={e => {
                onEventStart("start", task, e);
              }}
            />
            {/* right */}
            <BarDateHandle
              x={task.x2 - task.handleWidth + 5}
              y={task.y + 1}
              width={28}
              height={handleHeight}
              position="right"
              arrowColor={task.styles.barArrowColor}
              onMouseDown={e => {
                onEventStart("end", task, e);
              }}
            />
          </g>
        )}
        {isProgressChangeable && (
          <BarProgressHandle
            progressPoint={progressPoint}
            onMouseDown={e => {
              onEventStart("progress", task, e);
            }}
          />
        )}
      </g>
    </g>
  );
};
