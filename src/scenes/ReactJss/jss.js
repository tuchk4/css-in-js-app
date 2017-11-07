import { create as createJss } from 'jss';
// import { create as createInjectSheet } from 'react-jss';
import preset from 'jss-preset-default';

export const jss = createJss(preset());
// export const injectSheet = createInjectSheet(jss);
