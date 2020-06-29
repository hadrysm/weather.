const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

const colors = {
  primary: '#7B0BEB',
  secondary: '#8650FA',
  white: '#FFFFFF',
  black: '#000000',
  dark100: '#2F2E41',
  dark200: '#3F3D56',
};

export const theme = {
  ...colors,

  font: {
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      xxs: '1rem',
      xs: '1.3rem',
      s: '1.4rem',
      m: '1.6rem',
      l: '1.8rem',
      xl: '1.9rem',
      xxl: '2.2rem',
    },
  },

  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
  },

  mq: {
    mobile: `(min-width: ${breakpoints.phone}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
    huge: `(min-width: ${breakpoints.huge}px)`,
  },

  layout: {
    maxContainerWidth: '1920px',
  },
};
