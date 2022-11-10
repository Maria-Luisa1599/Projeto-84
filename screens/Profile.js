import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default class Profile extends React.Component{
    render(){
        return(
            <View styles={styles.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});