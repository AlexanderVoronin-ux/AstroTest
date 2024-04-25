import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 18 9 11.5 15.5 5"
    />
  </Svg>
)
export default SvgComponent
