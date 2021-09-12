import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../../assets/Themes';
import CreateSchedule from '../screens/ScheduleScreens/CreateSchedule';
import ScheduleDetails from '../screens/ScheduleScreens/ScheduleDetails';
import ScheduleList from '../screens/ScheduleScreens/ScheduleList';

const Stack = createStackNavigator();

export default function ScheduleMenuStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                // initialRouteName="CreateSchedule"
                initialRouteName="ScheduleList"
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.buttonColor }, // Header color
                    headerTintColor: Colors.whiteColor, // Header text color
                }}>
                <Stack.Screen
                    name="ScheduleList"
                    component={ScheduleList}
                    options={{ headerShown: false, title: 'Agendamentos' }}
                />
                <Stack.Screen
                    name="CreateSchedule"
                    component={CreateSchedule}
                    options={{ headerShown: false, title: 'Novo Agendamento' }}
                />
                <Stack.Screen
                    name="ScheduleDetails"
                    component={ScheduleDetails}
                    options={{ headerShown: false, title: 'Detalhes Agendamento' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}