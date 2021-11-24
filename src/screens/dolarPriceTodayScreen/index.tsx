import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Stack';
import axios from '../../helpers/interceptor';
import usePlatforms from '../../stores/platforms';
import usePriceToday from '../../stores/priceToday';
import Platforms from '../../api/services/platforms.service';
import PriceToday from '../../api/services/priceToday.service';
import colors from '../../utils/colors';

type IProps = NativeStackScreenProps<RootStackParamList, 'DolarPriceTodayScreen'>;

const DolarPriceTodayScreen = ({ navigation }: IProps) => {
   const [loading, setLoading] = useState(true);

   const { platforms, setPlatforms } = usePlatforms();
   const { priceToday, setPriceToday } = usePriceToday();

   useEffect(() => {
      (async () => {
         const resPric = await PriceToday.getActualPrice();
         if (resPric.success) {
            setPriceToday(resPric.data);
         }
         setLoading(false);
      })();
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
                  {priceToday?.platforms?.map(({ platform_id: platform, price, fluctuationBS, fluctuationPercent }) => {
                     const fluctuationBSColor = (fluctuationBS > 0) ? colors.positive : (fluctuationBS < 0) ? colors.negative : colors.neutral;
                     const fluctuationPercentColor = (fluctuationPercent > 0) ? colors.positive : (fluctuationPercent < 0) ? colors.negative : colors.neutral;
                     return (
                        <TouchableOpacity style={styles.rowContent} key={platform._id} activeOpacity={0.5}>
                           <View style={styles.contentLeft}>
                              <Image style={styles.image} source={{ uri: `http://192.168.1.15:4000/public/${platform.image}` }} />
                           </View>
                           <View style={styles.contentCenter}>
                              <Text style={styles.textName}>{platform.name}</Text>
                              <Text style={styles.textCurrentPrice}>{`Bs. ${price}`}</Text>
                           </View>
                           <View style={styles.contentRight}>
                              <Text style={[styles.textFluctuationPrice, { color: fluctuationBSColor }]}>{fluctuationBS}</Text>
                              <Text style={[styles.textPercentFluctuationPrice, { color: fluctuationPercentColor }]}>{`${fluctuationPercent}%`}</Text>
                           </View>
                        </TouchableOpacity>
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
      /* paddingHorizontal: 10, */
      paddingTop: 10
   },
   image: {
      width: 50,
      height: 50
   },
   rowContent: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      height: 65,
      backgroundColor: 'white',
      marginBottom: 10
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
   textFluctuationPrice: {
      fontSize: 16
   },
   textPercentFluctuationPrice: {
      fontSize: 16
   }
});

export default DolarPriceTodayScreen;
