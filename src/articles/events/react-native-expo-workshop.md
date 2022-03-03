# React Native & Expo Workshop

These are steps that you can follow to create your own project using React Native and Expo.

## Step 0. Necessary Installs

### On Your Laptop

npm - Go to [nodejs.org](https://nodejs.org)  
git - Go to [git-scm.com](https://git-scm.com/)  
yarn -

```bash
npm install -g yarn
```

Expo CLI -

```bash
yarn global add expo-cli
```

### On Your Phone

Expo Go - Search for 'Expo Go' on App Store or Google Play Store

## Step 1. Creating the App Workspace

Let's make a new Expo app on the Desktop (or folder of your choice).

On Windows, open up the Git Bash. On MacOS or Linux, open up your terminal. Run:

```bash
cd
cd Desktop
expo init my-app
```

A prompt will appear that looks like this:

```
? Choose a template: › - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
❯   blank               a minimal app as clean as an empty canvas
    blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started
```

(

If you not get this prompt and instead get an error starting with: `Command 'expo' not found, did you mean:` then you may need to update your \$PATH environment variable. Do:

```bash
cd
nano .bashrc
```

And add this line to the bottom of `.bashrc`

```bash
export $PATH="$(yarn global bin):$PATH"
```

)

Navigate using the arrow-keys to the selection labeled "tabs" and press Enter. A message indicating that a download is in progress should now appear. When it is finished, you should see the following message:

```
✅ Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd my-app
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web
```

An app workspace has been created for us! We can enter that folder with:

```bash
cd my-app
```

## Step 2. First Launch

Let's start our new app. Run:

```
yarn start --tunnel
```

You should see:

![Metro Dev Dashboard](/react-native-expo/metro.png)

Now you can try to open your app on your phone! Open up Expo Go on Android, or your Camera app on iOS and scan the QR code in the bottom left corner of your screen. (You can hover over the QR code to make it larger.)

(
NOTE FROM THE AUTHOR: On-campus, there are network rules set by the system administrators that limit what we can do with Expo. This may cause you to run into an error when attempting to download your app from your computer to your phone. In my experience, this error is more common with Android users than with iOS ones. If you are struggling to open it on your phone, try clicking "Run in web browser" on the sidebar on the left. Once you are off campus, try following these steps again for the ✨authentic✨ mobile developer experience.
)

## Step 3. Hello World!

Now we have an app running on our phone (or web browser). Let's make it say something we want. Of course, there is no better place to start than "Hello World!".

Open up the `my-app` project folder in your text editor of choice (VS Code is recommended). From there, open up the file `screens/TabOneScreen.tsx`. Focus your attention on the following section in this file:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

The "Text" component in React Native is the one responsible for rendering text to the screen. We can add another one of our own:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text>Hello world!</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

There should now be a small line reading "Hello world!" under "Tab One". Notice how it does not look the same as "Tab One" above it. This is because the above text is _styled_ to look different from the default. We can add some styling to our text too:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text style={{ color: "#67CDFE", fontSize: 50 }}>Hello world!</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

If you added the exact styling shown above, your "Hello world!" should now be blue, and much larger. Experiment with adding different styles to text and other components (`View`s also can be styled). If you are familiar with CSS, you will notice that this is very similar and many of the same properties are valid.

## Step 4. First Functionality

Let's make our app do something in response to a user. The most basic way that a user provides in input to any app is by pushing a button on the screen. So, let's add a `Button`.

First, we need to import it so that the compiler knows where the component is coming from. Change line 1 to:

```tsx
import { StyleSheet, Button } from "react-native";
```

Then, add the `Button` to the screen by making the change below:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text style={{ color: "#67CDFE", fontSize: 50 }}>Hello world!</Text>
			<Button
				onPress={() => {
					/* TODO */
				}}
				title="Change my color"
				accessibilityLabel="Press this button to change the color of the button"
				color="#67CDFE"
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

The button should be rendered to the screen now. Currently, when pressed, it will not do anything. Say we want to make the button cycle between three set colors when pressed. We might do that by having a list of intended colors and some variable that stores the current button color state. Here's a way to do that below:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	const colors = ["#67CDFE", "#43c9a2", "#dcdcaa"];
	const [currentColor, setCurrentColor] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text style={{ color: "#67CDFE", fontSize: 50 }}>Hello world!</Text>
			<Button
				onPress={() => {
					/* TODO */
				}}
				title="Change my color"
				accessibilityLabel="Press this button to change the color of the button"
				color={colors[currentColor]}
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

`useState()` is a React hook - do not worry too much about it for now if you do not know what that is. Just know that when the value stored in `currentColor` changes, this will cause the app to re-render, and that passing `0` as an argument makes it the starting value of `currentColor`. We also need to import it. Add this line underneath line 1;

```tsx
import { useState } from "react";
```

Now we add the actual logic. So far, we have left the `onPress` prop with an empty function, but this is where our logiv should go, since this code will be run each time the button is pressed (this is called an "event handler"). We want our button's current color to change from the first to the second color, the second to the third color, and the third to the first color in a cycle. We can achieve this by incrementing `currentColor` and performing a modulo operation on it, and then storing the result in `currentColor`. Take a look at the code below:

```tsx
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	const colors = ["#67CDFE", "#43c9a2", "#dcdcaa"];
	const [currentColor, setCurrentColor] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Text style={{ color: "#67CDFE", fontSize: 50 }}>Hello world!</Text>
			<Button
				onPress={() => {
					setCurrentColor((currentColor + 1) % 3);
				}}
				title="Change my color"
				accessibilityLabel="Press this button to change the color of the button"
				color={colors[currentColor]}
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}
```

Once it reloads, pressing the button should do as we expect - cycling through the three colors each time the user presses a button. To make this code more robust to change, we could replace `3` with the length of the colors list. This way, they do not need to be updated separately.
