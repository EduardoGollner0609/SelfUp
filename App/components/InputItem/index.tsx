import styles from "./styles";
import { Text, TextInput, View } from "react-native";
import { FieldError } from 'react-hook-form';
import { colors } from "../../styles/styles";

type Props = {
    name: string,
    onChange: (value: string) => void,
    value: string,
    errors: FieldError | undefined,
    isPassword?: boolean,
    placeHolderColor: string
}

export default function InputItem({ name, onChange, value, errors, isPassword, placeHolderColor }: Props) {
    return (
        <View>
            <Text style={styles.label}>{name}</Text>
            <TextInput
                style={[styles.input, errors && { borderColor: colors.errors }]}
                onChangeText={onChange}
                value={value}
                placeholder={name}
                placeholderTextColor={placeHolderColor}
                secureTextEntry={isPassword}
            />
            {errors && <Text style={styles.errors}>{errors?.message}</Text>}
        </ View>
    );
}