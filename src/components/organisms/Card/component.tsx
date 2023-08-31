import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Pressable} from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const Card: React.FC<CardProps> = ({children, style, onPress}) => {
  return (
    <Pressable
      style={[styles.card, style]}
      onPress={onPress}
      disabled={!onPress}
      >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
});
