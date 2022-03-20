import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export const AntICon = (props) => {
    return <AntDesign {...props}/>;
}

export const NBICon = ({iconType, style}) => {
    return <Icon as={iconType} {...style}/>;
}

export const MatComICon = (props) => {
    return <MaterialCommunityIcons {...props}/>;
}
export const MatICon = (props) => {
    return <MaterialIcons {...props}/>;
}

export const FAICon = (props) => {
    return <FontAwesome {...props}/>;
}
export const FA5ICon = (props) => {
    return <FontAwesome5 {...props}/>;
}

