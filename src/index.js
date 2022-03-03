import {
    I18n,
    Translate,
    Localize,
    setTranslationsGetter,
    setLocaleGetter,
    forceComponentsUpdate,
    translate,
    t,
    localize,
    l,
} from 'react-i18nify';

export {
    I18n,
    Translate,
    Localize,
    setTranslationsGetter,
    setLocaleGetter,
    forceComponentsUpdate,
    translate,
    t,
    localize,
    l,
};

export {
    SET_LOCALE,
    LOAD_TRANSLATIONS,
    setLocale,
    loadTranslations,
} from './actions';

export { default as i18nReducer } from './reducer';

export function syncTranslationWithStore(store) {
  setTranslationsGetter(() => store.getState().i18n.translations || {});
  setLocaleGetter(() => store.getState().i18n.locale || '');
}
