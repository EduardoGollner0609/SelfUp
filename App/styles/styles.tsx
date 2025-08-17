import { RFValue } from "react-native-responsive-fontsize"
import { StyleSheet } from 'react-native'

export const colors = {
    primary: "#fff",
    secondary: "#068499",
    errors: "#ff4d4f"
}

export const buttons = {
    primary: {
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
        color: colors.secondary
    },
    secondary: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        color: colors.secondary
    }
}

export const formStyles = StyleSheet.create({
    form: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        gap: 12,

        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Sombra para Android
        elevation: 5,
    },
    formTitle: {
        textAlign: 'center',
        fontSize: RFValue(25),
        textTransform: "uppercase",
        color: colors.secondary,
        marginVertical: 10,
    },
    buttonSubmit: {
        ...buttons.secondary,
        paddingVertical: 7,
        marginTop: 8,
    },
    textSubmit: {
        textAlign: 'center',
        fontSize: RFValue(14),
        color: colors.primary,
    },
    recoryPasswordText: {
        color: colors.secondary,
        textAlign: 'center',
    },
});