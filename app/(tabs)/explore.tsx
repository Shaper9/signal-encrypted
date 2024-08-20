import { StyleSheet, Image, Platform, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

export default function TabTwoScreen() {
  const onSuccess = (e: any) => {
    console.log(e);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.qrWrapper}>
        <Text style={styles.qrHeader}>Your ID</Text>
        <QRCode value="http://awesome.link.qr" size={200} />
      </View>
      {/* <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text>
            Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and
            scan the QR code.
          </Text>
        }
      /> */}
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
