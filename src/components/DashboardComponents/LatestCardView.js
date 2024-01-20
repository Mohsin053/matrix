import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Rectangle from "../../assets/images/Rectangle.png";
import { Ionicons } from "@expo/vector-icons";
export default function LatestCardView() {
  return (
    <View
      style={{
        height: 360,
        width: 300,
        borderRadius: 15,
        backgroundColor: "#17191B",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          height: "40%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={Rectangle}
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          height: "60%",
        }}
      >
        <View
          style={{
            padding: 5,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "#1A1D1F",
              marginRight: 5,
            }}
          >
            <Ionicons
              name="swap-vertical-outline"
              size={12}
              color="#888889"
              style={{ padding: 3 }}
            />
            <Text style={{ color: "#888889", fontSize: 12, padding: 3 }}>
              2
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "#1A1D1F",
              marginRight: 5,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={12}
              color="#888889"
              style={{ padding: 3 }}
            />
            <Text style={{ color: "#888889", fontSize: 12, padding: 3 }}>
              2
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#88E79A",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "rgba(136, 231, 154, 0.16)",
            }}
          >
            <Ionicons name="chevron-up-outline" size={16} color="#88E79A" />
            <Text style={{ color: "#88E79A", fontSize: 12, padding: 3 }}>
              Long
            </Text>
          </View>
        </View>

        <Text style={{ color: "white", fontSize: 16, padding: 10 }}>
          Title Setup flow
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "light",
            padding: 10,
          }}
        >
          EUR USD
        </Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#00B8D9",
              fontSize: 14,
              alignSelf: "center",
              padding: 10,
            }}
          >
            #
          </Text>
          <View
            style={{
              alignItems: "center",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "#1A1D1F",
              marginRight: 5,
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#888889", fontSize: 12 }}>name #1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "#1A1D1F",
              marginRight: 5,
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#888889", fontSize: 12 }}>name #1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 5,
              borderRadius: 32,
              backgroundColor: "#1A1D1F",
              marginRight: 5,
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#888889", fontSize: 12 }}>name #1</Text>
          </View>
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "light",
            padding: 10,
          }}
        >
          account name
        </Text>
      </View>
    </View>
  );
}
