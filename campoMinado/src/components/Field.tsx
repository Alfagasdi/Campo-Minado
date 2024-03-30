import React from 'react'
import { Text, View } from 'react-native'

import { stylesBloc } from '../styles/Styles'
import { fieldProperties } from '../styles/params'
import Mine from './Mine'

export default function Field(props: fieldProperties): React.JSX.Element {

    const { mined, opened, nearMines, exploded } = props

    const styleField: any[] = [stylesBloc.field]

    if (opened) { styleField.push(stylesBloc.opened) }
    if (exploded) { styleField.push(stylesBloc.exploded) }
    if (styleField.length === 1) styleField.push(stylesBloc.regular)

    let color = ''
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }


    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[stylesBloc.label, { color: color }]}>
                    {nearMines}
                </Text> : false}
            {mined && opened ? <Mine /> : false}
        </View>
    )
}