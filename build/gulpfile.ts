import { series, parallel } from 'gulp';
import { withTashName } from './utils';
import clean from './clean';

export default series(
    withTashName('clean', clean)
);
