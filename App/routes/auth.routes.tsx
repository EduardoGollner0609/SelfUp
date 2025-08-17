import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/auth/welcome";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, title: "" }}>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    );
}