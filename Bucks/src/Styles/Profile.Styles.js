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
    fontSize:32,
    fontWeight:"600",
    textAlign:"center",
    top:40,
    left:10
  },
  dataContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingHorizontal:5,
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
    backgroundColor:"#1E4BA3",
    borderTopStartRadius:48,
    borderTopEndRadius:48,
  },
  overviewHeading:{
    marginTop:10,
    marginLeft:20,
    fontSize:20,
    fontWeight:"700",
    color:'white',
    bottom:5,
    left:70,
    fontSize:24

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
    fontSize:18,
    fontWeight:"600",
    marginLeft:16,
    color:'white'
  },
  row: {
    flexDirection: 'row',
    top:20,
  },
})


export default styles