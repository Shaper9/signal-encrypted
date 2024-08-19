import { StyleSheet, Image, Platform, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function TabTwoScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.qrWrapper}>
        <Text style={styles.qrHeader}>Your ID</Text>
        <QRCode value="http://awesome.link.qr" size={200} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  qrWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  qrHeader: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
