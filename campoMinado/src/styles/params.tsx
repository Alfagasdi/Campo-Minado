import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    dificultLevel: 0.1,
    getCollumsAmout() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmout() {
        const height = Dimensions.get('window').height
        const boardHeight = height * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export type fieldProperties = {
    mined: boolean, 
    opened: boolean, 
    nearMines: number, 
    exploded: boolean,
    flagged: boolean
}

export type boardProperties = {
    row: number,
    column: number,
    opened: boolean,
    flagged: boolean,
    mined: boolean,
    exploded: boolean,
    nearMines: number
}

export default params