import React, {ReactNode} from 'react';
import {TouchableOpacity, Pressable} from 'react-native';
import Text from 'viamagnus/src/components/Text';

type ButtonOwnProps<
  E extends typeof TouchableOpacity | typeof Pressable =
    | typeof TouchableOpacity
    | typeof Pressable,
> = {
  children: ReactNode | string;
  as?: E;
  textProps?: Omit<Text, 'children'>;
  onPress: (value?: any) => void;
  btnRef?: any;
};

type ButtonProps<E extends typeof TouchableOpacity | typeof Pressable> =
  ButtonOwnProps<E> & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultButton = Pressable;

export default function Button<
  E extends typeof TouchableOpacity | typeof Pressable = typeof defaultButton,
>({textProps, children, as, style, btnRef, ...rest}: ButtonProps<E>) {
  const TagName = as || defaultButton;

  return (
    // @ts-ignore
    <TagName
      {...rest}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}, style]}
      ref={btnRef}>
      {typeof children !== 'string' ? (
        children
      ) : (
        <Text {...textProps}>{children}</Text>
      )}
    </TagName>
  );
}
