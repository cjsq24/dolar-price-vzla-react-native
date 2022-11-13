import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IPlatform } from "../../../../stores/priceToday";
import st from "./PriceCardItem.style";
import Config from "react-native-config";

type TPriceCardItem = {
	platform: IPlatform;
	price: string;
	fluctuationBs: string;
	fluctuationPercent: string;
	fluctuationBsColor: string;
	fluctuationPercentColor: string;
};

const PriceCardItem = ({
	platform,
	price,
	fluctuationBs,
	fluctuationPercent,
	fluctuationBsColor,
	fluctuationPercentColor,
}: TPriceCardItem) => {
	return (
		<TouchableOpacity
			style={st.rowContent}
			key={platform._id}
			activeOpacity={0.5}
		>
			<View style={st.contentLeft}>
				<Image
					style={st.image}
					source={{
						uri: `${Config.PUBLIC_URL}/${platform.image}`,
					}}
				/>
			</View>
			<View style={st.contentCenter}>
				<Text style={st.textName}>{platform.name}</Text>
				<Text style={st.textCurrentPrice}>{`Bs. ${price}`}</Text>
			</View>
			<View style={st.contentRight}>
				<Text style={[st.textFluctuationPrice, { color: fluctuationBsColor }]}>
					{fluctuationBs}
				</Text>
				<Text
					style={[
						st.textPercentFluctuationPrice,
						{ color: fluctuationPercentColor },
					]}
				>{`${fluctuationPercent}%`}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PriceCardItem;
