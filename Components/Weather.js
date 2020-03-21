import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Palette = {
    red: ["#AC725A", "#9C5353"],
    green: ["#589A60", "#5BBB73"],
    blue: ["#00C6FB","#005BEA"],
    deepblue: ["#14375A", "#53799C"]
}

export default class Weather extends Component {
    state = {
        color: Palette.red
    }

    render() {
        return (
            <LinearGradient
                colors={this.state.color}
                style={styles.container}
            >
                <View style={styles.upper}>
                    <Text>Icon here</Text>
                    <Text style={styles.temp}>{this.props.temp}˚</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{this.props.main}</Text>
                    <Text style={styles.subtitle}>{this.props.description}</Text>
                </View>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});