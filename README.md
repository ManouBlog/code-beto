# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## EXPLICATIONS 
- Pour voir les explications sur les hooks https://docs.expo.dev/versions/latest/sdk/router/#hooks

#HOOKS#
*******useFocusEffect()*******
* nous allons utiliser useFocusEffect() , peut etre utilisé avec react navigation, c est comme use effect.
* il va etre declencher avant l ui , et lancer ce qu'il a
* on a aussi useCallback , ou l on peut appeller pour fetch data.
useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      console.log('Hello, I\'m focused!');

      // Return function is invoked whenever the route gets out of focus.
      return () => {
        console.log('This route is now unfocused.');
      };
    }, []))

******useGlobalSearchParams()*****
-qd tu utilises , le lien va etre mis à jour , meme si la route n'est pas focused

****useLocalSearchParams()****

 // user=baconbrix & extra=info
 // const { user, extra } = useLocalSearchParams();
 // return <Text>User: {user}</Text>;

-utilise qd la route est focused.
-ceci permet d'acceder au paramètre de la route
-voici un exemple : acme://profile/baconbrix?extra=info
tu peux avoir 'baconbrix'

****useNavigation()****
-pour l utiliser c'est : 
const navigation = useNavigation();
-on peut accéder au méthode comme Navigate() ou go back()
 
****useNavigationContainerRef()****

-ceci te donne les elements de la route , index:0
-aussi avec :  
 * Route "./(tabs)/index.tsx"
 * {"state": {"index": 0, "key": "stack-PoC_Z_83npEXEk96cOKl7", "preloadedRoutes": [], "routeNames": ["__root"], "routes": [[Object]], "stale": false, "type": "stack"}}
- la 'routesNames' est un tableau qui montre toutes les routes

*****usePathname****
-donne le nom du path
-selectione le nom de la route sans les paramètres

****useRootNavigationState***
-ceci va retourner l'etat de la route
-ceci retourne un tableau d'objets qui contient le nom de la navigation et le dossier

****useRouter****
-const router = useRouter();
-ceci est comme useNavigation de react
-il ya plusieurs méthode (router.back,router.dissmis)
-on peut utiliser 'canDismiss' pour ne pas revenir en arriere
-donner la permission de revenir en arrière : router.canGoBack()
-avec (router.replace("/")) ceci remplace le segment de la route
-(router.setParams({
   hello:"test"
})) ceci  permet d'ajouter des parametres à la route

*****useSegements()*****
-ceci va retourner une liste de fichier ou dossiers qui se trouve dans le projet , du genre des ['profile','[users]']