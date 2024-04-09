import React from 'react'
import { View } from 'react-native'

import Field from './Field'
import { boardProperties } from '../styles/params'
import { openField } from '../GameLogic'

export default function MineField(props: {
    board: boardProperties[][],
    onOpenField: (row: number, column: number) => void,
    onFlagField: (row: number, column: number) => void
}): React.JSX.Element {

    const rows = props.board.map((row, r) => {
        const column = row.map((field, c) => {
            return <Field
                board={field} key={c}
                onFieldPress={() => { props.onOpenField(r, c) }}
                onFlagField={() => { props.onFlagField(r, c) }}
            />
        })
        return <View key={r} style={{ flexDirection: 'row' }}>{column}</View>
    })

    return <View style={{ backgroundColor: '#eee' }}>{rows}</View>

}