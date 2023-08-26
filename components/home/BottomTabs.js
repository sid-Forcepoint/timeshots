import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomTabs = ({ icons }) => {
  const [activeTab, setactiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setactiveTab(icon.name)}>
      <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 35,
          paddingTop: 10,
          margin:10
        }}
      >
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        position:'absolute',
        width: '100%',
        bottom: '1%',
        zIndex: 999,
        
        // backgroundColor: '#66000000'
    },
  icon: {
    width: 30,
    height: 30,
  },
});

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/dusk/64/ffffff/home--v1.png",
    inactive: "https://img.icons8.com/windows/64/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/dusk/64/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/wired/64/ffffff/search.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/fluency/48/ffffff/test-account.png",
    inactive:
      "https://img.icons8.com/material-rounded/64/ffffff/user-male-circle.png",
  },
];

export default BottomTabs;
