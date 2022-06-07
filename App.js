import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import * as Speech from "expo-speech";
import { Header } from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";

const languages = ["en-US", "en-IN", "pt-BR"];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      language: "",
    };
  }

  // componentDidMount() {
  //   Speech.getAvailableVoicesAsync().then((voices) => console.log(voices));
  // }

  speak = () => {
    var thingToSay = this.state.name;
    var options = {};

    this.state.language === ""
    ? options = {}
    : options = {language: this.state.language};

    this.state.name === ""
      ? alert("Por favor digite uma palavra")
      : Speech.speak(thingToSay, options);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.textContainer1}>
        <Header
          backgroundColor={"#07B89E"}
          centerComponent={{
            text: "Conversor de Texto Para Fala",
            style: { color: "black", fontSize: 13, fontWeight: "bold" },
          }}
        />

        <SelectDropdown
          buttonStyle={styles.inputBox2}
          data={languages}
          onSelect={(selectedItem, index) => {
            this.setState({
              language: selectedItem,
            })
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText="escolha uma linguagem"
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
          placeholder="digite algo"
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Clique Aqui Para Ouvir </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    height: 50,
    textAlign: "center",
    borderWidth: 4,
    borderRadius: 10,
  },
  inputBox2: {
    width: "80%",
    alignSelf: "center",
    height: 50,
    textAlign: "center",
    borderWidth: 4,
    borderRadius: 10,
    marginVertical:50,
    backgroundColor: "white",
  },
  textContainer1: {
    backgroundColor: "white",
    justifyContent: "space-between",
  },

  text2: {
    color: "black",

    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#07B89E",
    marginTop: 80,
    borderRadius: 50,
    width: "75%",
    alignSelf: "center",
    height: 60,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
