import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexGrow: 1,
    },
    header: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: "6%"
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "black"
    },
    box: {
        width: width / 2.3,
        height: width / 2.1,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop:"8%",
        alignItems:"center"
    },
    icon:{
        width:100,
        height:100,
        bottom:"15%",
    },
    description:{
        width:"100%",
        paddingHorizontal:"10%",
    },
    name:{
        fontSize:16,
        fontWeight:"700",
        color:"black"
    },
    count:{
        fontSize:12,
        fontWeight:"600",
        color:"gray",
        marginTop:"3%"
    }
});

export default styles