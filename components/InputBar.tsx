import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useRef, useState } from "react";

export default function InputBar() {
  const [value, setValue] = useState<string>("");
  let inputRef = useRef<any>(null);
  const onInputChange = (value: string) => {
    setValue(value);
  };

  const onPressSend = () => {
    Keyboard.dismiss();
    setValue("");
    inputRef.current.clear();
    console.log("sendLog");
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={(value) => onInputChange(value)}
        multiline={true}
        value={value}
      />
      <View style={styles.iconWrapper}>
        <TouchableWithoutFeedback onPress={onPressSend}>
          <MaterialCommunityIcons name="send-circle" size={30} color="black" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  iconWrapper: {
    justifyContent: "center",
    alignContent: "center",
  },

  input: {
    backgroundColor: "#cacfcc",
    minHeight: 30,
    maxHeight: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    flex: 1,
  },
});
