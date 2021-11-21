import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Stack';
import axios from '../../helpers/interceptor';
/* import usePlatforms from '../../stores/platforms'; */
import usePriceToday from '../../stores/priceToday';

type IProps = NativeStackScreenProps<RootStackParamList, 'DolarPriceTodayScreen'>;

const DolarPriceTodayScreen = ({ navigation }: IProps) => {
   const [loading, setLoading] = useState(true);

   /* const { platforms, setPlatforms } = usePlatforms(); */
   const { priceToday, setPriceToday } = usePriceToday();

   useEffect(() => {
      const requestPriceToday = async (): Promise<void> => {
         const { data } = await axios.get('/dolar-price/get-actual-price');
         if (data.success) {
            setPriceToday(data.data);
         }
         setLoading(false);
      };
      requestPriceToday();
   }, []);
   
   return (
      <View style={styles.container}>
         {loading ? (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size='large' />
            </View>
         ) : (
            <View style={styles.content}>
               <ScrollView>
                  {priceToday?.platforms.map((ele) => {
                     console.log(ele)
                     return (
                        <View style={styles.rowContent} key={ele.platform_id._id}>
                           <View style={styles.contentLeft}>
                              <Image style={styles.image} source={{ uri: `http://192.168.1.15:4000/public/${ele.platform_id.image}` }} />
                           </View>
                           <View style={styles.contentCenter}>
                              <Text style={styles.textName}>{ele.platform_id.name}</Text>
                              <Text style={styles.textCurrentPrice}>Bs. 04,00</Text>
                           </View>
                           <View style={styles.contentRight}>
                              <Text style={styles.textComparisionPrice}>0,03</Text>
                              <Text style={styles.textPercentComparisionPrice}>0,76%</Text>
                           </View>
                        </View>
                     )
                  })}
               </ScrollView>
            </View>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   loadingContainer: {
      flex: 1,
      justifyContent: 'center'
   },
   content: {
      paddingHorizontal: 10,
      paddingTop: 10
   },
   image: {
      width: 50,
      height: 50
   },
   rowContent: {
      flexDirection: 'row',
      padding: 5,
      height: 65
   },
   contentLeft: {
      flex: 2,
      justifyContent: 'center'
   },
   contentCenter: {
      flex: 8,
      paddingLeft: 5,
      justifyContent: 'space-around'
   },
   contentRight: {
      flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'space-around'
   },
   textName: {
      fontSize: 18,
      fontWeight: 'bold'
   },
   textCurrentPrice: {
      fontSize: 18
   },
   textComparisionPrice: {
      fontSize: 16
   },
   textPercentComparisionPrice: {
      fontSize: 16
   }
});

export default DolarPriceTodayScreen;
