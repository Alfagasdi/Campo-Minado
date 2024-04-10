import React from 'react'
import { View } from 'react-native'

import { styleFlag } from '../styles/Styles'

export default function Flag(props: {big: boolean}): React.JSX.Element {

    const isBigFlag = () => {
        if (props.big) {
            return <>
                <View style={styleFlag.flagPoleBig} />
                <View style={styleFlag.flagBig} />
                <View style={styleFlag.base1Big} />
                <View style={styleFlag.base2Big} />
            </>
        } else {
            return <>
                <View style={styleFlag.flagPole} />
                <View style={styleFlag.flag} />
                <View style={styleFlag.base1} />
                <View style={styleFlag.base2} />
            </>
        }
    }

    return (
        <View style={styleFlag.container}>
            {isBigFlag()}
        </View>
    )
}