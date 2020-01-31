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
    backgroundColor: "#fff",
    borderWidth: 0.5,
    width: "100%",
    height: heightPercentageToDP(20),
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative",
    minHeight: 40,
    maxHeight: 140
  },
  input: {
    textAlignVertical: "top",
    fontSize: heightPercentageToDP(1.8),
    paddingTop: widthPercentageToDP(1),
    height: heightPercentageToDP(20),
  },
  formmatedTextWrapper: {
    color: "#000",
    minHeight: 40,
    position: "absolute",
    top: 0,
    width: "100%",
    paddingVertical: 5,
    color: "transparent",
  },
  formmatedText: {
    fontSize: heightPercentageToDP(1.7),
  },
  mention: {
    fontSize: heightPercentageToDP(1.7),
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#216b5c",

  },
  placeholderText: {

    color: "#999999",
    fontSize: heightPercentageToDP(1.7),
  }
});
