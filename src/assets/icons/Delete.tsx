import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Delete = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M6 7H5m1 0h2m10 0h1m-1 0h-2m-6 4v5m4-5v5M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 7h8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Delete;
