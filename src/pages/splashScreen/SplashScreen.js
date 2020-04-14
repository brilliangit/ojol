import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('welcome')
        }, 2000);
    })
    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen;
