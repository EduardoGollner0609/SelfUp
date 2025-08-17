import { StyleSheet } from "react-native";
import { colors } from "../../styles/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: RFValue(16),
    color: colors.secondary,
  },
  label: {
    fontSize: RFValue(15),
    marginLeft: 8,
    color: colors.secondary,
  },
  errors: {
    marginLeft: 8,
    color: colors.errors,
  }
});

export default styles;
