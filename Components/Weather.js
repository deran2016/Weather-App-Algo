import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient
                colors={this.props.color}
                style={styles.container}
            >
                <View style={styles.upper}>
                    <Text>Icon here</Text>
                    <Text style={styles.temp}>
                        {this.props.temp}˚
                    </Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>
                        {this.props.main}
                    </Text>
                    <Text style={styles.subtitle}>
                        {this.props.description}
                    </Text>
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