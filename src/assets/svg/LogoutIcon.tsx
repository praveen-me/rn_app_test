import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LogoutIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#727682"
      d="m18.75 10.62-6 6.123c-.535.547-1.464.164-1.464-.62v-3.499H6.43a.864.864 0 0 1-.857-.875v-3.5c0-.484.382-.874.857-.874h4.857v-3.5c0-.78.925-1.166 1.465-.62l6 6.125a.895.895 0 0 1 0 1.24ZM7.858 16.56v-1.458a.434.434 0 0 0-.428-.438h-3A1.154 1.154 0 0 1 3.286 13.5V6.5c0-.645.51-1.166 1.143-1.166h3a.434.434 0 0 0 .428-.438V3.438a.434.434 0 0 0-.428-.437h-3C2.536 3 1 4.568 1 6.5v6.998c0 1.932 1.536 3.5 3.429 3.5h3a.434.434 0 0 0 .428-.438Z"
    />
  </Svg>
);
export default LogoutIcon;
