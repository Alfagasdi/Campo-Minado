import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import { stylesBloc } from './styles/Styles'
import params from './styles/params'
import Field from './components/Field'

export default class App extends React.Component {

    showBlocs = () => {

    }

    render() {

        return (
            <SafeAreaView style={stylesBloc.home}>
                <Text>Início do projeto</Text>
                <Text>{params.getCollumsAmout()} X {params.getRowsAmout()}</Text>
                <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                    <Field></Field>
                    <Field opened={true} nearMines={0} exploded={true} mined={true}></Field>
                    <Field opened={true} nearMines={0} exploded={false} mined={true}></Field>
                    <Field opened={true} nearMines={0}></Field>
                    <Field opened={true} nearMines={1}></Field>
                    <Field opened={true} nearMines={2}></Field>
                    <Field opened={true} nearMines={3}></Field>
                    <Field opened={true} nearMines={4}></Field>
                    <Field opened={true} nearMines={5}></Field>
                    <Field opened={true} nearMines={6}></Field>
                    <Field opened={true} nearMines={9}></Field>

                </View>
            </SafeAreaView>
        )
    }
}
