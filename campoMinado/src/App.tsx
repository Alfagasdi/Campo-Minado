import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { styles } from './styles/Styles'

export default class App extends React.Component {



    render() {

        return (
            <SafeAreaView style={styles.home}>
                <Text>Início do projeto</Text>
            </SafeAreaView>
        )
    }
}
