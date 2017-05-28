import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import jssCompose from 'jss-compose';

export const jss = createJss();
jss.use(jssCompose());

export const injectSheet = createInjectSheet(jss);
