import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { useKeepAwake } from "expo-keep-awake";
import MapScreen from "./screens/Map";
import tw from "tailwind-react-native-classnames";
import Menu from "./screens/Menu";

export default function App() {
    useKeepAwake();
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <KeyboardAvoidingView
                    style={tw`flex-1`}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                >
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Map"
                            component={MapScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Menu"
                            component={Menu}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
