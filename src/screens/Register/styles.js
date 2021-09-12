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
        fontSize: 30,
        color: Colors.secondaryColor,
        marginBottom: 20,
        textAlign: 'center',
    },
    saveButton: {
        width: '50%',
        height: 40,
        backgroundColor: Colors.buttonColor,
        padding: 5,
        borderRadius: 5,
    },
    saveButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondaryColor,
        textAlign: 'center',
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    inputView: {
        marginTop: 20,
        width: '95%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textSimple: {
        color: Colors.secondaryColor,
        width: '95%',
        textAlign: 'justify',
    },
    warningAlert: {
        paddingLeft: 2,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentAlert: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;