const { LOCALES } = require('.');

/**
 *
 * Set the direction for the current language
 * @param {*} lang the current language
 * @returns  {Boolean} currently, true for Arabic, false otherwise
 */
export const isRTL = (lang) => lang === LOCALES.ARABIC.id;
