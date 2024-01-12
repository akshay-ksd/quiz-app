import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#FAFAFA"
    },
    renderItem:{
        width:"100%",
        height:100,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:"90%",
        height:"80%",
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor: "#FBCEB1",
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
        paddingHorizontal:"8%"
    },
    title:{
        fontSize:14,
        fontWeight:"600",
        color:"black"
    }
});

export default styles