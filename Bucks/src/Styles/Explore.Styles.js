import { StyleSheet, Text, View ,Dimensions} from 'react-native'

const height=Dimensions.get("window").height
const width=Dimensions.get("window").width

const styles = StyleSheet.create({
  topBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:16,
    marginTop:16,
  },
  salutation:{
    fontSize:20,
    fontWeight:"600",
  },
  rightGroup:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  optionContainer:{
    marginVertical:12,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  topContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:16,
    marginVertical:16,
  },
  heading:{
    fontSize:20,
    fontWeight:"600"
  },
  seeAll:{
    color:"orange",
    fontSize:16,
    fontWeight:"400"
  },
  row: {
    flexDirection: 'row',
    top:20,
  },
})


export default styles