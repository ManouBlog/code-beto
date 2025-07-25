import { useAuth } from "@/app/context/auth";
import { ThemedText } from "@/components/ThemedText";
import {View} from 'react-native'

export default function AdminScreen() {
    const {user} = useAuth()
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ThemedText>Hello admin { user?.name}</ThemedText>
        </View>
    )
}