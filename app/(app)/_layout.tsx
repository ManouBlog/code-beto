import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';
import { useAuth } from '../context/auth';
import { ActivityIndicator,View } from 'react-native';


export const unstable_settings = {
  initialRouteName : '(tabs)'
};

export default function AppLayout() {
  const {user,loading} = useAuth();
  if(loading){return(
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
      <ActivityIndicator size={"large"}/>
    </View>
  )
  }
  if(!user){
    return <Redirect href={"/(auth)"} />
  }
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="deepLink" options={{ headerShown: true,presentation:'modal' }} />
      </Stack>
  );
}
