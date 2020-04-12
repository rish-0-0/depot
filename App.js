import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
	MaterialCommunityIcons,
	FontAwesome,
	Feather,
} from "@expo/vector-icons";

import { HomeScreen, SearchScreen, BusinessScreen } from "./screens";

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName="Home"
				barStyle={{
					backgroundColor: "white",
					overflow: "hidden",
					borderRadius: 40,
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
					padding: 10,
					margin: 0,
					elevation: 2,
				}}
				style={{
					backgroundColor: "#f0f0f0",
				}}
			>
				<BottomTab.Screen
					name="Shop"
					component={BusinessScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Feather name="shopping-cart" color={color} size={22} />
						),
						tabBarLabel: "My Business",
					}}
				/>
				<BottomTab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="home" color={color} size={22} />
						),
					}}
				/>
				<BottomTab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<FontAwesome name="search" color={color} size={22} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
