import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function CategoryCard(props) {
	return (
		<TouchableOpacity style={{...styles.container, ...props.style }} onPress={props.onPress}>
			<Image resizeMode="contain" source={props.source} style={styles.img} />
			<Text style={styles.text}>{props.category}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		height: 166,
		width: 173,
	},
	img: {
		width: 122,
		height: 93,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 20,
	},
	text: {
		textAlign: 'center',
		padding: 10,
		fontFamily: 'Roboto',
		fontSize: 12,
		letterSpacing: 1,
		textAlignVertical: 'center',
	},
});

export default CategoryCard;
