import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Text} from '~/components/atom/Text';
import {Card} from '~/components/organisms/Card';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {useCardView} from './hooks/useCardView';
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
  const {data, loading, refetch} = useCardView();

  const list = (row: Array<CardViewItemProps>, variant: ItemVariant) => {
    return (
      <FlashList
        horizontal
        data={row}
        renderItem={({item}: {item: CardViewItemProps}) => (
          <Item
            variant={variant}
            image={item.thumbnailUrl}
            title={item.title}
          />
        )}
        estimatedItemSize={160}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
      contentContainerStyle={{
        paddingBottom: 120,
        width: '100%',
      }}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} color={theme.colors.primary} />
        </View>
      ) : (
        <View>
          {list(data.row1, 'small')}
          {list(data.row2, 'medium')}
          {list(data.row3, 'large')}
        </View>
      )}
    </ScrollView>
  );
};

type ItemVariant = 'small' | 'medium' | 'large';
type ItemProps = {
  variant: ItemVariant;
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
      <FastImage
        style={{...getSize()}}
        source={{uri: image, priority: 'high'}}
      />
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
