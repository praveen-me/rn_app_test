import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const EditIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}>
    <Path
      fill="#727682"
      d="m7.99 3 1.566 1.565a.17.17 0 0 1 0 .24L5.764 8.596l-1.611.18a.338.338 0 0 1-.373-.374l.178-1.611L7.75 2.999a.17.17 0 0 1 .24 0Zm2.812-.398-.847-.848a.679.679 0 0 0-.958 0l-.615.615a.17.17 0 0 0 0 .24l1.566 1.566a.17.17 0 0 0 .24 0l.614-.615a.679.679 0 0 0 0-.958ZM7.667 7.565v1.768H2.11V3.777h3.99a.213.213 0 0 0 .147-.06l.695-.695a.208.208 0 0 0-.148-.356H1.833A.834.834 0 0 0 1 3.499V9.61c0 .46.373.834.833.834h6.111c.46 0 .834-.374.834-.834V6.87a.209.209 0 0 0-.356-.147l-.695.695a.213.213 0 0 0-.06.147Z"
    />
  </Svg>
);
export default EditIcon;
