import {StyleSheet } from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
    container: {
        flex:1,
      // marginTop: 60,
      paddingHorizontal: 24,
      paddingVertical:15,
      paddingTop:40,
      backgroundColor:"#FFFF"
    },
    titleText:{
      fontFamily:"AbhayaLibre-Mediums",
      fontWeight:"500",
      fontSize:24,
      color:"#0C0C26",
      lineHeight:28.31
    },
    bodyText:{
        fontFamily:"ABeeZee",
        fontWeight:"400",
        fontSize:14,
        color:"#828282",
        lineHeight:19.6
    },


    //setpin Page Styles
    numberContainer:{
      flexDirection:"row",
      justifyContent:'space-around',
      marginVertical:18,
    },

    numberPad:{
      alignSelf:'center',
      width:100,
    },
    number:{
      fontWeight:'500',
      fontSize:21,
      color:"#0C0C26",
      textAlign:'center',
      marginTop:10,
      lineHeight:24.77
    },

    //bank bvn validation Style
    bankBvnInputField:{backgroundColor:"#E5E5E5",
    borderRadius:18,fontFamily:"ABeeZee",fontStyle:"italic",
    fontSize:14,fontWeight:"400"},
    

    //tokenField Style
    tokenTextStyle:{letterSpacing:10,fontSize:40,textAlign:'center',fontWeight:'normal'},
    tokenFieldContainerStyle:{height:50,width:168,justifyContent:'center'},
    tokenContainerWrapper:{alignItems:'center',marginTop:40,},

  //modal styles
  containerContent: {flex: 1, marginTop: 40},
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },
  headerContent:{
    marginTop: 0,
  },
  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  },




  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Jost-Regular',
  },

  modalBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  pin: {
    backgroundColor: 'rgba(253, 215, 44, 0.28)',
    height: 40,
    width: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  codeContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 50,
  },
  panel: {
    padding: 20,
    backgroundColor:colors.BACKGROUND,
    // paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    // top: 60,
    zIndex: 1000,
  },
  panelTitle: {
    fontSize: 30,
    // height: 40,
    fontFamily: 'Jost-Regular',
    color: '#000',
  },



  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },



  //contact styles
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
});

const button = StyleSheet.create({
    container: {
      marginTop: 100,
      paddingHorizontal: 24,
    },
    titleText:{
      fontFamily:"Abhaya-Libre-Medium"
    }
    
    
})

export {
    button,
    styles
}