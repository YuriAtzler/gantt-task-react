import React from "react";

interface TagProps {
  x: number;
  y: number;
  width: number;
  height: number;
  tag: {
    color: string;
    name: string;
    value?: string | number | undefined;
    category?: string | number | undefined;
  };
}

export function Tag({ height, tag, width, x, y }: TagProps) {
  return (
    <g>
      <g>
        <rect
          x={x}
          width={10}
          y={y}
          ry={4}
          rx={4}
          height={height}
          style={{
            fill: tag.color,
          }}
        />
        <rect
          x={x + 5}
          width={5}
          y={y}
          height={height}
          style={{
            fill: tag.color,
          }}
        />
      </g>

      <g>
        <rect
          x={x + width - 10}
          width={10}
          y={y}
          ry={4}
          rx={4}
          height={height}
          style={{
            fill: tag.color,
          }}
        />
        <rect
          x={x + width - 10}
          width={5}
          y={y}
          height={height}
          style={{
            fill: tag.color,
          }}
        />
      </g>
    </g>
  );
}
