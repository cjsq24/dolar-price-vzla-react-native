import React from 'react'
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Stack';

type IProps = NativeStackScreenProps<RootStackParamList, 'DolarPriceHistoryScreen'>;

const DolarPriceHistoryScreen = ({ navigation }: IProps) => {
   return (
      <View>
         <Text>Dolar Price History Screen</Text>
      </View>
   );
};

export default DolarPriceHistoryScreen;
