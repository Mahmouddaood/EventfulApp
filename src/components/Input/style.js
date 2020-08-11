import { StyleSheet } from "react-native";
import colors from "../../utilities/colors";

export default StyleSheet.create({
  inputStyle: {
    height: 48,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    minWidth: "93%",
    fontFamily: "Montserrat-Regular",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    marginBottom: 15,
    fontSize: 16,
    color: colors.placeholder,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 8,
    borderColor: colors.whitee7,
    borderWidth: 1,
    elevation: 0.2,
    zIndex: 0
  },
  inputValueDirRtl: {
    writingDirection: "rtl",
    textAlign: "right"
  },
  errStyle: {
    marginBottom: 6,

  }
});
