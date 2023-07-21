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
    backgroundColor:'white',
    alignItems:"center",
    justifyContent:"center"
  },
  searchButton:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:'white',
    alignItems:"center",
    justifyContent:"center"
  },
  productTopContainer:{
    margin:10,
    marginTop:-10,
    backgroundColor:"lightgreen",
    height:height*.5,
    alignItems:"center",
    borderRadius:8,
  },
  sampleImage:{
    height:height*.3,
    width:width*.5,
    backgroundColor:"darkgreen",
    marginTop:"10%",
    borderRadius:16,
  },
  productName:{
    fontSize:24,
    fontWeight:"600",
    textAlign:"center",
    marginTop:8,
  },
  companyName:{
    fontSize:20,
    fontWeight:"400",
    marginTop:4,
  },
  stars:{
    marginTop:8,
  },
  heading:{
    fontSize:20,
    fontWeight:"600",
    paddingLeft:20,
  },
  descText:{
    padding:20,
    paddingVertical:10,
    letterSpacing:.5,
  },
  reviewBox:{
    justifyContent: "center",
    top:20,
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    top:20,
  },
})


export default styles