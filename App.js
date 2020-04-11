import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeScreen } from "./screens";

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
					padding: 10,
					elevation: 1,
				}}
				style={{
					backgroundColor: '#F0F0F0',
					padding: 5,
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
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
