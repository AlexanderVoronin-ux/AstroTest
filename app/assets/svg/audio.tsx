import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeWidth={2}
      d="M17.973 10.937c1.367.762 1.372 1.72 0 2.58L7.376 20.666c-1.331.71-2.236.29-2.33-1.247L5 4.46c-.03-1.416 1.136-1.817 2.248-1.138l10.724 7.615Z"
    />
  </Svg>
)
export default SvgComponent
