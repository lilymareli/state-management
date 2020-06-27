import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'
import Context from '../context/store'

const Facts = props => {
    const { state, dispatch } = useContext(Context)

    useEffect(() => {
        axios.get("https://cat-fact.herokuapp.com/facts")
            .then((result) => {
                dispatch({ type: "SET_CATS", catFactsARR: result.data.all })
            }).catch((err) => {

            });
    }, [])

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, padding: 10 }}>Hoşgeldin: {state.user.name} {state.user.surname}</Text>

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={state.catFacts}
                ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: "#e0e0e0", marginVertical: 5 }} />}
                renderItem={({ item }) => <Text>{item.text}</Text>}
            />
        </SafeAreaView>
    )
}

export { Facts }