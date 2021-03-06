'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.i18nReducer = exports.loadTranslations = exports.setLocale = exports.LOAD_TRANSLATIONS = exports.SET_LOCALE = exports.l = exports.localize = exports.t = exports.translate = exports.forceComponentsUpdate = exports.setLocaleGetter = exports.setTranslationsGetter = exports.Localize = exports.Translate = exports.I18n = undefined;

var _actions = require('./actions');

Object.defineProperty(exports, 'SET_LOCALE', {
    enumerable: true,
    get: function get() {
        return _actions.SET_LOCALE;
    }
});
Object.defineProperty(exports, 'LOAD_TRANSLATIONS', {
    enumerable: true,
    get: function get() {
        return _actions.LOAD_TRANSLATIONS;
    }
});
Object.defineProperty(exports, 'setLocale', {
    enumerable: true,
    get: function get() {
        return _actions.setLocale;
    }
});
Object.defineProperty(exports, 'loadTranslations', {
    enumerable: true,
    get: function get() {
        return _actions.loadTranslations;
    }
});

var _reducer = require('./reducer');

Object.defineProperty(exports, 'i18nReducer', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_reducer).default;
    }
});
exports.syncTranslationWithStore = syncTranslationWithStore;

var _reactI18nify = require('react-i18nify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.I18n = _reactI18nify.I18n;
exports.Translate = _reactI18nify.Translate;
exports.Localize = _reactI18nify.Localize;
exports.setTranslationsGetter = _reactI18nify.setTranslationsGetter;
exports.setLocaleGetter = _reactI18nify.setLocaleGetter;
exports.forceComponentsUpdate = _reactI18nify.forceComponentsUpdate;
exports.translate = _reactI18nify.translate;
exports.t = _reactI18nify.t;
exports.localize = _reactI18nify.localize;
exports.l = _reactI18nify.l;
function syncTranslationWithStore(store) {
    (0, _reactI18nify.setTranslationsGetter)(function () {
        return store.getState().i18n.translations || {};
    });
    (0, _reactI18nify.setLocaleGetter)(function () {
        return store.getState().i18n.locale || '';
    });
}