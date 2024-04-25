import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.4 7.2h7.2m-7.2 3.6h7.2m-7.2 3.6H12m-5.4-12h10.8a2.4 2.4 0 0 1 2.4 2.4v14.4a2.4 2.4 0 0 1-2.4 2.4H6.6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4Z"
    />
  </Svg>
)
export default SvgComponent
