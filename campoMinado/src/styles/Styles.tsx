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
        backgroundColor: "#ff2",
        marginLeft: 3
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    base1Big: {
        position: 'absolute',
        height: 3,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 11,
        marginTop: 20
    },
    base2Big: {
        position: 'absolute',
        height: 3,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 6,
        marginTop: 24
    },
    flagBig: {
        position: 'absolute',
        width: 12,
        height: 8,
        backgroundColor: "#f22",
        marginLeft: 3
    },
    flagPoleBig: {
        position: 'absolute',
        height: 20,
        width: 3,
        backgroundColor: '#222',
        marginLeft: 15,
    }
})

export const styleHeader = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#666',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 8
    },
    buttonLabel: {
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export const styleModal = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor:'#EEE',
        alignItems:'center',
        justifyContent:'center',
        padding: 16
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 6
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    easy: {
        backgroundColor: '#49B65D'
    },
    normal: {
        backgroundColor: '#2765F7'
    },
    hard: {
        backgroundColor: '#F26337'
    }
})
