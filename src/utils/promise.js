import es6Promise from 'es6-promise';

export default window.Promise === 'undefined' ? es6Promise.Promise : window.Promise;
