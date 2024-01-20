import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodayeventsCard() {
  return (
    <>
      <View
        style={{
          height: 250,
          width: "100%",
          borderRadius: 15,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            height: 50,
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "light",
            }}
          >
            9:45
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="hourglass-sharp"
              size={12}
              color="white"
              style={{ marginHorizontal: 5 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
              }}
            >
              8h 45m
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 200,
            width: "100%",
            borderRadius: 15,
            backgroundColor: "#17191B",
            padding: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#E79925",
                padding: 5,
                borderRadius: 32,
                backgroundColor: "rgba(231, 153, 37, 0.16)",
              }}
            >
              <Text style={{ color: "#E79925", fontSize: 12, padding: 3 }}>
                Medium Impact
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "light",
              marginVertical: 5,
            }}
          >
            Pending Home Sales (YOY)
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Previous
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              15%
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Forecast
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              0.5%
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Actual
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
                paddingHorizontal: 5,
              }}
            >
              -
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 250,
          width: "100%",
          borderRadius: 15,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            height: 50,
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "light",
            }}
          >
            9:45
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="hourglass-sharp"
              size={12}
              color="white"
              style={{ marginHorizontal: 5 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
              }}
            >
              8h 45m
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 200,
            width: "100%",
            borderRadius: 15,
            backgroundColor: "#17191B",
            padding: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
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
              <Text style={{ color: "#88E79A", fontSize: 12, padding: 3 }}>
                Low Impact
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "light",
              marginVertical: 5,
            }}
          >
            Pending Home Sales (YOY)
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Previous
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              15%
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Forecast
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              0.5%
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
              }}
            >
              Actual
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "light",
                marginVertical: 5,
                paddingHorizontal: 5,
              }}
            >
              -
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
