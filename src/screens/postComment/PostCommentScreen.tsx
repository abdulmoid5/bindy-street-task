import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Text} from '~/components/atom/Text';
import {Card} from '~/components/organisms/Card';
import {useGetApi} from '~/hooks/api';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {PostCommentItemProps} from './types';

type PostCommentScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'POST_COMMENT_ROUTE'
>;

export const PostCommentScreen: React.FC<PostCommentScreenProps> = (
  props,
): JSX.Element => {
  const {route} = props;
  const {post} = route.params;
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const {data, loading, refetch} = useGetApi(`comments?postId=${post.id}`);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}>
      <FlashList
        data={data}
        renderItem={({item}: {item: PostCommentItemProps}) => {
          return (
            <Card
              style={{
                marginVertical: theme.spacing.xxs,
                marginHorizontal: theme.spacing.s,
              }}>
              <Text variant="headline4" color="lightGray2">
                {item.name}
              </Text>
              <Text variant="body3" color="lightGray4">
                {item.email}
              </Text>

              <Text variant="body4" marginTop="xs">
                {item.body}
              </Text>
            </Card>
          );
        }}
        estimatedItemSize={160}
        onRefresh={refetch}
        refreshing={loading}
        ListHeaderComponent={
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.white,
            }}>
            <FastImage
              style={{
                width: '100%',
                height: width,
              }}
              source={{uri: post.thumbnailUrl}}
            />
            <View
              style={{
                paddingHorizontal: theme.spacing.s,
              }}>
              <Text>{post.title}</Text>
            </View>
            <View
              style={{
                marginTop: theme.spacing.m,
                marginBottom: theme.spacing.s,
                backgroundColor: theme.colors.lightGray6,
                width: '100%',
                height: 2,
              }}
            />
          </View>
        }
      />
    </View>
  );
};
