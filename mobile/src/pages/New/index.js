import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import SelectProvider from './SelectProvider'
import SelectDateTime from './SelectDateTime'
import Confirm from './Confirm'
import { GoBackButton } from './styles'

const Stack = createStackNavigator()

export default function New({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: '#fafafa',
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerLeft: () => (
          <GoBackButton onPress={() => navigation.goBack()}>
            <Icon name="angle-left" color="#fafafa" size={30} />
          </GoBackButton>
        ),
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          headerTitle: 'Selecione seu médico',
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          headerTitle: 'Escolha um horário',
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: 'Concluir',
        }}
      />
    </Stack.Navigator>
  )
}
