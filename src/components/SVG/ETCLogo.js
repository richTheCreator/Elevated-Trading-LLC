import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled(Icon)``

export const ETCLogo = ({ className }) => (
  <Svg viewBox='0 0 288 166' className={className}>
    <path
      d='M287.171 58.5793C287.171 55.5231 286.436 52.7928 284.967 50.3907C283.498 47.9887 281.451 46.1181 278.825 44.7765C276.2 43.4348 273.245 42.7634 269.963 42.7634H257.116V74.5821H269.963C273.245 74.5821 276.2 73.9033 278.825 72.5468C281.451 71.1891 283.498 69.3024 284.967 66.8842C286.436 64.4673 287.171 61.6986 287.171 58.5793ZM279.106 58.5793C279.106 60.2331 278.707 61.737 277.91 63.0947C277.113 64.4512 276.011 65.5203 274.604 66.2995C273.198 67.0799 271.651 67.4689 269.963 67.4689H265.04V49.8766H269.963C271.651 49.8766 273.19 50.2582 274.582 51.0225C275.972 51.7869 277.073 52.8324 277.887 54.158C278.7 55.4835 279.106 56.9577 279.106 58.5793ZM264.29 88.2003C262.039 87.2489 259.601 86.772 256.976 86.772C253.755 86.772 250.848 87.4905 248.254 88.925C245.659 90.3596 243.62 92.364 242.135 94.9382C240.65 97.5112 239.908 100.42 239.908 103.664C239.908 106.691 240.627 109.436 242.064 111.9C243.502 114.364 245.518 116.314 248.113 117.748C250.708 119.183 253.63 119.9 256.881 119.9C261.163 119.9 264.524 118.404 266.962 115.408L267.29 119.245H273.198V101.371H256.131V107.595L265.274 107.688C264.492 109.217 263.406 110.41 262.016 111.268C260.624 112.127 259.021 112.554 257.209 112.554C255.364 112.554 253.739 112.149 252.333 111.338C250.926 110.527 249.84 109.436 249.074 108.062C248.308 106.691 247.926 105.161 247.926 103.477C247.926 101.636 248.316 99.9987 249.098 98.5642C249.879 97.1297 250.965 96.0135 252.356 95.2182C253.747 94.4229 255.334 94.0252 257.116 94.0252C258.772 94.0252 260.264 94.3845 261.594 95.1017C262.922 95.819 263.915 97.0355 264.57 98.7513H272.87C272.432 96.2873 271.455 94.1503 269.939 92.3404C268.424 90.5318 266.54 89.1517 264.29 88.2003ZM221.013 74.5821H245.113V67.7031H228.937V62.1817H243.05V55.4438H228.937V49.6425H245.113V42.7634H221.013V74.5821ZM219.652 87.4273V105.349L204.273 87.4273H198.225V119.245H206.149V101.793L221.435 119.245H227.577V87.4273H219.652ZM199.82 49.8296H209.947V42.7634H181.721V49.8296H191.895V74.5821H199.82V49.8296ZM169.296 74.5821H177.689L164.185 42.5764H156.636L143.085 74.5821H151.525L153.636 69.1066H167.138L169.296 74.5821ZM164.513 62.3688H156.261L160.386 51.7943L164.513 62.3688ZM126.816 74.7692L140.647 42.7634H131.926L122.83 64.3347L113.733 42.7634H105.012L118.845 74.7692H126.816ZM110.688 87.2403H103.139L89.588 119.245H98.0269L100.137 113.771H113.641L115.798 119.245H124.191L110.688 87.2403ZM106.889 96.4582L111.015 107.033H102.763L106.889 96.4582ZM71.8623 74.5821H95.9624V67.7031H79.7873V62.1817H93.9005V55.4438H79.7873V49.6425H95.9624V42.7634H71.8623V74.5821ZM72.3576 88.7851C70.3714 87.8807 68.0674 87.4273 65.4407 87.4273H51.4689V119.245H59.3927V110.028H64.316L71.1622 119.245H80.727L72.5215 108.483C74.4593 107.517 75.9589 106.175 77.0227 104.46C78.0854 102.744 78.6167 100.794 78.6167 98.6113C78.6167 96.3343 78.0692 94.3522 76.9756 92.6687C75.8807 90.9839 74.3413 89.6894 72.3576 88.7851ZM70.7389 98.6113C70.7389 99.8897 70.2162 100.927 69.1685 101.722C68.1208 102.517 66.8161 102.916 65.2532 102.916H59.3927V94.3993H65.2532C66.8161 94.3993 68.1208 94.7895 69.1685 95.5688C70.2162 96.3492 70.7389 97.3638 70.7389 98.6113ZM36.9324 74.5821H60.6105V67.6101H44.8561V42.7634H36.9324V74.5821ZM0.829346 74.5821H24.9295V67.7031H8.75306V62.1817H22.8663V55.4438H8.75306V49.6425H24.9295V42.7634H0.829346V74.5821ZM40.4033 87.4273H12.1768V94.4935H22.3511V119.245H30.2749V94.4935H40.4033V87.4273ZM147.963 87.4273H135.114V119.245H147.963C151.245 119.245 154.198 118.567 156.824 117.211C159.449 115.853 161.496 113.966 162.966 111.548C164.436 109.131 165.169 106.362 165.169 103.243C165.169 100.186 164.436 97.4567 162.966 95.0547C161.496 92.6526 159.449 90.7808 156.824 89.4391C154.198 88.0988 151.245 87.4273 147.963 87.4273ZM143.039 94.5405H147.963C149.65 94.5405 151.189 94.9221 152.581 95.6864C153.971 96.4508 155.073 97.4963 155.886 98.8206C156.698 100.147 157.105 101.622 157.105 103.243C157.105 104.897 156.707 106.401 155.91 107.759C155.113 109.115 154.011 110.184 152.604 110.963C151.198 111.744 149.65 112.133 147.963 112.133H143.039V94.5405ZM185.097 87.4273H177.173V119.245H185.097V87.4273Z'
      fill='#2D2926'
    />
    <path d='M151.425 22.6008L135.718 1.07652L119.477 22.6008' fill='#959889' />
    <path d='M167.399 22.6008L151.692 1.07652L135.451 22.6008' fill='#959889' />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M143.571 11.8387L151.425 22.6008H135.451L143.571 11.8387Z'
      fill='#575B4A'
    />
    <path d='M89.9427 160.915H201.195' stroke='#2D2926' stroke-width='0.858' />
    <path
      d='M21.3192 164.598V159.545H28.0537V164.598H29.701V153.976H28.0537V158.092H21.3192V153.976H19.6719V164.598H21.3192ZM42.0924 158.302H37.5279V155.448H45.0469V153.976H35.8806V164.598H45.4491V163.146H37.5279V159.755H42.0924V158.302ZM50.401 164.598H51.9713V156.866H52.0669L56.0579 163.048H56.3844L60.3941 156.866H60.4711V164.598H62.1184V153.976H60.4512L56.3261 160.425H56.2876L52.124 153.976H50.401V164.598ZM69.944 164.598V160.406H74.4341C75.9498 160.406 76.8895 160.061 77.6939 159.297C78.2302 158.762 78.5753 158.053 78.5753 157.191C78.5753 156.367 78.2687 155.64 77.7138 155.085C76.8895 154.264 75.8344 153.976 74.4726 153.976H68.2967V164.598H69.944ZM74.4726 155.448C75.2397 155.448 75.9498 155.543 76.5059 156.118C76.7753 156.406 76.928 156.77 76.928 157.191C76.928 157.612 76.7555 158.015 76.4488 158.321C75.9883 158.762 75.4508 158.954 74.4142 158.954H69.944V155.448H74.4726ZM227.114 155.219C226.232 154.55 224.275 153.652 221.915 153.652C219.862 153.652 217.37 154.416 217.37 156.905C217.37 159.411 220.168 159.583 222.644 159.755C224.601 159.889 226.194 160.138 226.194 161.612C226.194 162.915 224.678 163.509 222.836 163.509C220.284 163.509 218.692 162.359 217.754 161.555L216.757 162.705C218.002 163.758 219.862 164.924 222.798 164.924C225.522 164.924 227.86 163.91 227.86 161.383C227.86 158.474 224.658 158.284 222.644 158.168C220.84 158.053 219.018 157.996 219.018 156.751C219.018 155.525 220.418 155.084 221.858 155.084C223.948 155.084 225.445 155.794 226.098 156.349L227.114 155.219ZM234.555 164.598V160.406H239.045C240.56 160.406 241.5 160.061 242.305 159.297C242.841 158.762 243.186 158.053 243.186 157.191C243.186 156.367 242.879 155.64 242.324 155.085C241.5 154.264 240.445 153.976 239.083 153.976H232.907V164.598H234.555ZM239.083 155.448C239.85 155.448 240.56 155.543 241.117 156.118C241.385 156.406 241.539 156.77 241.539 157.191C241.539 157.612 241.366 158.015 241.059 158.321C240.599 158.762 240.061 158.954 239.025 158.954H234.555V155.448H239.083ZM248.022 153.976V164.598H256.785V163.146H249.67V153.976H248.022ZM267.125 153.976L263.654 158.206L260.164 153.976H258.092L262.754 159.68V164.598H264.381V159.68L269.061 153.976H267.125Z'
      fill='#2D2926'
    />
  </Svg>
)