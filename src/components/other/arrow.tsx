import React from "react";
import { BarTask } from "../../types/bar-task";

type ArrowProps = {
  taskFrom: BarTask;
  taskTo: BarTask;
  rowHeight: number;
  taskHeight: number;
  arrowIndent: number;
  rtl: boolean;
};
export const Arrow: React.FC<ArrowProps> = ({
  taskFrom,
  taskTo,
  rowHeight,
  taskHeight,
  arrowIndent,
  rtl,
}) => {
  let path: string;
  let trianglePoints: string;
  if (rtl) {
    [path, trianglePoints] = drownPathAndTriangleRTL(
      taskFrom,
      taskTo,
      rowHeight,
      taskHeight,
      arrowIndent
    );
  } else {
    [path, trianglePoints] = drownPathAndTriangle(
      taskFrom,
      taskTo,
      rowHeight,
      taskHeight,
      arrowIndent
    );
  }

  return (
    <g className="arrow">
      <path strokeWidth="1.5" d={path} fill="none" />
      <polygon points={trianglePoints} />
    </g>
  );
};

const drownPathAndTriangle = (
  taskFrom: BarTask,
  taskTo: BarTask,
  rowHeight: number,
  taskHeight: number,
  arrowIndent: number
) => {
  if (
    taskFrom.finalX1 &&
    taskFrom.finalX2 &&
    taskTo.finalX1 &&
    taskTo.finalX2
  ) {
    const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
    const taskToEndPosition = taskTo.y + taskHeight / 2;
    const taskFromEndPosition = taskFrom.finalX2 + arrowIndent * 2;
    const taskFromHorizontalOffsetValue =
      taskFromEndPosition < taskTo.finalX1
        ? ""
        : `H ${taskTo.finalX1 - arrowIndent}`;
    const taskToHorizontalOffsetValue =
      taskFromEndPosition > taskTo.finalX1
        ? arrowIndent
        : taskTo.finalX1 - taskFrom.finalX2 - arrowIndent;

    const path = `M ${taskFrom.finalX2} ${taskFrom.y + taskHeight / 2}
  h ${arrowIndent}
  v ${(indexCompare * rowHeight) / 2}
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition}
  h ${taskToHorizontalOffsetValue}`;

    const trianglePoints = `${taskTo.finalX1},${taskToEndPosition}
  ${taskTo.finalX1 - 5},${taskToEndPosition - 5}
  ${taskTo.finalX1 - 5},${taskToEndPosition + 5}`;
    return [path, trianglePoints];
  } else if (
    !taskFrom.finalX1 &&
    !taskFrom.finalX2 &&
    taskTo.finalX1 &&
    taskTo.finalX2
  ) {
    const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
    const taskToEndPosition = taskTo.y + taskHeight / 2;
    const taskFromEndPosition = taskFrom.x2 + arrowIndent * 2;
    const taskFromHorizontalOffsetValue =
      taskFromEndPosition < taskTo.finalX1
        ? ""
        : `H ${taskTo.finalX1 - arrowIndent}`;
    const taskToHorizontalOffsetValue =
      taskFromEndPosition > taskTo.finalX1
        ? arrowIndent
        : taskTo.finalX1 - taskFrom.x2 - arrowIndent;

    const path = `M ${taskFrom.x2} ${taskFrom.y + taskHeight / 2}
  h ${arrowIndent}
  v ${(indexCompare * rowHeight) / 2}
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition}
  h ${taskToHorizontalOffsetValue}`;

    const trianglePoints = `${taskTo.finalX1},${taskToEndPosition}
  ${taskTo.finalX1 - 5},${taskToEndPosition - 5}
  ${taskTo.finalX1 - 5},${taskToEndPosition + 5}`;
    return [path, trianglePoints];
  } else if (
    taskFrom.finalX1 &&
    taskFrom.finalX2 &&
    !taskTo.finalX1 &&
    !taskTo.finalX2
  ) {
    const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
    const taskToEndPosition = taskTo.y + taskHeight / 2;
    const taskFromEndPosition = taskFrom.finalX2 + arrowIndent * 2;
    const taskFromHorizontalOffsetValue =
      taskFromEndPosition < taskTo.x1 ? "" : `H ${taskTo.x1 - arrowIndent}`;
    const taskToHorizontalOffsetValue =
      taskFromEndPosition > taskTo.x1
        ? arrowIndent
        : taskTo.x1 - taskFrom.finalX2 - arrowIndent;

    const path = `M ${taskFrom.finalX2} ${taskFrom.y + taskHeight / 2}
  h ${arrowIndent}
  v ${(indexCompare * rowHeight) / 2}
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition}
  h ${taskToHorizontalOffsetValue}`;

    const trianglePoints = `${taskTo.x1},${taskToEndPosition}
  ${taskTo.x1 - 5},${taskToEndPosition - 5}
  ${taskTo.x1 - 5},${taskToEndPosition + 5}`;
    return [path, trianglePoints];
  } else {
    const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
    const taskToEndPosition = taskTo.y + taskHeight / 2;
    const taskFromEndPosition = taskFrom.x2 + arrowIndent * 2;
    const taskFromHorizontalOffsetValue =
      taskFromEndPosition < taskTo.x1 ? "" : `H ${taskTo.x1 - arrowIndent}`;
    const taskToHorizontalOffsetValue =
      taskFromEndPosition > taskTo.x1
        ? arrowIndent
        : taskTo.x1 - taskFrom.x2 - arrowIndent;

    const path = `M ${taskFrom.x2} ${taskFrom.y + taskHeight / 2}
  h ${arrowIndent}
  v ${(indexCompare * rowHeight) / 2}
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition}
  h ${taskToHorizontalOffsetValue}`;

    const trianglePoints = `${taskTo.x1},${taskToEndPosition}
  ${taskTo.x1 - 5},${taskToEndPosition - 5}
  ${taskTo.x1 - 5},${taskToEndPosition + 5}`;
    return [path, trianglePoints];
  }
};

const drownPathAndTriangleRTL = (
  taskFrom: BarTask,
  taskTo: BarTask,
  rowHeight: number,
  taskHeight: number,
  arrowIndent: number
) => {
  const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
  const taskToEndPosition = taskTo.y + taskHeight / 2;
  const taskFromEndPosition = taskFrom.x1 - arrowIndent * 2;
  const taskFromHorizontalOffsetValue =
    taskFromEndPosition > taskTo.x2 ? "" : `H ${taskTo.x2 + arrowIndent}`;
  const taskToHorizontalOffsetValue =
    taskFromEndPosition < taskTo.x2
      ? -arrowIndent
      : taskTo.x2 - taskFrom.x1 + arrowIndent;

  const path = `M ${taskFrom.x1} ${taskFrom.y + taskHeight / 2}
  h ${-arrowIndent}
  v ${(indexCompare * rowHeight) / 2}
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition}
  h ${taskToHorizontalOffsetValue}`;

  const trianglePoints = `${taskTo.x2},${taskToEndPosition}
  ${taskTo.x2 + 5},${taskToEndPosition + 5}
  ${taskTo.x2 + 5},${taskToEndPosition - 5}`;
  return [path, trianglePoints];
};
