import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Profile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#B5C0C8"
      d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm3.5 1.25h-.652a6.808 6.808 0 0 1-5.696 0H8.5a5.251 5.251 0 0 0-5.25 5.25v1.625C3.25 21.16 4.09 22 5.125 22h13.75c1.035 0 1.875-.84 1.875-1.875V18.5a5.251 5.251 0 0 0-5.25-5.25Z"
    />
  </Svg>
);
export default Profile;
