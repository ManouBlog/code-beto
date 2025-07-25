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

## AUTHENTICATION FLOW
nb : souvent rédemarre le serveur

-nous allons proteger les routes
-créer des routes publics et privées
-nous allons créer un dossier (app/auth)
-Nous allons utiliser app/_layout.tsx pour gerer la protection
-Dans le fichier app/_layouts.tsx nous aurons:
  * import { Stack,Slot } from 'expo-router';
  *  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot /> (donne les contenus séléctionnés)
      </ThemeProvider>
-dans le fichier app/(app)/_layout.tsx nous aurons : 

 * <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
- nous allons utiliser context (un dossier) pour gérer les états
- app/context/auth.tsx :
*définir le type de data
*definir le type de user
- avec le context : AuthContextProvider nous pouvons utiliser pour savoir si l'utilisateur est connectée ou pas.
- nous allons gérer la protection des routes via le fichier app/(auth)/index.tsx
- dans le dossier app/(auth), on peut avoir plusieurs fichiers comme 'sign up'
- nous aurons donc dans app/(auth) un fichier : app/(auth)/_layout.tsx qui va montrer le model de l auth

- nous allons utiliser le fichier : app/(app)/_layout.tsx pour gérer si l utilisateur doit aller à la page suivante ou pas
 nous allons utiliser le Redirect pour rediriger si l utilisateur n est pas connéctée.
- Slot : Renders the current selected content.
- A group is created to organize similar routes or a section of the app. Each group has a layout file, and the grouped directory requires a name inside parentheses (group).

- code source : https://github.com/betomoedano/expo-auth-example
- slot : https://docs.expo.dev/versions/latest/sdk/router/#slot
- Route groupe : https://docs.expo.dev/develop/file-based-routing/#groups


###DEEPLINK###
-npx uri-scheme open exp://127.0.0.1:8081/--/deepLink --android
-npx uri-scheme open exp://127.0.0.1:8081/--/deepLink --ios


## ICONSYMBOL
- nous utilisons san francisco pour IOS et vector-icons pour android
- dons quand tu cliques sur "<IconSymbol></IconSymbol> " tu peux voir les details. 
- Pour ajouter des icons que tu veux  , modifie ceci :
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'move.3d':'more-vert' (ceci viens d etre ajoute)
} as IconMapping;
- voici comment l ajouter :  "tabBarIcon: ({ color }) => <IconSymbol size={28} name="move.3d" color={color} />",


## animation
- toujours mettre  <GestureHandlerRootView /> dans le layout(racine) ou tu vas
 mettre tes animations (c'est comme un provider) ou tu peux preciser dans le component que tu veux