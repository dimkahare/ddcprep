import $ from 'jquery';
import Promise from './utils/promise';

export const parseSvg = (svgString) => {
    return new Promise((resolve) => {
        resolve($(svgString));
    });
};
