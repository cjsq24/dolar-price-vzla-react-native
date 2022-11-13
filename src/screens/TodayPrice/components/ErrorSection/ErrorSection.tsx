import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import st from "./ErrorSection.style";

type TProps = {
	reloadPrice: () => void;
};

const ErrorSection = ({ reloadPrice }: TProps) => {
	return (
		<View style={st.errorContainer}>
			<Text style={st.errorText}>An error has ocurred</Text>
			<TouchableOpacity onPress={reloadPrice}>
				<Text style={st.errorText}>Reload</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ErrorSection;
