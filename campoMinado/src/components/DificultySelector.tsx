import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { styleModal } from '../styles/Styles'

type difficultyButtons = {
    label: string,
    style: any,
    difficulty: number
}

export default function (props: { isVisible: boolean, onCancel: () => void, onLevelSelected: (level: number) => void }): React.JSX.Element {
    const dificults: difficultyButtons[] = [
        {
            label: 'Fácil',
            style: styleModal.easy,
            difficulty: 0.1
        },
        {
            label: 'Médio',
            style: styleModal.normal,
            difficulty: 0.2
        },
        {
            label: 'Difícil',
            style: styleModal.hard,
            difficulty: 0.3
        }
    ]

    function Buttons(buttonProperty: difficultyButtons) {
        return <>
            <TouchableOpacity style={[styleModal.button, buttonProperty.style]}
                onPress={() => props.onLevelSelected(buttonProperty.difficulty)}>
                <Text style={styleModal.buttonLabel}>{buttonProperty.label}</Text>
            </TouchableOpacity>
        </>
    }

    const showButtons = () => {
        return dificults.map((button: difficultyButtons) => {
            return Buttons(button)
        })
    }
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}>
            <View style={styleModal.frame}>
                <View style={styleModal.container}>
                    <Text style={styleModal.title}> Selecione o nivel de dificuldade</Text>
                    {showButtons()}
                </View>
            </View>
        </Modal>
    )
}
