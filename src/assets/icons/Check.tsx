import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Check = (props: SvgProps) => (
  <Svg width={800} height={800} viewBox="0 0 32 32" {...props}>
    <Path d="m5 16.577 2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
  </Svg>
);

export default Check;
