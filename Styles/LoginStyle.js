import { Platform, StyleSheet } from "react-native";
import Metrics from './Metrics';
import Fonts from './Fonts';

const LoginStyles = StyleSheet.create({
  mainview: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
  },
  mainrenderview: {
    height: Metrics.HEIGHT * 0.6,
    width: Metrics.WIDTH
  },
  headerBgSec: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: "transparent",
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.WIDTH,
    flexDirection: "row",
    paddingTop: Metrics.WIDTH * 0.06
  },
  leftAndRight: {
    flex: 1
  },
  body: {
    flex: 3,
    alignItems: "center"
  },
  pageTitle: {
    fontFamily: Fonts.type.helveticaNeueBold,
    fontSize: Fonts.moderateScale(17),
    color: "#da3c47"
  },
  borderhorizontal: {
    width: Metrics.WIDTH,
    backgroundColor: "#f4f4f4",
    height: 1
  },
  emailpswdmainview: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    marginTop: Metrics.HEIGHT * 0.05
  },
  textInput: {
    color: "#929292",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(17)
  },

  border: {
    borderBottomWidth: 2,
    borderBottomColor: "#f4f4f4",
    width: Metrics.WIDTH * 0.8,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.007
      },
      android: {
        marginTop: -Metrics.HEIGHT * 0.01
      }
    })
  },
  passwordmainbg: {
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.03
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.024
      }
    })
  },
  forgotpswdtext: {
    color: "#929292",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(15),
    marginTop: Metrics.HEIGHT * 0.02
  },
  Mainviewbtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Metrics.HEIGHT * 0.09,
    alignSelf: "center"
  },
  LinearGradientmainview: {
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.08,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },

  Logintext: {
    color: "#fff",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(16),
    textAlign: "center"
  },

  mainfooterbg: {
    height: Metrics.HEIGHT * 0.3,
    width: Metrics.WIDTH,
    alignSelf: "center"
  },

  fbButton: {
    backgroundColor: "#0054a6",
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.8,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.11
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.09
      }
    }),

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },

  fbButtonText: {
    marginLeft: Fonts.moderateScale(5),
    color: "#fff",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },
  accounttext: {
    textAlign: "center",
    color: "#929292",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: Metrics.HEIGHT * 0.02
  },
  signin: {
    textAlign: "center",
    color: "#f87363",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: Metrics.HEIGHT * 0.02
  }
});

export default LoginStyles;
