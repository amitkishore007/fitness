import React from 'react';
import { Text, Pressable } from 'native-base';

export const NBPressable = (props) => {
  return (
    <Pressable onPress={props.onClick}>
        {
        ({ isHovered,  isFocused, isPressed }) => {
            return <Text color={isPressed ? props.pressedColor: isHovered ? props.hoveredColor: props.defaultColor} fontWeight="bold" {...props.style} >{props.title}</Text>
          }
        }
    </Pressable>
  )
}