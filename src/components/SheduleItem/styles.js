import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Themes';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.cardScheduleColor,
        marginTop: 15,
        width: '100%',
        borderRadius: 10,
        padding: 5,
    },
    itemLayoutDetail: {
        flexDirection: 'row',
    },
    itemTextName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondaryColor,
    },
    itemTextNameRed: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    itemTextDetailTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.secondaryColor,
    },
    itemTextDetail: {
        fontSize: 15,
    },
    itemTextDetailMultiline: {
        fontSize: 15,
        justifyContent: "flex-start",
        paddingHorizontal: 10,
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    editButton: {
        marginLeft: 10,
        height: 30,
        backgroundColor: Colors.editAndDeleteCardButton,
        borderRadius: 7,
        padding: 5,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: Colors.shadowColor,
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 30,
        backgroundColor: Colors.editAndDeleteCardButton,
        borderRadius: 7,
        padding: 5,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: Colors.shadowColor,
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.whiteColor,
        fontWeight: 'bold',
    },
});

export default styles