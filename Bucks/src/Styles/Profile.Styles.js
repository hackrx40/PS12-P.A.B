import { StyleSheet, Text, View ,Dimensions} from 'react-native'

const height=Dimensions.get("window").height
const width=Dimensions.get("window").width
const styles = StyleSheet.create({
  topSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    marginBottom:16,
  },
  heading:{
    fontSize:24,
    fontWeight:"600",
    textAlign:"center",
  },
  dataContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingHorizontal:10,
    marginVertical:80,
  },
  imageStyle:{
    height:120,
    width:120,
    borderRadius:120,
  },
  username:{
    fontSize:24,
    fontWeight:"600",
    marginVertical:4,
  },
  email:{
    fontSize:16,
    marginVertical:4,
    fontWeight:"400",
  },
  accountOverview:{
    width:width,
    backgroundColor:"lightgrey",
    borderTopStartRadius:48,
    borderTopEndRadius:48,
  },
  overviewHeading:{
    marginTop:20,
    marginLeft:20,
    fontSize:20,
    fontWeight:"600",
  },
  optionRow:{
    flexDirection:"row",
    paddingHorizontal:24,
    justifyContent:"space-between",
    paddingVertical:16,
  },
  rowLeftGroup:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"600",
    marginLeft:16,
  }
})


export default styles