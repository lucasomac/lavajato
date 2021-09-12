import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícones das tabs e de botões telas
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import Colors from '../../assets/Themes';
import Home from '../screens/Home';
import ScheduleMenuStack from './ScheduleMenuStack';

const Tab = createMaterialBottomTabNavigator();

export default function HomeMenuBottomTab({ navigation, route }) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.whiteColor}
            inactiveColor={Colors.primaryColor}
            barStyle={{ backgroundColor: Colors.buttonColor }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="ScheduleMenuStack"
                component={ScheduleMenuStack}
                options={{
                    tabBarLabel: 'Agenda',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar-clock" size={26} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}
