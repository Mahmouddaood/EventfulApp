import React from 'react';
import FastImage from 'react-native-fast-image';
import Props from './index.interface';
import styles from './styles'
import { getSrc } from './helpers';

const { memo, useMemo } = React;

const Avatar: React.FC<Props> = ({
  imageStyle,
  source,
  children
}): JSX.Element => {
  const sourceProps = useMemo(() => getSrc(source), [source]);
  console.log('seource =>')
  return (
    <FastImage
      style={[styles.avatarStyle, imageStyle]}
      source={sourceProps}
      children={children}

    />
  );
};

export default memo(Avatar);
