import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {Card} from '~/components/organisms/Card';
import {useGetApi} from '~/hooks/api';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {CardViewItemProps} from './types';

type CardViewScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'CARD_VIEW_ROUTE'
>;

export const CardViewScreen: React.FC<CardViewScreenProps> = (
  props,
): JSX.Element => {
  const {} = props;
  const theme = useTheme();
  const {
    data: row1,
    loading: row1Loading,
    refetch: row1Refetch,
  } = useGetApi('photos?_start=0&_limit=10');
  const {
    data: row2,
    loading: row2Loading,
    refetch: row2Refetch,
  } = useGetApi('photos?_start=11&_limit=20');
  const {
    data: row3,
    loading: row3Loading,
    refetch: row3Refetch,
  } = useGetApi('photos?_start=21&_limit=30');

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.white,
      }}
      contentContainerStyle={{
        paddingBottom: 120,
        width: '100%',
      }}>
      {row1Loading || row2Loading || row3Loading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} color={theme.colors.primary} />
        </View>
      ) : (
        <>
          <FlashList
            horizontal
            data={row1}
            renderItem={({item}: {item: CardViewItemProps}) => (
              <Item
                variant="small"
                image={item.thumbnailUrl}
                title={item.title}
              />
            )}
            estimatedItemSize={160}
            onRefresh={row1Refetch}
            refreshing={row1Loading}
          />
          <FlashList
            horizontal
            data={row2}
            renderItem={({item}: {item: CardViewItemProps}) => (
              <Item
                variant="medium"
                image={item.thumbnailUrl}
                title={item.title}
              />
            )}
            estimatedItemSize={160}
            onRefresh={row2Refetch}
            refreshing={row2Loading}
          />
          <FlashList
            horizontal
            data={row3}
            renderItem={({item}: {item: CardViewItemProps}) => (
              <Item
                variant="large"
                image={item.thumbnailUrl}
                title={item.title}
              />
            )}
            estimatedItemSize={160}
            onRefresh={row3Refetch}
            refreshing={row3Loading}
          />
        </>
      )}
    </ScrollView>
  );
};

type ItemProps = {
  variant: 'small' | 'medium' | 'large';
  image: string;
  title: string;
};
const Item: React.FC<ItemProps> = ({variant, image, title}) => {
  const theme = useTheme();

  const getSize = () => {
    switch (variant) {
      case 'small':
        return {width: 206, height: 206};
      case 'medium':
        return {width: 290, height: 230};
      case 'large':
        return {width: 435, height: 230};
    }
  };

  return (
    <Card
      style={{
        margin: theme.spacing.xs,
        width: getSize().width + 32,
      }}>
      <Image style={{...getSize()}} source={{uri: image}} />
      <View
        style={{
          height: 90,
        }}>
        <Text numberOfLines={3} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </Card>
  );
};
