import Svg, { Path, SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps & { style?: object }) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"
    />
  </Svg>
);
export default SearchIcon;
