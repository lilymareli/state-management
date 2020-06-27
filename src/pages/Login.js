import React, { useContext } from 'react'
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native'

import Context from '../context/store'

const Login = props => {

    const { state, dispatch } = useContext(Context)

    const login = () => {
        const userResponse = { name: "Ezran", surname: "Bayantemur", email: "ezranbayantemur@gmail.com" }
        dispatch({ type: "SET_USER", userOBJ: userResponse })
        props.navigation.navigate("Facts")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <View style={{ backgroundColor: '#bdbdbd', padding: 10, marginVertical: 5, borderRadius: 20 }}>
                    <TextInput
                        placeholder="E-postanız.."
                    />
                </View>

                <View style={{ backgroundColor: '#bdbdbd', padding: 10, marginVertical: 5, borderRadius: 20 }}>
                    <TextInput
                        placeholder="Şifreniz.."
                    />
                </View>

                <Button
                    title="Giriş"
                    onPress={login}
                />

            </View>
        </SafeAreaView>
    )
}

export { Login }