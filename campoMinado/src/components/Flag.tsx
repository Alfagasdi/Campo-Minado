import React from 'react'
import {View} from 'react-native'

import { styleFlag } from '../styles/Styles'

export default function Flag(): React.JSX.Element{

    return(
        <View style={styleFlag.container}>
            <View style={styleFlag.flagPole}/>
            <View style={styleFlag.flag}/>
            <View style={styleFlag.base1}/>
            <View style={styleFlag.base2}/>
        </View>
    )
}