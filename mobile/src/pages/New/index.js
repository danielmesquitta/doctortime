import React, { useState, useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import SelectProvider from './SelectProvider'
import SelectDateTime from './SelectDateTime'
import Confirm from './Confirm'
import GoBackButton from '~/components/GoBackButton'

const Stack = createStackNavigator()

export default function New({ navigation }) {
  const { navigate } = navigation

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: '#fafafa',
        headerTitleAlign: 'center',
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          headerTitle: 'Selecione seu médico',
          headerLeft: () => (
            <GoBackButton handlePress={() => navigate('Dashboard')} />
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          headerTitle: 'Escolha um horário',
          headerLeft: () => (
            <GoBackButton handlePress={() => navigate('SelectProvider')} />
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: 'Confirmar agendamento',
          headerLeft: () => (
            <GoBackButton handlePress={() => navigate('SelectDateTime')} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
