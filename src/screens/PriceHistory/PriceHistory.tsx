import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Stack";

type IProps = NativeStackScreenProps<RootStackParamList, "PriceHistory">;

const PriceHistory = ({ navigation }: IProps): JSX.Element => {
	return (
		<View>
			<Text>Dolar Price History Screen</Text>
		</View>
	);
};

export default PriceHistory;
