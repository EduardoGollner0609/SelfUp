import z from "zod";
import AuthLayout from "..";
import { View, Text, TouchableOpacity } from 'react-native';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./styles";
import InputItem from "../../../components/InputItem";
import { SignUpDTO } from "../../../assets/models/user";
import ReturnButtonPrimary from "../../../components/ReturnButtonPrimary/return-button-primary";


const signupSchema = z.object({
    fullName: z.string().min(1, "Campo obrigatório"),
    email: z.string().min(1, "Campo obrigatório"),
    password: z.string().min(1, "Campo obrigatório")
});

export default function Login({ navigation }: any) {

    const { control, handleSubmit, formState: { errors } } = useForm<SignUpDTO>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
    });

    function handleLogin(data: SignUpDTO) {
        console.log(data);
    }

    return (
        <AuthLayout>
            <View style={styles.container}>
                <View style={styles.form}>
                    <ReturnButtonPrimary navigation={navigation} />
                    <Text style={styles.formTitle}>Cadastro</Text>

                    <Controller
                        control={control}
                        name="fullName"
                        render={({ field: { onChange, value } }) => (
                            <InputItem
                                name="Nome completo"
                                onChange={onChange}
                                value={value}
                                errors={errors.fullName}
                                placeHolderColor="#0683996f"
                            />
                        )} />


                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
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
                        render={({ field: { onChange, value } }) => (
                            <InputItem
                                name="Password"
                                onChange={onChange}
                                value={value}
                                errors={errors.password}
                                isPassword={true}
                                placeHolderColor="#0683996f"
                            />
                        )} />

                    <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit(handleLogin)}>
                        <Text style={styles.textSubmit}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </AuthLayout>
    );
}