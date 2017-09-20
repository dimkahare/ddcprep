import {
    parseSvg
} from './ddcCore';

export default class DavinciDDC {
    constructor(svg, rules) {
        this.svg = svg;
        this.rules = rules;
    }

    getParsedSvg() {
        return parseSvg(this.svg);
    }
}
