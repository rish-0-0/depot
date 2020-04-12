import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { GlobalStyleSheet, Category } from "../../components";

const items = [
	{
		category: "Groceries",
        source: require("../../assets/groceries.png"),
        route: "groceries"
	},
	{
		category: "Medical",
        source: require("../../assets/pharmacy.png"),
        route: "medical"
	},
	{
		category: "Hardware",
        source: require("../../assets/spanner.png"),
        route: "hardware"
	},
	{
		category: "Services",
        source: require("../../assets/car-service.png"),
        route: "services"
	},
	{
		category: "General Items",
        source: require("../../assets/toothbrush.png"),
        route: "general"
	},
	{
		category: "Deliverables",
        source: require("../../assets/food.png"),
        route: "deliverables"
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
				numColumns={2}
				indicatorStyle="black"
				renderItem={(iterator) => {
					return (
						<Category
							style={{ ...GlobalStyleSheet.horizontalCol, ...styles.card }}
							category={iterator.item.category}
                            source={iterator.item.source}
                            onPress={() => props.navigation.navigate("Search", { category : iterator.item.route })}
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
		backgroundColor: "#473f97",
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		paddingTop: '10%',
		paddingBottom: 0,
		marginTop: 0,
	},
	breadcrumbs: {
		fontFamily: "Roboto",
		fontWeight: "200",
		fontSize: 18,
		paddingLeft: '5%',
		letterSpacing: 1.5,
		textAlign: "left",
		color: "#fff",
	},
	header: {	
		fontFamily: "Roboto",
		fontWeight: "bold",
		fontSize: 48,
		paddingTop: '1%',
		paddingLeft: '5%',
		paddingBottom: '2%',
		letterSpacing: 1.5,
		textAlign: "left",
		color: "#fff",
	},
	scrollview: {
		minHeight: '84.5%',
		flexDirection: 'column'
	},
	card: {
		backgroundColor: "white",
		margin: 2,
	},
});
