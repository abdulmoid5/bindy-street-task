import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  View,
  useWindowDimensions,
} from 'react-native';
import {Text} from '~/components/atom/Text';
import Toast from '~/components/atom/Toast/Toast';
import {useGetApi} from '~/hooks/api';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {HeaderNavBack} from '~/navigation/headerNavBackButton';
import i18n from '~/translations/i18n';
import LocationService from '~/utils/LocationService';
import {PostViewItemProps} from './types';
import {Card} from '~/components/organisms/Card';

type PostViewScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'POST_VIEW_ROUTE'
>;

type LocationProps = {
  latitude: number;
  longitude: number;
};

export const PostViewScreen: React.FC<PostViewScreenProps> = (
  props,
): JSX.Element => {
  const {navigation} = props;
  const theme = useTheme();
  const {data, loading, refetch} = useGetApi('photos');

  const [location, setLocation] = useState<LocationProps>({
    latitude: 0,
    longitude: 0,
  });

  const checkAndRequestLocation = async () => {
    const permissionStatus = await LocationService.checkPermission();
    if (permissionStatus !== 'granted') {
      const newPermissionStatus = await LocationService.requestPermission();
      if (newPermissionStatus === 'granted') {
        const locationEnabled = await LocationService.enableLocationServices();
        if (locationEnabled) {
          getLocation();
        }
      }
    } else {
      getLocation();
    }
  };

  const getLocation = async () => {
    try {
      const location = (await LocationService.getLocation()) as LocationProps;
      setLocation(location);
    } catch (error) {
      Toast.error(
        (error as {message?: string})?.message ||
          i18n.t('error_getting_location'),
      );
    }
  };

  useEffect(() => {
    checkAndRequestLocation();
  }, []);

  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.s,
      }}>
      <Location text={i18n.t('postview_latitude')} value={location.latitude} />
      <Location
        text={i18n.t('postview_longitude')}
        value={location.longitude}
      />

      <FlashList
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          paddingBottom: 60,
        }}
        data={data}
        renderItem={({item}: {item: PostViewItemProps}) => (
          <Card
            onPress={() => {
              navigation.navigate('POST_COMMENT_ROUTE', {post: item});
            }}
            style={{
              margin: theme.spacing.xs,
            }}>
            <Image
              style={{
                width: '100%',
                height: width - theme.spacing.l * 2,
              }}
              source={{uri: item.thumbnailUrl}}
            />
            <Text>{item.title}</Text>
          </Card>
        )}
        estimatedItemSize={200}
        onRefresh={refetch}
        refreshing={loading}
      />
    </View>
  );
};

const Location = ({text, value}: {text: string; value: number}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.xxs,
      }}>
      <Text marginEnd="xxs" color="darkGray" variant="headline4">
        {text}
      </Text>
      <Text marginEnd="xxs" color="lightGray3" variant="headline4">
        {value}
      </Text>
    </View>
  );
};
