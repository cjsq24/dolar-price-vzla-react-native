import { Dimensions } from "react-native";

const BASE_SCREEN_WIDTH = 320;

export function scaleFont(fontToScale: number) {
	return (Dimensions.get("screen").width / BASE_SCREEN_WIDTH) * fontToScale;
}
