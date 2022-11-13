import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { IPlatformPrice } from "../../../../stores/priceToday";
import colors from "../../../../utils/colors";
import PriceCardItem from "../PriceCardItem";

type TProps = {
	refreshing: boolean;
	getActualPrice: () => void;
	platforms: IPlatformPrice[];
};

const PriceCardContainer = ({
	refreshing,
	getActualPrice,
	platforms,
}: TProps) => {
	const fluctuationBsColor = (fluctuation_bs: string) =>
		parseFloat(fluctuation_bs) > 0
			? colors.positive
			: parseFloat(fluctuation_bs) < 0
			? colors.negative
			: colors.neutral;

	const fluctuationPercentColor = (fluctuation_percent: string) =>
		parseFloat(fluctuation_percent) > 0
			? colors.positive
			: parseFloat(fluctuation_percent) < 0
			? colors.negative
			: colors.neutral;

	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={getActualPrice} />
			}
		>
			{platforms.map(
				(
					{ platform_id: platform, price, fluctuation_bs, fluctuation_percent },
					idx
				) => (
					<PriceCardItem
						key={idx}
						platform={platform}
						price={price}
						fluctuationBs={fluctuation_bs}
						fluctuationPercent={fluctuation_percent}
						fluctuationBsColor={fluctuationBsColor(fluctuation_bs)}
						fluctuationPercentColor={fluctuationPercentColor(
							fluctuation_percent
						)}
					/>
				)
			)}
		</ScrollView>
	);
};

export default PriceCardContainer;
