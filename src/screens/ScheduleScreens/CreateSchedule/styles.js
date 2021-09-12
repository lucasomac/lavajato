import { StyleSheet } from "react-native";
import Colors from "../../../../assets/Themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.secondaryColor,
        textAlign: 'center',
        margin: 20,
    },
    inputButtonsView: {
        marginTop: 5,
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    saveButton: {
        marginLeft: 20,
        width: '45%',
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
    inputView: {
        flex: 1,
        padding: 0,
        marginBottom: 5,
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        borderRadius: 5,
        marginBottom: 10,
    },
    inputMultiline: {
        width: '95%',
        height: 120,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'justify'
    },
    viewTimePicker: {
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        width: '45%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 5,
        marginLeft: 19,
        marginBottom: 15,
    },
    inputTimePicker: {
        width: '100%',
        height: 44,
        transform: [ // Para ajustar o tamanho da fonte
            { scaleX: 0.9 },
            { scaleY: 0.9 },
        ],
    },
    viewDatePicker: {
        width: '50%',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        paddingHorizontal: 8,
    },
    datePicker: {
        width: '100%',
        height: 40,
    },
    viewServicePicker: {
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        width: '95%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom: 15,
    },
    inputServicePicker: {
        width: '100%',
        height: 44,
        transform: [ // Para ajustar o tamanho da fonte
            { scaleX: 0.9 },
            { scaleY: 0.9 },
        ],
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
        // marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;