// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'

export type Icon = 'head' | 'webcam' | 'message' | 'terminal' | 'diamond' | 'talking' | 'trophy' | 'plus' | 'minus' | 'calendar' | 'trashcan' | 'x'
export type Color = 'default' | 'inverted' | 'monochrome' | 'grayscale'
type Props = {
  icon: ?Icon,
  color: Color,
}

const getIcon = ({ icon, color }) => {
  if (!icon) { return null }

  const colors: { [string]: string } = {
    default: theme.iconRed,
    inverted: theme.iconBright,
    monochrome: theme.iconDark,
    grayscale: theme.iconGray
  }

  const icons = {
    head: (
      <svg width='37px' height='43px' viewBox='0 0 37 43'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-269.000000, -1104.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(230.000000, 242.000000)'>
                <g transform='translate(40.000000, 40.000000)'>
                  <path d='M29.4146,11.3426 C29.3996,10.8916 28.9376,10.0396 28.6226,9.7316 C28.3076,9.4216 27.9346,9.0576 27.9236,8.7566 C27.9136,8.4566 27.7496,7.8396 27.0136,7.8656 C26.2806,7.8916 26.3086,7.1746 26.0296,6.9006 C25.7516,6.6286 25.4186,5.8666 24.8556,6.1496 C24.2906,6.4346 24.1496,5.4586 23.6406,5.2886 C23.1326,5.1186 22.6916,4.7946 21.9866,5.1586 C21.2826,5.5226 21.2996,4.4856 21.0586,4.2496 C20.8156,4.0126 20.1146,3.9436 19.7706,4.3326 C19.4246,4.7216 18.6946,4.3696 18.3596,4.0426 C18.0256,3.7156 17.1136,3.8056 16.8566,4.0966 C16.5976,4.3876 15.5826,4.5936 15.0806,4.6116 C14.5796,4.6306 13.6206,4.8896 13.6306,5.1536 C13.6386,5.4156 12.1666,6.3736 11.3166,6.6686 C10.4656,6.9606 10.4196,7.6796 10.4376,8.1696 C10.4536,8.6606 9.9236,9.3756 9.3546,10.0176 C8.7866,10.6596 9.1676,10.8166 9.0466,11.4606 C8.9256,12.1066 9.0716,12.1396 8.8486,12.9386 C8.6256,13.7386 9.3886,15.0316 9.3886,15.0316 C9.3886,15.0316 10.5146,15.4056 10.5396,16.1596 C10.5666,16.9116 11.5566,16.5006 11.9516,16.4876 C12.3456,16.4726 13.1066,16.7106 13.9246,17.5096 C14.7406,18.3116 14.8346,17.8916 15.5716,17.4516 C16.3086,17.0106 16.5386,17.4166 17.0226,17.8896 C17.5036,18.3626 18.1476,18.2646 18.5266,17.8376 C18.9056,17.4086 20.1656,17.5146 20.8096,17.4926 C21.4556,17.4706 21.2186,17.8916 20.9236,18.6956 C20.6296,19.4966 21.6176,18.9906 21.9206,18.9786 C22.2246,18.9676 22.2556,19.3076 22.7296,20.0636 C23.2056,20.8196 23.8526,20.8716 24.3546,21.3636 C24.8556,21.8546 25.3526,20.6676 25.9206,20.0256 C26.4896,19.3836 27.2886,19.1296 28.1656,19.0986 C29.0446,19.0666 28.6996,18.4946 28.6836,18.0056 C28.6666,17.5146 28.6466,16.9886 29.0256,16.5606 C29.4056,16.1316 29.7756,15.7146 29.3956,15.3406 C29.0136,14.9676 29.3666,14.5296 29.6946,14.1606 C30.0216,13.7916 29.8696,13.0616 29.4616,12.6606 C29.0536,12.2616 29.4306,11.7946 29.4146,11.3426 Z' />
                  <path d='M31.6473,21.3934 C34.1223,17.1314 34.5023,16.4754 33.5213,9.6824 C31.7843,-2.3326 4.9933,-4.8146 3.6533,11.7634 C3.4843,13.3154 2.6563,17.7294 0.8903,19.4944 C0.3033,20.0824 -0.2007,20.7204 0.0803,21.4104 C0.5183,22.4844 1.8383,21.9844 2.9113,22.2174 C2.8503,22.7804 2.4943,24.4034 2.4943,24.5544 C2.4943,25.1144 2.8363,25.4864 3.5113,25.6614 C3.0823,26.3504 2.8043,26.8224 3.4563,27.4764 C3.7053,27.7264 3.8203,27.8394 3.8203,29.4304 C3.8203,31.6654 5.9723,32.6944 7.7853,32.4054 C10.8033,31.9474 10.4853,32.3234 11.7313,33.6814 C13.8843,36.0354 12.5813,38.0404 13.3263,39.9404 L13.4203,40.1864 L27.9003,35.9004 C26.9863,28.7314 30.3643,23.6024 31.6473,21.3934 Z' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    webcam: (
      <svg width='30px' height='43px' viewBox='0 0 30 43'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-929.000000, -1363.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(890.000000, 502.000000)'>
                <g transform='translate(40.000000, 39.000000)'>
                  <path d='M24.0924075,32.0243367 L25.9267191,38.5587291 C26.3906698,39.9139767 24.5652073,41 22.8876528,41 L5.0944503,41 C3.41436745,41 1.67234024,39.9778604 2.05285562,38.5587291 L3.88716729,32' />
                  <path d='M28,14.9993443 C28,23.2832102 21.7309962,30 13.999388,30 C6.26777987,30 0,23.2832102 0,14.9993443 C0,6.71416707 6.26777987,0 13.999388,0 C21.7309962,0 28,6.71416707 28,14.9993443 Z' />
                  <path d='M20,14.9992522 C20,18.313723 17.3152187,21 14.0007478,21 C10.686277,21 8,18.313723 8,14.9992522 C8,11.6847813 10.686277,9 14.0007478,9 C17.3152187,9 20,11.6847813 20,14.9992522 Z' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    message: (
      <svg width='37px' height='36px' viewBox='0 0 37 36'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-269.000000, -1671.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(230.000000, 805.000000)'>
                <g transform='translate(40.000000, 44.000000)'>
                  <path d='M8,8 L28,8' />
                  <path d='M8,16 L28,16' />
                  <polygon points='35 -8.8817842e-16 0 -8.8817842e-16 0 26.3225806 19.4234914 26.3225806 19.4234914 34 27.8265841 26.3225806 35 26.3225806' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    terminal: (
      <svg width='42px' height='37px' viewBox='0 0 42 37'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-929.000000, -1925.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(890.000000, 1063.000000)'>
                <g transform='translate(40.000000, 40.000000)'>
                  <polygon points='0 35 39 35 39 0 0 0' />
                  <path d='M40,10 L1,10' />
                  <path d='M33,4 L36,7' />
                  <path d='M33,7 L36,4' />
                  <polygon points='26 7 29 7 29 4 26 4' />
                  <path d='M19,7 L22,7' />
                  <path d='M16,28 L24,28' />
                  <polyline points='7 28 13 21.500467 7 15' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    diamond: (
      <svg width='42px' height='39px' viewBox='0 0 42 39'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-270.000000, -2228.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(230.000000, 1367.000000)'>
                <g transform='translate(41.000000, 39.000000)'>
                  <polygon points='20 37 40 12.2504334 32.308 0 20 0 7.692 0 0 12.2504334' />
                  <path d='M0,12 L40,12' />
                  <polyline points='19 0 12 12.2504334 19 37' />
                  <polyline points='20 0 27 12.2504334 20 37' />
                  <path d='M27,12 L32,0' />
                  <path d='M12,12 L7,0' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    talking: (
      <svg width='42px' height='42px' viewBox='0 0 42 42'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-929.000000, -2519.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(890.000000, 1657.000000)'>
                <g transform='translate(40.000000, 40.000000)'>
                  <path d='M26,40 L26,38.2680197 C26,37.7816757 25.7128334,37.3459511 25.2795995,37.1742419 C20.1920813,35.1494627 17.3442635,32.6343692 16.8702897,31.0671504 L16.8702897,29.4225135 C17.9255522,28.31087 18.7572422,26.7595318 19.2500955,24.9431857 C20.4255905,24.0925799 20.7326301,22.3278458 19.7479171,21.0802245 L19.7479171,17.3998905 C19.7479171,13.6004518 17.6950241,11 13,11 C8.4271956,11 6.25009554,13.6004518 6.25009554,17.3998905 L6.25009554,21.0822096 C5.26836353,22.3278458 5.57440954,24.0905948 6.74791714,24.9421932 C7.24077047,26.7595318 8.0734541,28.31087 9.12971031,29.4225135 L9.12971031,31.0671504 C8.65673011,32.6323841 5.80692502,35.1474776 0.72040052,37.1742419 C0.287166552,37.3479362 0,37.7816757 0,38.2680197 L0,40' />
                  <path d='M24.3309242,17.1681336 L26.3925929,17.1681336 L26.3925929,23 L33.6733524,16.8019674 C37.2694693,16.0984123 40,12.6362067 40,8.46746915 C40,3.79066356 36.5632297,0 32.3228414,0 L24.5532224,0 C20.7839884,0 17.648206,2.99680732 17,6.94921909' />
                  <path d='M23,7 L33,7' />
                  <path d='M23,10 L28,10' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    trophy: (
      <svg width='42px' height='44px' viewBox='0 0 42 44'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
          <g transform='translate(-779.000000, -3206.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(0.000000, 823.000000)'>
              <g transform='translate(0.000000, 2294.000000)'>
                <g transform='translate(780.000000, 90.000000)'>
                  <polygon points='27 42 13 42 14.1648584 38 25.8351416 38' />
                  <path d='M8,20.8436224 C4.84548333,21.6809078 1.40934831,19.0724416 0.327855609,15.0167792 C-0.753637088,10.9611168 0.928250289,6.99425742 4.08178912,6.15599611 C4.94228964,5.92862139 5.82234698,5.95594539 6.67013556,6.19795797' />
                  <path d='M32,20.8436247 C35.1545167,21.6808976 38.5896739,19.0724705 39.6721444,15.016869 C40.7536371,10.9612674 39.0717497,6.99446748 35.9182109,6.15621874 C35.0469541,5.9259199 34.1561405,5.95617102 33.2975957,6.20793839' />
                  <path d='M31.6313185,0 L8.36868149,0 C7.61259135,0 7,0.609723493 7,1.36227397 L7,14 C7,21.7195525 12.8309988,28 20,28 C27.1680116,28 33,21.7195525 33,14 L33,1.36227397 C33,0.609723493 32.3874086,0 31.6313185,0 Z' />
                  <path d='M22.9230988,10.5861741 C20.7148662,4.39776549 21.2428993,4.54522962 19.0863334,10.5861741 C12.3417691,10.7194003 12.6786357,10.2942968 17.8980005,14.1487042 C15.9481012,20.4255913 15.6195013,19.9964198 21.0052328,16.3464282 C26.5335642,20.0930342 26.0137977,20.2659232 24.1114317,14.1487042 C29.4857965,10.1803935 29.4723631,10.7153323 22.9230988,10.5861741 Z' />
                  <path d='M19,38 L19,32' />
                  <path d='M22,38 L22,32' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    plus: (
      <svg width='20px' height='20px' viewBox='0 0 20 20'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-1191.000000, -1411.000000)' fill={colors[color]}>
            <g transform='translate(387.000000, 933.000000)'>
              <g transform='translate(0.000000, 470.000000)'>
                <path d='M813,17 L804,17 L804,19 L813,19 L813,28 L815,28 L815,19 L824,19 L824,17 L815,17 L815,8 L813,8 L813,17 Z' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    minus: (
      <svg width='20px' height='2px' viewBox='0 0 20 2'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-1161.000000, -1106.000000)' fill={colors[color]}>
            <g transform='translate(357.000000, 933.000000)'>
              <g transform='translate(0.000000, 157.000000)'>
                <rect x='804' y='16' width='20' height='2' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    calendar: (
      <svg width='40px' height='40px' viewBox='0 0 16 16'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-560.000000, -479.000000)' fill={colors[color]}>
            <g transform='translate(363.000000, 309.000000)'>
              <g transform='translate(33.000000, 146.000000)'>
                <path
                  d='M177.993,40 L166.007,40 C164.901746,39.9989108 164.004951,39.1052439 164,38 L164,28 C163.999997,27.468352 164.211671,26.9585804 164.588259,26.5833058 C164.964847,26.2080312 165.475355,25.9981392 166.007,26 L168,26 L168,25 C168,24.4477153 168.447715,24 169,24 C169.552285,24 170,24.4477153 170,25 L170,26 L174,26 L174,25 C174,24.4477153 174.447715,24 175,24 C175.552285,24 176,24.4477153 176,25 L176,26 L177.993,26 C179.098254,26.0010892 179.995049,26.8947561 180,28 L180,38 C180.000003,38.531648 179.788329,39.0414196 179.411741,39.4166942 C179.035153,39.7919688 178.524645,40.0018608 177.993,40 L177.993,40 Z M178,28 L177.993,28 L176,28 L176,29 C176,29.5522847 175.552285,30 175,30 C174.447715,30 174,29.5522847 174,29 L174,28 L170,28 L170,29 C170,29.5522847 169.552285,30 169,30 C168.447715,30 168,29.5522847 168,29 L168,28 L166.007,28 C166.00479,27.998925 166.00221,27.998925 166,28 L166,38 L166.007,38 L177.993,38 C177.99521,38.001075 177.99779,38.001075 178,38 L178,28 L178,28 Z M175,36 C174.447715,36 174,35.5522847 174,35 C174,34.4477153 174.447715,34 175,34 C175.552285,34 176,34.4477153 176,35 C176,35.5522847 175.552285,36 175,36 L175,36 Z M175,33 C174.447715,33 174,32.5522847 174,32 C174,31.4477153 174.447715,31 175,31 C175.552285,31 176,31.4477153 176,32 C176,32.5522847 175.552285,33 175,33 L175,33 Z M172,36 C171.447715,36 171,35.5522847 171,35 C171,34.4477153 171.447715,34 172,34 C172.552285,34 173,34.4477153 173,35 C173,35.5522847 172.552285,36 172,36 L172,36 Z M172,33 C171.447715,33 171,32.5522847 171,32 C171,31.4477153 171.447715,31 172,31 C172.552285,31 173,31.4477153 173,32 C173,32.5522847 172.552285,33 172,33 L172,33 Z M169,36 C168.447715,36 168,35.5522847 168,35 C168,34.4477153 168.447715,34 169,34 C169.552285,34 170,34.4477153 170,35 C170,35.5522847 169.552285,36 169,36 L169,36 Z M169,33 C168.447715,33 168,32.5522847 168,32 C168,31.4477153 168.447715,31 169,31 C169.552285,31 170,31.4477153 170,32 C170,32.5522847 169.552285,33 169,33 L169,33 Z'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    trashcan: (
      <svg width='15px' height='18px' viewBox='0 0 15 18'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-1272.000000, -1013.000000)' fill={colors[color]}>
            <g transform='translate(1272.000000, 1013.000000)'>
              <rect x='0' y='3' width='15' height='2' />
              <rect x='2' y='16' width='11' height='2' />
              <rect x='2' y='5' width='2' height='12' />
              <rect x='11' y='5' width='2' height='12' />
              <rect x='4' y='0' width='7' height='2' />
              <path d='M8.8890873,10.4748737 L9.94974747,11.5355339 L8.53553391,12.9497475 L7.47487373,11.8890873 L6.41421356,12.9497475 L5,11.5355339 L6.06066017,10.4748737 L5,9.41421356 L6.41421356,8 L7.47487373,9.06066017 L8.53553391,8 L9.94974747,9.41421356 L8.8890873,10.4748737 Z' />
            </g>
          </g>
        </g>
      </svg>
    ),

    x: (
      <svg width='14px' height='14px' viewBox='0 0 14 14'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='square'>
          <g transform='translate(-1294.000000, -1073.000000)' stroke={colors[color]} strokeWidth='2'>
            <g transform='translate(1300.899495, 1079.899495) rotate(45.000000) translate(-1300.899495, -1079.899495) translate(1293.899495, 1072.899495)'>
              <path d='M7,0 L7,14' />
              <path d='M14,7 L0,7' />
            </g>
          </g>
        </g>
      </svg>
    )
  }

  return icons[icon]
}

class SvgIcon extends PureComponent<Props> {
  static defaultProps = {
    color: 'default'
  }

  render () {
    const { icon, color } = this.props
    return getIcon({ icon, color }) || null
  }
}

export default SvgIcon
