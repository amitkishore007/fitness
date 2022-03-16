import { StyleSheet } from 'react-native'
import React from 'react'
import { Box } from 'native-base'

export const Card = (props) => {

  const style = {...styles.container, ...props.style};
  return (
    <Box {...style}>
        {props.children}
    </Box>
  )
}

const styles = {
    container: {
        // maxW: "80",
        // rounded: "lg",
        // overflow: "hidden",
        // borderColor: "coolGray.200",
        // borderWidth: "1",
        _dark: {
            // borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        },
        _light: {
                backgroundColor: "gray.50"
        }
    }
}
