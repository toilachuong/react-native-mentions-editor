import { StyleSheet } from "react-native";
import { PixelRatio, Dimensions, Alert } from "react-native";


const { height, width } = Dimensions.get("window");
/*responsive width screen(percentage) from dp to px*/
export const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};
/*responsive height screen(percentage) from dp to px*/
export const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};
export default StyleSheet.create({
  container: {
    maxHeight: 300
  },
  suggestionsPanelStyle: {},
  loaderContainer: { flex: 1 },
  mentionsListContainer: {
    maxHeight: heightPercentageToDP(16)
  }
});
