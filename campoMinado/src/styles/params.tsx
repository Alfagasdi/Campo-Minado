import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    dificultLeve: 0.1,
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
    mined: any, 
    opened: boolean, 
    nearMines: any, 
    exploded: boolean
}

export default params