import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressbarView() {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedCircularProgress
          size={100}
          width={5}
          fill={14}
          tintColor="#3DD598"
          backgroundColor="#1F5842"
        >
          {() => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>14%</Text>
              <Text style={{ color: "white", fontSize: 10 }}>550.50$</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          account Name
        </Text>
        <Text style={{ color: "#92929D", fontSize: 12, marginVertical: 5 }}>
          Evaluation
        </Text>
      </View>
      <View
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedCircularProgress
          size={100}
          width={5}
          fill={14}
          tintColor="#0D4EA6"
          backgroundColor="#0D1726"
        >
          {() => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>14%</Text>
              <Text style={{ color: "white", fontSize: 10 }}>550.50$</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          account Name
        </Text>
        <Text style={{ color: "#92929D", fontSize: 12, marginVertical: 5 }}>
          Evaluation
        </Text>
      </View>
    </View>
  );
}
