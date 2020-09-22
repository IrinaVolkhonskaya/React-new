import { SWITCH_THEME } from './actionTypes';

export const switchTheme = () => ({
  type: SWITCH_THEME,
  meta: {
    throttle: 1000,
  },
});
