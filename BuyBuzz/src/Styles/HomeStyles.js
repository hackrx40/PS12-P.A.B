import { StyleSheet, Text, View,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topSection:{
    //marginTop:5,
    flexDirection:"row",
    width:windowWidth*.9,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:20,
  },
  welcome:{
    fontSize:30,
    color:"black",
    fontWeight:"600"
  },
  topSubheading:{
    fontSize:16,
    marginLeft:20,
    marginTop:-10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth:2,
    borderColor:"#00337C",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    marginTop: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "white",
    padding: 5,
  },
})

export default styles
