import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import UserStore from '../Stores/User'
import { User } from '../Interfaces/User'

interface Props {
}

interface State {  

}



export default class Home extends Component<Props, State> {
    constructor(props : Props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View> 
                <Text>Welcome home</Text>
            </View>
        )
    }
} 
