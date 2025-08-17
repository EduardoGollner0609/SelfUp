import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../styles/styles";

export default function ReturnButtonPrimary({ navigation }: any) {
    return (
        <TouchableOpacity style={styles.return} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color={colors.secondary} />
            <Text style={{ color: colors.secondary }}>
                Voltar
            </Text>
        </TouchableOpacity>
    );
}