import React, { Component } from 'react'
import { SafeAreaView, Text, View, Alert } from 'react-native'

import { createMinedBoard, cloneBoard, hadExplosion, openField, showMines, wonGame, flagField } from './GameLogic'
import MineField from './components/MineField'
import { stylesBloc } from './styles/Styles'
import params, { boardProperties } from './styles/params'

type State = {
    board: boardProperties[][],
    won: boolean,
    lose: boolean
}


export default class App extends Component<any, State> {
    rows = params.getRowsAmout()
    column = params.getCollumsAmout()

    constructor(props: any) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        return Math.ceil(this.column * this.rows * params.dificultLevel)
    }

    createState = () => {
        const board = createMinedBoard(this.rows, this.column, this.minesAmount())
        return {
            board,
            won: false,
            lose: false
        }
    }

    onFieldAreClicked = (row: number, column: number) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lose = hadExplosion(board)
        const won = wonGame(board)

        if (lose) {
            showMines(board)
            Alert.alert('Perdeu', "Que pena")
        }
        if (won) {
            Alert.alert('Parabéns', 'Você venceu')
        }

        this.setState({ board, won, lose })
    }

    onFlagField = (row: number, column: number) => {
        const board = cloneBoard(this.state.board)
        flagField(board, row, column)
        const won = wonGame(board)
        if (won) {
            Alert.alert('Parabéns', 'Você venceu')
        }
        this.setState({board, won})
    }

    render() {
        this.createState
        return (
            <SafeAreaView style={stylesBloc.home}>
                <Text>Início do projeto</Text>
                <Text>{params.getCollumsAmout()} X {params.getRowsAmout()}</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <MineField
                        board={this.state.board}
                        onOpenField={(row: number, column: number) => { this.onFieldAreClicked(row, column) }}
                        onFlagField={(row: number, column: number) => { this.onFlagField(row, column) }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
