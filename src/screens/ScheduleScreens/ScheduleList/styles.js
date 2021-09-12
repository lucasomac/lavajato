import { StyleSheet } from "react-native";
import Colors from "../../../../assets/Themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
    },
    scrollContainer: {
        flex: 1,
        width: '90%'
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: Colors.whiteColor
    },
    newButton: {
        width: '50%',
        height: 40,
        backgroundColor: Colors.buttonColor,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'center'
    },
    newButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondaryColor,
        textAlign: 'center',
    },
});

export default styles;