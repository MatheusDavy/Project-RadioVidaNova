import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};

export function Icons({name, size = 16, color = '#000', style}: Props) {
  return (
    <AntDesign name={name} style={{fontSize: size, color: color, ...style}} />
  );
}
