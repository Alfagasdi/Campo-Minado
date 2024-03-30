import { StyleSheet } from "react-native";
import params from './params';

export const stylesBloc = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor:'#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened:{
        backgroundColor:'#999',
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
    label:{
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }
    
})

export const stylesSteve= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    coreMine:{
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line:{
        position: 'absolute',
        height:3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    },

})

export const styleFlag = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    base1:{

    },
    base2:{

    },
    flag:{
        
    },
    flagPole:{
        
    }
})