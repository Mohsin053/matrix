import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ConnectionComp() {
  return (
    <View style={styles.container}>
      {/* welcome Text */}
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 36 }}>ConnectionComp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111213",
    padding: 10,
  },
});
