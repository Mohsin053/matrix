import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import DashboardComp from "./src/components/DashboardComponents/DashboardComp";
import LayersComp from "./src/components/LayersComponents/LayersComp";
import ConnectionComp from "./src/components/ConnectionComponents/ConnectionComp";

export default function App() {
  const [currentTab, setcurrentTab] = useState(0);

  const SwitchingTab = () => {
    switch (currentTab) {
      case 0:
        return <DashboardComp />;
      case 1:
        return <LayersComp />;
      case 2:
        return <ConnectionComp />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Upper Tab */}
      <View style={styles.upperTab}>
        <Text style={{ color: "white", fontSize: 14 }}>All accounts</Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="flow-branch"
              size={24}
              color="white"
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="white"
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* welcome Text */}
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 36 }}>
          Welcome to Unimetrics, Jens!
        </Text>
      </View>

      {/* Switching Tab */}
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.switchTab}>
          <TouchableOpacity
            style={[
              styles.switchTabIcon,
              {
                backgroundColor: currentTab === 0 ? "#1A1D1F" : "#17191B",
              },
            ]}
            onPress={() => setcurrentTab(0)}
          >
            <MaterialIcons
              name="dashboard"
              size={24}
              color="white"
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchTabIcon,
              {
                backgroundColor: currentTab === 1 ? "#1A1D1F" : "#17191B",
              },
            ]}
            onPress={() => setcurrentTab(1)}
          >
            <Entypo name="layers" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchTabIcon,
              {
                backgroundColor: currentTab === 2 ? "#1A1D1F" : "#17191B",
              },
            ]}
            onPress={() => setcurrentTab(2)}
          >
            <Ionicons name="wifi" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            width: "40%",
          }}
        >
          <TouchableOpacity>
            <Feather
              name="edit-2"
              size={24}
              color="white"
              style={{ marginHorizontal: 15, marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Switching Tab */}
      {SwitchingTab()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111213",
    padding: 10,
  },
  upperTab: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
  },
  switchTab: {
    height: 50,
    width: "60%",
    backgroundColor: "#17191B",
    borderRadius: 1999,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-around",
  },
  switchTabIcon: {
    width: "30%",
    alignItems: "center",
    borderRadius: 1999,
    height: "100%",
    justifyContent: "center",
  },
});
