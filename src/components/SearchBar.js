// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = (props) => {
  return (
    <View style={[styles.container,{backgroundColor:"#FAFAFA"}]}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={props.searchPlaceHolder?props.searchPlaceHolder:"search"}
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom:15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {width: 10, height: 10},borderRadius:10

  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    shadowOffset: {width: 0, height: 10},
    shadowColor: '#d9dbda',
    shadowOpacity: 0.2,
    borderRadius:10,
  },
  searchBar__clicked: {
    padding: 14,
    flexDirection: "row",
    alignItems:'center',
    alignSelf:'center',
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowOpacity: 0.2,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
});