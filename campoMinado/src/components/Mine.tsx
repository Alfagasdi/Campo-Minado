import React from 'react'
import { View } from 'react-native'

import { stylesSteve } from '../styles/Styles'

export default function Mine(): React.JSX.Element {


    return (
        <View style={stylesSteve.container}>
            <View style={stylesSteve.coreMine}/>
            <View style={stylesSteve.line}/>
            <View style={[stylesSteve.line, {transform:[{rotate: '45deg'}]}]}/>
            <View style={[stylesSteve.line, {transform:[{rotate: '90deg'}]}]}/>
            <View style={[stylesSteve.line, {transform:[{rotate: '135deg'}]}]}/>
        </View>
    )
}