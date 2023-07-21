import { StyleSheet, Text, View ,Dimensions} from 'react-native'

const height=Dimensions.get("window").height
const width=Dimensions.get("window").width
const styles = StyleSheet.create({
  topSection:{
    width:"100%",
    paddingHorizontal:20,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    position:"absolute",
    top:50,
    zIndex:300,
  },
  backButton:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:'lightgrey',
    alignItems:"center",
    justifyContent:"center"
  },
  searchButton:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:'lightgrey',
    alignItems:"center",
    justifyContent:"center"
  },
  categoryHolder:{
    backgroundColor:"red",
    height:height*.30,
    width:width,
    top:-15,
  },
  categoryName:{
    fontSize:40,
    color:"white",
    fontWeight:"600",
    fontStyle:"italic",
    textAlign:"center",
    top:"40%",
  },
  listHeading:{
    marginTop:0,
    paddingHorizontal:20,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
  },
  itemSize:{
    fontSize:16,
    fontWeight:"800",
  },
  filterOption:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    borderRadius:8,
    borderWidth:2,
    paddingHorizontal:8,
    paddingVertical:8,
  }
})


export default styles