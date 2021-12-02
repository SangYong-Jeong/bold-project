export * from 'styled-components'
export { default } from 'styled-components'
export * from './styled-components'

export const font = {
  kr: `'Noto Sans KR'`,
  en: `'Jost'`,
  serif: 'sans-serif',
}

export const color = {}

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
}

export const media = {
  xl: ` (max-width: ${size.xl})`,
  lg: ` (max-width: ${size.lg})`,
  md: ` (max-width: ${size.md})`,
  sm: ` (max-width: ${size.sm})`,
  xs: ` (max-width: ${size.xs})`,
}
