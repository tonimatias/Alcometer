import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#B5D5C5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 150
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        width: 80,
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        borderColor: 'black',
        fontSize: 18,
    },
    title: {
        fontSize: 50,
        paddingBottom: 30,

    },
    switchRow: {
        paddingTop: 20,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        alignSelf: "flex-end"
    },
    switch: {
        alignSelf: "flex-start",
    },
    darkMode: {
        backgroundColor: 'gray',
        color: 'white',
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        height: 60,
        width: 120,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonText:{
        fontSize: 20
    },  
    text: {
        fontWeight: 'bold',
        padding: 15
    },
    male: {
        marginTop: 20
    },
    result: {
        fontWeight: 'bold',

    },
    numericInput: {
        backgroundColor: 'pink',
        
    }
});
