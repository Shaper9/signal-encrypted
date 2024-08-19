import { View, Text, StyleSheet } from "react-native";

interface item {
  id: string;
  type: string;
  data: string;
}
interface props {
  item: item;
}

export default function MessageBox({ item }: props) {
  return (
    <View
      style={[
        item.type === "incoming"
          ? styles.incomingMessage
          : styles.outgoingMessage,
      ]}
    >
      <Text>{item.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
