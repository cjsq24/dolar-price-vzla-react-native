import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Stack';
import axios from '../../helpers/interceptor';
import usePlatforms from '../../stores/platforms';
import usePriceToday from '../../stores/priceToday';
import Platforms from '../../api/services/platforms.service';
import PriceToday from '../../api/services/priceToday.service';
import colors from '../../utils/colors';
import Config from 'react-native-config';

type IProps = NativeStackScreenProps<RootStackParamList, 'DolarPriceTodayScreen'>;

const DolarPriceTodayScreen = ({ navigation }: IProps) => {
   const [loading, setLoading] = useState(true);
   const [refreshing, setRefreshing] = useState(false);
   const [error, setError] = useState(false);
   
   const { platforms, setPlatforms } = usePlatforms();
   const { priceToday, setPriceToday } = usePriceToday();

   useEffect(() => {
      (async () => {
         await getActualPrice();
      })();
   }, []);

   const getActualPrice = async () => {
      setRefreshing(true);
      const resPric = await PriceToday.getActualPrice();
      if (resPric.success) {
         setPriceToday(resPric.data);
      } else {
         setError(true);
      }
      setRefreshing(false);
      setLoading(false);
   };

   const reloadPrice = () => {
      setLoading(true);
      getActualPrice();
   };
   
   return (
      <View style={styles.container}>
         {loading ? (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size='large' />
            </View>
         ) : (
            <View style={styles.content}>
               {priceToday?.platforms ? (
                  <ScrollView
                     refreshControl={
                        <RefreshControl
                           refreshing={refreshing}
                           onRefresh={getActualPrice}
                        />
                     }
                  >
                     {priceToday.platforms.map(({ platform_id: platform, price, fluctuationBS, fluctuationPercent }) => {
                        const fluctuationBSColor = (fluctuationBS > 0) ? colors.positive : (fluctuationBS < 0) ? colors.negative : colors.neutral;
                        const fluctuationPercentColor = (fluctuationPercent > 0) ? colors.positive : (fluctuationPercent < 0) ? colors.negative : colors.neutral;
                        return (
                           <TouchableOpacity style={styles.rowContent} key={platform._id} activeOpacity={0.5}>
                              <View style={styles.contentLeft}>
                                 <Image style={styles.image} source={{ uri: `${Config.PUBLIC_URL}/${platform.image}` }} />
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
               ) : (
                  <>
                     {error && (
                        <View>
                           <Text>An error has ocurred</Text>
                           <TouchableOpacity onPress={reloadPrice}>
                              <Text>Reload</Text>
                           </TouchableOpacity>
                        </View>
                     )}
                  </>
               )}
            </View>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
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
