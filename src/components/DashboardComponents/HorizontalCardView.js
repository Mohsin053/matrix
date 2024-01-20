import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function HorizontalCardView() {
  return (
    <View
      style={{
        height: 200,
        width: 300,
        borderRadius: 15,
        backgroundColor: "#17191B",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#A9A9A9",
          height: "33%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>Account Name</Text>
          <Text style={{ color: "#A9A9A9", fontSize: 12 }}>108,050.00 usd</Text>
        </View>
        <View>
          <Text style={{ color: "#88E79A", fontSize: 14 }}>15%</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#A9A9A9",
          height: "33%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white", fontSize: 16 }}>3</Text>
          <Text style={{ color: "#A9A9A9", fontSize: 12 }}>Today's Win</Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white", fontSize: 16 }}>1</Text>
          <Text style={{ color: "#A9A9A9", fontSize: 12 }}>Today's Win</Text>
        </View>
      </View>
      <View
        style={{
          height: "33%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>3</Text>
          <Text style={{ color: "#A9A9A9", fontSize: 12 }}>Open Flows</Text>
        </View>
      </View>
    </View>
  );
}
