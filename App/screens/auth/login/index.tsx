import AuthLayout from "..";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from "./styles";
import { useForm, Controller } from 'react-hook-form'
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import InputItem from "../../../components/InputItem";
import { CredentialsDTO } from "../../../assets/models/user";
import ReturnButtonPrimary from "../../../components/ReturnButtonPrimary/return-button-primary";


const loginSchema = z.object({
    email: z.string().min(1, "Campo obrigatório"),
    password: z.string().min(1, "Campo obrigatório")
});

export default function Login({ navigation }: any) {

    const { control, handleSubmit, formState: { errors } } = useForm<CredentialsDTO>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function handleLogin(data: CredentialsDTO) {
        console.log(data);
    }

    return (
        <AuthLayout>
            <View style={styles.container}>
                <View style={styles.form}>
                    <ReturnButtonPrimary navigation={navigation} />
                    <Text style={styles.formTitle}>Login</Text>

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputItem
                                name="Email"
                                onChange={onChange}
                                value={value}
                                errors={errors.email}
                                placeHolderColor="#0683996f"
                            />
                        )} />


                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputItem
                                name="Password"
                                onChange={onChange}
                                value={value}
                                errors={errors.password}
                                isPassword={true}
                                placeHolderColor="#0683996f"
                            />
                        )} />

                    <Text style={styles.recoryPasswordText}>Esqueci minha senha</Text>
                    <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit(handleLogin)}>
                        <Text style={styles.textSubmit}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </AuthLayout>
    );
}