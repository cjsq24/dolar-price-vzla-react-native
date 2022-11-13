import { StyleSheet } from "react-native";
import { scaleFont } from "../../../../utils/sizing";

export default StyleSheet.create({
	rowContent: {
		flexDirection: "row",
		paddingHorizontal: scaleFont(7),
		paddingVertical: 5,
		height: 65,
		backgroundColor: "white",
		marginBottom: scaleFont(7),
	},
	contentLeft: {
		flex: 2,
		justifyContent: "center",
	},
	contentCenter: {
		flex: 8,
		paddingLeft: 5,
		justifyContent: "space-around",
	},
	contentRight: {
		flex: 2,
		alignItems: "flex-end",
		justifyContent: "space-around",
	},
	textName: {
		fontSize: scaleFont(13),
		fontWeight: "bold",
		color: "gray",
	},
	textCurrentPrice: {
		fontSize: scaleFont(13),
		color: "gray",
	},
	textFluctuationPrice: {
		fontSize: scaleFont(12),
	},
	textPercentFluctuationPrice: {
		fontSize: scaleFont(12),
	},
	image: {
		width: 50,
		height: 50,
	},
});
