import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const ImageSlider = [
    {
        title: "Title",
        image: require('../assets/images/slider-1.png'),
        description: "Description"
    },
    {
        title: "Title",
        image: require('../assets/images/slider-1.png'),
        description: "Description"
    },
    {
        title: "Title",
        image: require('../assets/images/slider-1.png'),
        description: "Description"
    },
    {
        title: "Title",
        image: require('../assets/images/slider-1.png'),
        description: "Description"
    },
]