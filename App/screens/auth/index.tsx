import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/styles";

type Props = {
    children: ReactNode
}

export default function AuthLayout({ children }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <StatusBar style="auto" backgroundColor="#000" />
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center"
    },
    content: {
        flex: 1,
        width: "80%",
    }
});