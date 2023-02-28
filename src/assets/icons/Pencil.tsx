import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Pencil = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 21h8M20.065 7.394 7.1 20.411A2 2 0 0 1 5.683 21h-1.68A1.007 1.007 0 0 1 3 19.992V18.3a2 2 0 0 1 .583-1.412l12.969-13.02c3.011-2.52 6.023 1.008 3.513 3.527ZM15.31 5.31l3.417 3.418"
      stroke="#323232"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.1}
      d="M18.556 8.91 7.1 20.41A2 2 0 0 1 5.683 21h-1.68A1.007 1.007 0 0 1 3 19.992V18.3a2 2 0 0 1 .583-1.412L15.065 5.36a.25.25 0 0 0 .068.127l3.418 3.417a.429.429 0 0 0 .005.005Z"
      fill="#323232"
    />
  </Svg>
);

export default Pencil;
