import { Redirect, Stack } from "expo-router"
import { useAuth } from "../context/auth";
import {ActivityIndicator} from "react-native"
export default function AuthLayout() {
    const {user,loading} = useAuth();

     if(loading){return <ActivityIndicator size={"large"} />}
     if(user){
        return <Redirect href="/(app)/(tabs)" />
     }
    return(
    <Stack>
    <Stack.Screen name="index"/>
    </Stack>
    )
}