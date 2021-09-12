import { StyleSheet } from "react-native";
import Colors from "../../../assets/Themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: Colors.secondaryColor,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    helloText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.secondaryColor,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    imgLogo: {
        marginBottom: 0
    },
    contentAlert: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;