// import { Image } from 'expo-image';
import { Button } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';

import { useFocusEffect
  ,useNavigationContainerRef
  ,usePathname,
  useRootNavigationState,
  useRouter,
  useSegments
 } from 'expo-router';
// import { useCallback } from 'react';

export default function HomeScreen() {
  //  const ref = useNavigationContainerRef()

  //  useEffect(()=>{
  //   if(ref){
  //     ref.current?.addListener("state",(event)=>{
  //       console.log(event.data)
  //     });
  //   }
  //  },[ref])
  // useFocusEffect(
  //   // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
  //   useCallback(() => {
  //     // Invoked whenever the route is focused.
  //     console.log('Hello, I\'m focused!');

  //     // Return function is invoked whenever the route gets out of focus.
  //     return () => {
  //       console.log('This route is now unfocused.');
  //     };
  //   }, [])
  //  )

  // const pathname = usePathname();
   // console.log(pathname)

  //  const {routes} = useRootNavigationState();
  //  console.log(JSON.stringify(routes,null,2))


  // const router = useRouter()

  const segments = useSegments()
  console.log(segments)
  return (
    <ThemedView
     style={{flex:1,
  justifyContent:'center',
  alignItems:'center'
  }}>
  <ThemedText 
  type="title">
   Hello 
  </ThemedText>
  {/* <Button
  title='Navigate'
  onPress={()=>{
    // verifier si il ya deja un back(retour)
    if(router.canGoBack()){
    // router.push('/+not-found')
    router.back(); 
   }

  }}
  /> */}
  </ThemedView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
