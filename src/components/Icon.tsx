import React, {CSSProperties, JSXElementConstructor} from 'react';

interface IconsProps {
  icon: JSXElementConstructor<any>; // Usar JSXElementConstructor para representar um componente JSX
  size?: number;
  color?: string;
  type?: 'fill' | 'thin';
  style?: CSSProperties;
}

export function Icons({
  icon: Icon,
  size = 16,
  color = '#000',
  type = 'thin',
  style,
}: IconsProps) {
  return <Icon style={{...style}} color={color} size={size} weight={type} />;
}
