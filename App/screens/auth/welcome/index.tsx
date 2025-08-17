import styles from './styles';
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AuthLayout from "..";
import { colors } from '../../../styles/styles';

export default function Welcome({ navigation }: any) {

    return (
        <AuthLayout>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.title}>SelfUp</Text>
                    <Text style={styles.phrase}>Evolua a si mesmo</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => navigation.navigate('login')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: "center", color: colors.secondary, fontSize: 20 }}>ou</Text>

                    <TouchableOpacity
                        style={styles.buttonSignUp}
                        onPress={() => navigation.navigate('signup')}>
                        <Text style={styles.buttonText}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    );
}

