import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodayPrice from "../screens/TodayPrice";
import PriceHistory from "../screens/PriceHistory";

export type RootStackParamList = {
	TodayPrice: undefined;
	PriceHistory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator initialRouteName="TodayPrice">
			<Stack.Screen
				name="TodayPrice"
				component={TodayPrice}
				options={{
					headerTitle: "Dolar Price Today",
				}}
			/>
			<Stack.Screen
				name="PriceHistory"
				component={PriceHistory}
				options={{
					headerTitle: "Dolar Price History",
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigation;
