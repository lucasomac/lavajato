import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone do botão Sair
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/Themes';
import firebase from '../config/firebase';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeMenuBottomTab from './HomeMenuBottomTab';
const Stack = createStackNavigator();

// Função para mudar o título do header da tela stack com
// a mudança de tab (abas) do bottom tab (HomeMenuBottomTab)
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'ScheduleMenuStack':
            return 'Agendamentos';
        // case 'History':
        //   return 'Histórico';
    }
}

export default function MainMenuStack() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.safeAreaViewColor }}>
            <StatusBar style="auto" backgroundColor={Colors.statusBarColor} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerStyle: { backgroundColor: Colors.buttonColor }, // Header color
                        headerTintColor: Colors.whiteColor, // Header text color
                    }}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: 'Login',
                            headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ title: 'Cadastre-se' }}
                    />
                    <Stack.Screen
                        name="HomeMenuBottomTab"
                        component={HomeMenuBottomTab}
                        options={({ navigation, route }) => ({
                            headerTitle: getHeaderTitle(route),
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() => {
                                        Alert.alert(
                                            'Atenção!',
                                            'Deseja sair do aplicativo?',
                                            [
                                                {
                                                    text: 'Sim',
                                                    onPress: () => {
                                                        global.idUsuario = ''; // Limpa variável global
                                                        firebase.auth().signOut(); // Logout do Firebase
                                                        navigation.replace('Login');
                                                    },
                                                },
                                                {
                                                    text: 'Não',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                            ],
                                            { cancelable: false }
                                        );
                                    }}
                                    style={{ padding: 10 }}
                                >
                                    <Text style={{ color: Colors.whiteColor, fontWeight: 'bold' }}>Sair</Text>
                                    <MaterialCommunityIcons name="exit-run" color={Colors.whiteColor} size={26} />

                                </TouchableOpacity>
                            ),
                            headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}