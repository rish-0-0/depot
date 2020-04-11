import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { HomeScreen, SearchScreen } from "./screens";

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName="Home"
				barStyle={{
					backgroundColor: "white",
					overflow: 'hidden',
					borderRadius: 40,
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
					padding: 10,
					margin: 0,
					elevation: 2,
				}}
				style={{
					backgroundColor: '#f0f0f0',
				}}
				
			>
				<BottomTab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						),
					}}
				/>
				<BottomTab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<FontAwesome name="search" color={color} size={26} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
