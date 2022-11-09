import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DolarPriceTodayScreen from "../screens/DolarPriceTodayScreen";
import DolarPriceHistoryScreen from "../screens/DolarPriceHistoryScreen";

export type RootStackParamList = {
	DolarPriceTodayScreen: undefined;
	DolarPriceHistoryScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = (): JSX.Element => {
	return (
		<Stack.Navigator initialRouteName="DolarPriceTodayScreen">
			<Stack.Screen
				name="DolarPriceTodayScreen"
				component={DolarPriceTodayScreen}
				options={{
					headerTitle: "Dolar Price Today",
				}}
			/>
			<Stack.Screen
				name="DolarPriceHistoryScreen"
				component={DolarPriceHistoryScreen}
				options={{
					headerTitle: "Dolar Price History",
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigation;
