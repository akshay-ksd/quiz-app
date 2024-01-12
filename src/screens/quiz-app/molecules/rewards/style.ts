import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop:"2%"
    },
    box: {
        width: "90%",
        height: "75%",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    subBox:{
        width:"50%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
        width:45,
        height:45
    },
    textBox:{
        height:"100%",
        flexGrow:1,
        justifyContent:"space-between",
        paddingVertical:"12%",
        marginLeft:"5%"
    },
    title:{
        fontSize:13,
        color:"gray",
        fontWeight:"600"
    },
    point:{
        fontSize:17,
        fontWeight:"bold",
        color:"#33C7EA"
    }
});

export default styles