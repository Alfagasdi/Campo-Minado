import { boardProperties } from "./styles/params"

const createBoard = (rows: number, columns: number): boardProperties[][] => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board: boardProperties[][], minesAmout: number) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmout) {
        const rowSel = Math.floor(Math.random() * rows)
        const columnSel = Math.floor(Math.random() * columns)
        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const cloneBoard = (board: boardProperties[][]) => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

const getNeighbors = (board: boardProperties[][], row: number, column: number) => {
    const neighbors: boardProperties[] = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

const safeNeighhborhood = (board: boardProperties[][], row: number, column: number) => {
    const safe = (result: any, neighbor: boardProperties) => { return result && !neighbor.mined }
    return getNeighbors(board, row, column).reduce(safe, true)
}

const openField = (board: boardProperties[][], row: number, column: number) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        }
        else if (safeNeighhborhood(board, row, column)) {
            getNeighbors(board, row, column).forEach((n: boardProperties) => {
                openField(board, n.row, n.column)
            })
        } else {
            const neighbor = getNeighbors(board, row, column)
            field.nearMines = neighbor.filter((n: boardProperties) => n.mined).length
        }

    }
}

const fields = (board: boardProperties[][]): boardProperties[] => {
    const arrayField: boardProperties[] = []
    return arrayField.concat(...board)
}
const hadExplosion = (board: boardProperties[][]) => fields(board).filter(field => field.exploded).length > 0

const pendding = (field: boardProperties) => (field.mined && !field.flagged) || (!field.mined && !field.opened)

const wonGame = (board: boardProperties[][]) => fields(board).filter(pendding).length === 0

const flagField = (board: boardProperties[][], row: number, column: number) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

const showMines = (board: boardProperties[][]) => fields(board)
    .filter(field => field.mined)
    .forEach(field => field.opened = true)

const createMinedBoard = (rows: number, columns: number, mineAmount: number) => {
    const board = createBoard(rows, columns)
    spreadMines(board, mineAmount)
    return board
}

export { cloneBoard, createMinedBoard, hadExplosion, openField, showMines, wonGame, flagField }
