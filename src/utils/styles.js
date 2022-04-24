import {StyleSheet } from 'react-native';
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
      fontFamily:"Abhaya-Libre-Medium",
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
    tokenContainerWrapper:{alignItems:'center',marginTop:40,}
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