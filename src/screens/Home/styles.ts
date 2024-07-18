import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    background: {
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
    },
    logo: {
        alignSelf: "center",
        marginTop: 72,
        marginBottom: 40,
    },
    addTaskContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 24
    },
    addTaskBox: {

        width: '80%',
        backgroundColor: '#262626',
        color: '#F2F2F2',
        height: 54,
        paddingLeft: 15,
        paddingRight: 10,
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 2
    },
    addTaskButton: {
        backgroundColor: '#1E6F9F',
        height: 50,
        width: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginLeft: 27,
        marginRight: 26,
        marginBottom: 10
    },
    optionsTextBox: {
        flexDirection: "row",
    },
    optionCreateText: {
        color: "#4EA8DE",
        fontSize: 14,
        fontWeight: "700",
        marginRight: 10
    },
    optionConcludeText: {
        color: "#8284FA",
        fontSize: 14,
        fontWeight: "700",
        marginRight: 10
    },
    emptyListContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListLine: {
        alignSelf: 'center',
        backgroundColor: '#333333',
        width: 305,
        height:1
    },
    emptyListBoldText: {
        color: '#808080',
        marginTop: 16,
        fontWeight: '700'
    },
    emptyListText: {
        color: '#808080',
    },



})