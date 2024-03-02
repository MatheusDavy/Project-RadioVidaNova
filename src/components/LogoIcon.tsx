import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {COLORS} from '../styles/theme-variables';

type Props = {
  style: Object;
  color?: string;
};

export default function LogoIcon({style, color = COLORS.blue300}: Props) {
  return (
    <Svg
      width={104}
      height={140}
      fill="none"
      viewBox="0 0 104 140"
      style={style}>
      <Rect width={21} height={87} x={41.5} y={52.5} stroke={color} rx={10.5} />
      <Rect width={21} height={51} x={41.5} y={0.5} stroke={color} rx={10.5} />
      <Rect
        width={21}
        height={51}
        x={103.5}
        y={41.5}
        stroke={color}
        rx={10.5}
        transform="rotate(90 103.5 41.5)"
      />
      <Rect
        width={21}
        height={51}
        x={51.5}
        y={41.5}
        stroke={color}
        rx={10.5}
        transform="rotate(90 51.5 41.5)"
      />
    </Svg>
  );
}
