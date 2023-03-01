import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    // ************************************ STOP USING THESE
    // Main Colors

    // Oranges
    light_orange: '#F4815B',
    orange_40_50: 'rgba(249, 157, 120, 0.5)',
    orange_40_25: 'rgba(249, 157, 120, 0.25)',
    // Blues
    night_sky: '#2B3B41',
    blue_steel: '#6D7F91',
    light_blue: '#DBE9F2',
    lighter_blue: '#F5F8FB',
    // Purples
    dark_purple: '#493E5E',
    light_purple: '#665C80',
    bright_purple: '#7D728E',
    // Grays
    grey_5: '#979797',
    grey_4: '#E1E1E1',
    white: '#FFFFFF',
    black: '000000',
    // ************************************ END: STOP USING THESE

    // ************************************ USE THESE INSTEAD
    // ORANGE
    orange_90: '#553326',
    orange_80: '#A12700',
    orange_70: '#D23F0E',
    orange_60: '#E05320',
    orange_50: '#FF6C37',
    orange_40: '#FF8E64',
    orange_30: '#FFB091',
    orange_20: '#FFD1BE',
    orange_10: '#FFF1EB',
    // GREY
    grey_90: '#212121',
    grey_85: '#262626',
    grey_80: '#2B2B2B',
    grey_70: '#303030',
    grey_60: '#3B3B3B',
    grey_50: '#707070',
    grey_40: '#A6A6A6',
    grey_30: '#E6E6E6',
    grey_20: '#EDEDED',
    grey_10: '#F2F2F2',
    grey_05: '#F9F9F9',
    grey_00: '#FFFFFF',
    // BLUE
    blue_90: '#002D70',
    blue_80: '#00439D',
    blue_70: '#0053B8',
    blue_60: '#0265D2',
    blue_50: '#097BED',
    blue_40: '#3E92F2',
    blue_30: '#74AEF6',
    blue_20: '#ADCDFB',
    blue_10: '#E7F0FF',
    // YELLOW
    yellow_80: '#523A03',
    yellow_90: '#886000',
    yellow_70: '#AD7A03',
    yellow_60: '#DE9C00',
    yellow_50: '#FFB400',
    yellow_40: '#FFCF3F',
    yellow_30: '#FFE47E',
    yellow_20: '#FFF4BE',
    yellow_10: '#FFF9E0',
    // RED
    red_error: '#b70700',

    // BACKGROUNDS
    blue_95: '#01213C',
    yellow_05: '#FFFEF9',

    // Alias Colors
    content_color_primary: `${(props) => props.theme.colors.grey_90};`,
    content_color_secondary: `${(props) => props.theme.colors.grey_70}`,
    content_color_tertiary: `${(props) => props.theme.colors.grey_50}`
  },

  forms: {
    border: '#969696',
    text: '#6B6B6B'
  },
  
  shadows: {
    // mostly used on Cards
    card_shadow: '0 8px 16px -4px rgba(0, 0, 0, 0.08)',
    card_shadow_2: '0 8px 16px -4px rgba(0, 0, 0, 0.08)',
    form_shadow: '0px 5px 8px rgba(28, 39, 43, 0.05)',
    form_field_focus: '0 0 0 0.2rem rgba(0, 123, 255, .25)',
    screenshot_shadow: '0px 0px 8px 5px rgba(0,0,0,0.05)'
  },
  transitions: {
    all: 'all 0.2s ease-in-out'
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '20px'
  }
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node
};

Theme.defaultProps = {
  children: null
};
export default Theme;
