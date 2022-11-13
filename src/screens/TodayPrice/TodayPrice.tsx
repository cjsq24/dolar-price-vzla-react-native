import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
//import { NativeStackScreenProps } from "@react-navigation/native-stack";
//import { RootStackParamList } from "../../navigation/Stack";
import usePriceToday from "../../stores/priceToday";
import PriceToday from "../../api/services/priceToday.service";
import st from "./TodayPrice.style";
import ErrorSection from "./components/ErrorSection";
import PriceCardContainer from "./components/PriceCardContainer";

//type IProps = NativeStackScreenProps<RootStackParamList, "TodayPrice">;

const TodayPrice = (/* { navigation }: IProps */) => {
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [error, setError] = useState(false);

	const { priceToday, setPriceToday } = usePriceToday();

	useEffect(() => {
		(async () => {
			await getActualPrice();
		})();
	}, []);

	const getActualPrice = async () => {
		setRefreshing(true);
		const resPric = await PriceToday.getActualPrice();
		if (resPric.success) {
			setPriceToday(resPric.data);
		} else {
			setError(true);
		}
		setRefreshing(false);
		setLoading(false);
	};

	const reloadPrice = () => {
		setLoading(true);
		getActualPrice();
	};

	return (
		<View style={st.container}>
			{loading ? (
				<View style={st.loadingContainer}>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<View style={st.content}>
					{priceToday?.platforms ? (
						<PriceCardContainer
							platforms={priceToday.platforms}
							refreshing={refreshing}
							getActualPrice={getActualPrice}
						/>
					) : (
						error && <ErrorSection reloadPrice={reloadPrice} />
					)}
				</View>
			)}
		</View>
	);
};

export default TodayPrice;
