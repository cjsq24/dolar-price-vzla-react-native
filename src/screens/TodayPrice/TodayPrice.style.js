import { StyleSheet } from "react-native";
import { scaleFont } from "../../utils/sizing";

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
	},
	content: {
		/* paddingHorizontal: scaleFont(7), */
		paddingTop: scaleFont(7),
	},
});
