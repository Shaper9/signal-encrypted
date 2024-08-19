import {
  StyleSheet,
  Platform,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import InputBar from "@/components/InputBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessageBox from "@/components/MessageBox";

export default function HomeScreen() {
  const data = [
    {
      id: "1",
      data: "marko1marko1marko1marko1marko1marko1  marko1marko1 marko1marko1 marko1marko1 marko1marko1marko1 marko1",
      type: "incoming",
    },
    {
      id: "1",
      data: "marko1",
      type: "outgoing",
    },
    {
      id: "1",
      data: "marko1",
      type: "outgoing",
    },
    {
      id: "1",
      data: "marko1",
      type: "incoming",
    },
    {
      id: "1",
      data: "marko1marko1marko1marko1marko1marko1  marko1marko1 marko1marko1 marko1marko1 marko1marko1marko1 marko1",
      type: "outgoing",
    },
    {
      id: "1",
      data: "marko1",
      type: "outgoing",
    },
    {
      id: "1",
      data: "marko1",
      type: "incoming",
    },
    {
      id: "1",
      data: "marko1marko1marko1marko1marko1marko1  marko1marko1 marko1marko1 marko1marko1 marko1marko1marko1 marko1",
      type: "outgoing",
    },
  ];
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
          <View style={styles.wrapper}>
            <FlatList
              style={styles.listWrapper}
              data={data}
              renderItem={({ item }) => <MessageBox item={item} />}
              keyExtractor={(item) => item.id}
            />
            <InputBar />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  listWrapper: {
    padding: 20,
  },
  incomingMessage: {
    borderRadius: 20,
    backgroundColor: "#1F8AFF",
    marginTop: 15,
    padding: 20,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  outgoingMessage: {
    borderRadius: 20,
    backgroundColor: "#E5E4E2",
    marginTop: 15,
    padding: 20,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
});
