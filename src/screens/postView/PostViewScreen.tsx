import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Text} from '~/components/atom/Text';
import Toast from '~/components/atom/Toast/Toast';
import {Card} from '~/components/organisms/Card';
import {usePaginationGetApi} from '~/hooks/api';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import i18n from '~/translations/i18n';
import LocationService from '~/utils/LocationService';
import {PostViewItemProps} from './types';

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
  const {data, loading, refetch, fetchNextItems} = usePaginationGetApi(
    'photos?_start=0&_end=10',
  );

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
          paddingBottom: 120,
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
            <FastImage
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
        onEndReached={fetchNextItems}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={{marginVertical: theme.spacing.l}}
          />
        }
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
