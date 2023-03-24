import React from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Text, Linking, Button } from "react-native";

const UselessTextInput = () => {
  const [number, onChangeNumber] = React.useState(null);

function redirect(){
    Linking.openURL('https://www.bing.com/search?q='+number);
}

  return (
    <SafeAreaView>
      <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        onSubmitEditing={() => redirect()}
        placeholder="Surch"
      />
      <Text 
      style={styles.text}
      onPress={() => redirect()}>Achar</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  View:{
    flex:1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    top:50,
    backgroundColor:"cyan",
    marginVertical: 100,
  },
  text:{
    marginVertical: 8,
    textAlings:"center",
    borderWidth:1,
    borderColor:"#000",
    padding:10,
  }
});

export default UselessTextInput;