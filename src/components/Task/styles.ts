import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        alignItems: 'center',
        backgroundColor: '#262626',
        marginTop: 10,
        height: 64,
        marginLeft: 25,
        marginRight: 24,
        paddingRight: 20,
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
    },
    taskBox: {
        width: 220,
        justifyContent: 'center'
    },
    checkedTaskText: {
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    uncheckedTaskText: { 
        color: '#F2F2F2'
    }

})