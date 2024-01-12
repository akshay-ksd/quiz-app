import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        flexDirection: "row",
    
    },
    dashboard: {
        height: "100%",
        width: 70,
        backgroundColor: "#191c24",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row"
    },
    box:{
        height:70,
        paddingHorizontal:"5%",
        alignItems:"center",
        flexDirection:"row",
        zIndex:10000,
        left:"1%"
        // justifyContent:"space-between",
    },
    titleView:{
        width:50
    },
    overBox:{
        width:40,
        height:40,
        backgroundColor:`rgba(58,58,58,0.5)`,
        borderRadius:10,
        position:"absolute"
    },
    menuBox:{
        marginLeft:10
    },
    buttonText:{
        fontSize:14,
        color:"white",
        marginLeft:"15%"
    }
});

export default styles