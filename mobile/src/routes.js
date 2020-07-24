import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import Dashboard from './pages/Dashboard'
import New from './pages/New'
import Profile from './pages/Profile'

import { colors } from '~/styles/variables'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Routes() {
  const isSigned = useSelector(state => state.auth.signed)

  return (
    <NavigationContainer>
      {isSigned ? (
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#fafafa',
            inactiveTintColor: '#fafafa99',
            style: {
              backgroundColor: colors.mainDark,
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendamentos',
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="calendar"
                  size={20}
                  color={focused ? '#fafafa' : '#fafafa99'}
                />
              ),
            }}
          />

          <Tab.Screen
            name="New"
            component={New}
            options={{
              tabBarVisible: false,
              tabBarLabel: 'Agendar',
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="plus-circle"
                  size={20}
                  color={focused ? '#fafafa' : '#fafafa99'}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu perfil',
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    name="user"
                    size={20}
                    color={focused ? '#fafafa' : '#fafafa99'}
                  />
                )
              },
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
