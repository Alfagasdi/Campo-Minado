import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styleHeader } from '../styles/Styles'
import Flag from './Flag'

export default function Header(props: { flagsUsed: number, onFlagPress: () => void, newGame: () => void}): React.JSX.Element {


    return (
        <View style={styleHeader.container}>
            <View style={styleHeader.flagContainer}>
                <TouchableOpacity
                    onPress={props.onFlagPress}
                    style={styleHeader.flagButton}>
                    <Flag big={true} />
                </TouchableOpacity>
                <Text style={styleHeader.flagsLeft}>
                    = {props.flagsUsed}
                </Text>
            </View>
            <TouchableOpacity style={styleHeader.button} onPress={props.newGame}>
                <Text style={styleHeader.buttonLabel}>
                    Novo Jogo
                </Text>
            </TouchableOpacity>
        </View>
    )
}