import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/auth/welcome";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, title: "" }}>
                <Stack.Screen name="welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}