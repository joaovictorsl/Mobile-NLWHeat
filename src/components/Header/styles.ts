import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  logoutText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginRight: 30
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
