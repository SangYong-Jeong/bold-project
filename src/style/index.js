export * from 'styled-components';
export { default } from 'styled-components';
export * from './styled-components';

export const font = {
  kr: `'Noto Sans KR'`,
  en: `'Jost'`,
  serif: 'sans-serif',
};

export const color = {
  black: '#000000',
  white: '#FEFEFE',
  yellow: '#FDEE30',
  blue: '#3778C2',
  grey: '#646C79',
  lightGrey: '##E8EAE3',
  orange: '#FB9039',
  red: '#EF0D50',
  pink: '#E5BACE',
  sky: '#E1F2F7',
  brown: '#DEB992',
  cyan: '#3FD2C7',
};

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xl: ` (max-width: ${size.xl})`,
  lg: ` (max-width: ${size.lg})`,
  md: ` (max-width: ${size.md})`,
  sm: ` (max-width: ${size.sm})`,
  xs: ` (max-width: ${size.xs})`,
};
