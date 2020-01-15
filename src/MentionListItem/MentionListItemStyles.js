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
  suggestionItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.1)",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)"
  },
  text: {
    alignSelf: "center",
  },
  title: {
    fontSize: heightPercentageToDP(1.7),
    color: "rgba(0, 0, 0, 0.8)"
  },
  thumbnailWrapper: {
    width: 35,
    height: 35
  },
  thumbnailChar: {
    fontSize: heightPercentageToDP(1.7)
  },
  username: {
    fontSize: heightPercentageToDP(1.7),
  }
});
