import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps & { style?: object }) => (
  <Svg width={10} height={9} fill="none" {...props}>
    <Path
      fill="#FBBE21"
      d="m5.72.962.734 1.467c.1.204.367.4.592.438l1.329.22c.85.142 1.05.759.437 1.367L7.78 5.488a.905.905 0 0 0-.217.754l.296 1.279c.234 1.012-.304 1.404-1.2.875l-1.246-.738a.9.9 0 0 0-.825 0l-1.245.738c-.892.529-1.434.133-1.2-.875l.295-1.28a.905.905 0 0 0-.216-.753L1.187 4.454C.58 3.846.775 3.23 1.625 3.088l1.33-.221a.908.908 0 0 0 .587-.438L4.275.962c.4-.795 1.05-.795 1.446 0Z"
    />
  </Svg>
);
export default SvgComponent;
