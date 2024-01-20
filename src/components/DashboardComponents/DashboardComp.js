import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProgressbarView from "./ProgressbarView";
import HorizontalCardView from "./HorizontalCardView";
import LatestCardView from "./LatestCardView";
import TodayeventsCard from "./TodayeventsCard";
import ChartView from "./ChartView";

export default function DashboardComp() {
  return (
    <View style={styles.container}>
      {/* Progress bar View  */}
      <ProgressbarView />

      {/* heading View  */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Account OverView</Text>
      </View>

      {/* Horizontal card  View  */}
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <HorizontalCardView />
      </View>

      {/* heading latest card  View  */}
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Latest setup Idea's
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <Text style={{ color: "#A9A9A9", fontSize: 12, marginHorizontal: 5 }}>
            See All
          </Text>
          <Ionicons name="chevron-forward-outline" size={12} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {/*latest card  View  */}
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        <LatestCardView />
      </View>

      {/* Today events card  View  */}
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Today's Events</Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            marginHorizontal: 15,
            justifyContent: "center",
          }}
        >
          <Ionicons name="funnel" size={12} color="white" />
        </TouchableOpacity>
      </View>

      {/* Today events cards */}
      <View style={{ marginVertical: 15 }}>
        <TodayeventsCard />
      </View>

      {/* Chart card  View  */}
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            Account Balance in %
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "#1A1D1F",
              padding: 5,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#888889", fontSize: 12 }}>this month</Text>
            <Ionicons name="chevron-down-outline" size={16} color="#888889" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#888889", fontSize: 12 }}>
          (+33%) on Previous month
        </Text>
      </View>

      {/*line chart */}
      <View
        style={{
          height: 340,
          marginBottom: 50,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 55,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 7,
                backgroundColor: "#5A27AE",
                padding: 5,
              }}
            ></View>
            <Text style={{ color: "#888889", fontSize: 12, padding: 5 }}>
              Account name
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 7,
                backgroundColor: "#00A76F",
                padding: 5,
              }}
            ></View>
            <Text style={{ color: "#888889", fontSize: 12, padding: 5 }}>
              Account name
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 7,
                backgroundColor: "#0062FF",
                padding: 5,
              }}
            ></View>
            <Text style={{ color: "#888889", fontSize: 12, padding: 5 }}>
              Account name
            </Text>
          </View>
        </View>

        <ChartView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111213",
  },
});
