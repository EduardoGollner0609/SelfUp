import { StyleSheet } from "react-native";
import { buttons, colors } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    color: colors.secondary,
    textAlign: "center",
  },
  phrase: {
    fontSize: 20,
    color: colors.secondary,
  },
  inputEmail: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
  },
  buttonLogin: {
    ...buttons.primary,
    paddingVertical: 10,
  },
  buttonSignUp: {
    ...buttons.primary,
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 18,
  },
});

export default styles;
