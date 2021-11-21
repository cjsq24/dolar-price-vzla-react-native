import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DolarPriceTodayScreen from '../screens/dolarPriceTodayScreen';
import DolarPriceHistoryScreen from '../screens/dolarPriceHistoryScreen';

export type RootStackParamList = {
   DolarPriceTodayScreen: undefined;
   DolarPriceHistoryScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
   return (
      <Stack.Navigator initialRouteName='DolarPriceTodayScreen'>
         <Stack.Screen
            name='DolarPriceTodayScreen'
            component={DolarPriceTodayScreen}
            options={{
               headerTitle: 'Dolar Price Today'
            }}
         />
         <Stack.Screen
            name='DolarPriceHistoryScreen'
            component={DolarPriceHistoryScreen}
            options={{
               headerTitle: 'Dolar Price History'
            }}
         />
      </Stack.Navigator>
   );
};

export default StackNavigation;
