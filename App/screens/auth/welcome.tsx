import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import AuthLayout from ".";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../styles/colors";

export default function Welcome() {

    return (
        <AuthLayout>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.title}>SelfUp</Text>
                    <Text style={styles.phrase}>Evolua a si mesmo</Text>
                </View>

                <View style={styles.inputEmailSpace}>
                    <TextInput style={styles.inputEmail} placeholder="email" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ textAlign: "center", color: colors.secondary }}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 80,
        flex: 1,
        justifyContent: "space-between"
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
        color: colors.secondary
    },
    inputEmailSpace: {
        backgroundColor: colors.secondary,
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 20,
        gap: 10,
        borderRadius: 10
    },
    inputEmail: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 5,
        borderRadius: 10
    }
});