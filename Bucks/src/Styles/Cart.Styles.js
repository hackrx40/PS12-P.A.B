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
  },

  backButton:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:'lightgrey',
    alignItems:"center",
    justifyContent:"center"
  },
  userBox:{
    backgroundColor:"white",
    marginTop:16,
    marginHorizontal:10,
    flexDirection:"row",
    paddingHorizontal:16,
    alignItems:"center",
    justifyContent:"flex-start",
    paddingVertical:8,
    borderRadius:8,
    height:100
  },
  addressName:{
    fontSize:16,
    fontWeight:"600",
    marginLeft:10
  },
  addressBox:{
    backgroundColor:"white",
    marginTop:16,
    marginHorizontal:10,
    flexDirection:"row",
    paddingHorizontal:16,
    alignItems:"center",
    justifyContent:"flex-start",
    paddingVertical:12,
    borderRadius:8,
  },
  address:{
    fontSize:16,
    fontWeight:"600",
    marginLeft:10
  },
  offerBox:{
    backgroundColor:"white",
    marginTop:16,
    marginHorizontal:16,
    flexDirection:"row",
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"flex-start",
    paddingVertical:12,
    borderRadius:8,
    backgroundColor:"lightgreen",
  },
  offerAmount:{
    fontSize:16,
    fontWeight:"600",
    marginLeft:10
  },
  billDetails:{
    fontSize:16,
    fontWeight:"600",
    paddingLeft:16,
    marginTop:16
  },
  billBox:{
    marginHorizontal:16,
    backgroundColor:"white",
    marginTop:12,
    borderRadius:12,
  },
  billRow:{
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:2,
  },
  leftText:{
    fontWeight:"500",
    fontSize:16,
  },
  total:{
    fontSize:24,
    fontWeight:"800"

  },
})


export default styles