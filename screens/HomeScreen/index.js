import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { GlobalStyleSheet, Category } from "../../components";

const items = [
	{
		category: "Groceries",
        source: require("../../assets/groceries.png"),
        onPress: () => {},
	},
	{
		category: "Medical",
        source: require("../../assets/pharmacy.png"),
        onPress: () => {},
	},
	{
		category: "Hardware",
        source: require("../../assets/spanner.png"),
        onPress: () => {},
	},
	{
		category: "Services",
        source: require("../../assets/car-service.png"),
        onPress: () => {},
	},
	{
		category: "General Items",
        source: require("../../assets/toothbrush.png"),
        onPress: () => {},
	},
	{
		category: "Deliverables",
        source: require("../../assets/food.png"),
        onPress: () => {},
	},
];

export default function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.breadcrumbs}>depot/</Text>
			<Text style={styles.header}>Categories</Text>
			<FlatList
                data={items}
				style={styles.scrollview}
				horizontal={true}
				renderItem={(iterator) => {
					return (
						<Category
							style={{ ...GlobalStyleSheet.horizontalCol, ...styles.card }}
							category={iterator.item.category}
                            source={iterator.item.source}
                            onPress={iterator.item.onPress}
						/>
					);
				}}
				keyExtractor={(item, index) => `categ_${item.category}_${index}`}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "#F0F0F0",
		paddingHorizontal: 9,
		paddingVertical: "10%",
	},
	breadcrumbs: {
		fontFamily: "Roboto",
		fontWeight: "200",
		fontSize: 18,
		letterSpacing: 1.5,
		textAlign: "left",
		color: "#000",
	},
	header: {
		fontFamily: "Roboto",
		fontWeight: "bold",
		fontSize: 48,
		letterSpacing: 1.5,
		textAlign: "left",
		color: "#000",
	},
	scrollview: {
		marginTop: 40,
		maxHeight: 182,
	},
	card: {
		backgroundColor: "white",
		margin: 4,
	},
});
