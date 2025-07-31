import * as  React from 'react';
import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import {Gesture,GestureDetector} from "react-native-gesture-handler";
import {SafeAreaView,View, ViewStyle,StyleSheet, Pressable,ScrollView,Text } from 'react-native';
import Animated,{ useSharedValue,useAnimatedStyle,withSpring } from 'react-native-reanimated';


const Box = ({style,children}:{style?:ViewStyle;children?:React.ReactNode})=>{
  // ce children va etre animé 
return(
  <Animated.View
  style={
    StyleSheet.compose({
   width:200,
   height:200,
   backgroundColor:"pink",
   borderRadius:16
  },style) as ViewStyle}
  >
    {children}
    
  </Animated.View>
)
}

// Pan GESTURE  (ceci permet a user de tirer et le lacher ou il veut)

const PanGestureExample = ()=>{
  const offest = useSharedValue({x:0,y:0});
  const start = useSharedValue({x:0,y:0})
  const panGesture = Gesture.Pan()
  .onUpdate((e)=>{
    // nous mettons a jour notre offset
    // le  e.translationX s'obtient en bougeant grace a la Gesture.Pan()
   offest.value = {
    x:e.translationX+start.value.x,
    y:e.translationY+start.value.y
   }
   console.log("OFFEST",offest.value)
  })
  .onEnd((e)=>{
    start.value ={
      x:offest.value.x,
      y:offest.value.y
    }
  });

  // panGesture ceci est une variable qui va consituer comment
  // l'objet est censé bouger , le onUpdate return une event qu'on peut voir
  //  pour les animations c'est récommander d'utiliser useSharedValue (ceci est hook qui vient avec reanimated) pour recuperer les infos
  // le useSharedValue c es comme le state , ceci va changer qd quelqu'un va faire quelquechose , du genre on va ajouter d'autre valeur
  // pour obtenir la valeur des variables avec useShareValue utiliser .value

  const animatedStyle = useAnimatedStyle(()=>({
    // la ou nous disons ce que l'objet est censé fait , du genre comme le style pour l'animation va retourner un style en objet 
    transform:[{
      translateX:offest.value.x
    },{
      translateY:offest.value.y
    }],
  }));
  return(
    <View>
      <ThemedText type='subtitle'>PAN GESTURE</ThemedText>
      <ThemedText type='subtitle'>DRAG THE BOX AROUND</ThemedText>
      <View>
        <GestureDetector gesture={panGesture}>
        <Box style={animatedStyle} />
        </GestureDetector>
      </View>
    </View>
  )
}


// Tap GESTURE (lorsque l utilisateur tape sur le box)
const TapGestureExample = ()=>{

  // on veut que lorsque lutilisateur clique dessu le box s'agrandir
 // vu que c'est un scale la valeur de useSharedValue va etre 1 ou 0
  const scale = useSharedValue(1);
  const tapGesture = Gesture.Tap()
  .maxDuration(250)
  .onBegin((e)=>{
    // nous pouvons ajouter un withSpring de react-native-reanimated pour un effet souple
   scale.value = withSpring(1.5)
  })
  .onFinalize((e)=>{
  //ceci se passe lorsque tu as fini de taper l element
  scale.value = withSpring(1)
  })

  // ici maxDuration c'est la duree pour que l effet se fasse

  const animatedStyle = useAnimatedStyle(()=>({
    // la ou nous disons ce que l'objet est censé fait , du genre comme le style pour l'animation va retourner un style en objet 
    /*
    ceci est pour PanGesture
     transform:[{
      translateX:offest.value.x
    },{
      translateY:offest.value.y
    }],
    */
    transform:[{
      scale:scale.value
    }],
   
  }));
  return(
    <View>
      <ThemedText type='subtitle'>TAP GESTURE</ThemedText>
      <ThemedText type='subtitle'>SCALE THE BOX AROUND</ThemedText>
      <View>
        <GestureDetector gesture={tapGesture}>
        <Box style={animatedStyle} />
        </GestureDetector>
      </View>
    </View>
  )
}

// LONG PRESS GESTURE (lorsque l utilisateur presse sur le box)
const LongPressGestureExample = ()=>{

  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);


  const animatedStyle = useAnimatedStyle(()=>({
    transform:[{
      scale:scale.value
    }],
    opacity:opacity.value,
   
  }));
   const longPressGesture = Gesture.LongPress()
  .onStart((e)=>{
   scale.value = withSpring(1.5);
   opacity.value = withSpring(0.5);
  })
  .onFinalize((e)=>{
  //ceci se passe lorsque tu relaches l element
  scale.value = withSpring(1);
  scale.value = withSpring(1);
  })

  return(
    <View>
      <ThemedText type='subtitle'>LONG PRESS GESTURE</ThemedText>
      <ThemedText type='subtitle'>SCALE THE BOX AROUND</ThemedText>
      <View>
        <GestureDetector gesture={longPressGesture}>
        <Box style={animatedStyle} />
        </GestureDetector>
      </View>
    </View>
  )
}
// ROTATION GESTURE
const RotationGestureExample = ()=>{

  const rotation = useSharedValue(0);
  
  const animatedStyle = useAnimatedStyle(()=>({
    transform:[{rotateZ:`${rotation.value}rad`}],
  }));
   const rotationGesture = Gesture.Rotation()
  .onUpdate((e)=>{
  rotation.value = e.rotation;
  })

  return(
    <View>
      <ThemedText type='subtitle'>ROTATION GESTURE WITH 2 HANDS</ThemedText>
      <ThemedText type='subtitle'>ROTATE THE BOX AROUND</ThemedText>
      <View>
        <GestureDetector gesture={rotationGesture}>
        <Box style={animatedStyle} />
        </GestureDetector>
      </View>
    </View>
  )
}
export default function GestureAndAnimations() {
 const [selectedExample,setSelectedExample] = React.useState('pan')
  const examples = {
    pan: <PanGestureExample />,
    tap: <TapGestureExample />,
    longPress: <LongPressGestureExample/>,
    rotation: <RotationGestureExample />
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View>
    <ThemedText type='title'>Gesture and Animations</ThemedText>
    <ScrollView horizontal style={{maxHeight:35}} contentContainerStyle={{gap:16}}>
    {Object.keys(examples).map((example)=>(
      <Pressable
      key={example}
  style={{backgroundColor: example === selectedExample ? 'red':'transparent'}}
  onPress={()=>setSelectedExample(example)}
>
   <Text style={{color:'black',padding:10}}>{example}</Text>
</Pressable>
      // <Button 
      // key={example} 
      // onPress={()=>setSelectedExample(example)} title={example}  />
    ))}
    </ScrollView>
    {examples[selectedExample as keyof typeof examples]}
    </View>
   
    </SafeAreaView>
  );
}
