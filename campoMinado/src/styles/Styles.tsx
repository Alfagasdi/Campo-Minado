import { StyleSheet } from "react-native";
import params from './params';

export const stylesBloc = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    flagged: {

    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }

})

export const stylesSteve = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    },

})

export const styleFlag = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flag: {
        position: 'absolute',
        width: 6,
        height: 5,
        backgroundColor: "#f22",
        marginLeft: 3
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    }
})