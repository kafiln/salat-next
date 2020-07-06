/**
 * Retrieves all the classes (whose key doesn't start with _) for one element in the theme
 *
 * @param {*} element
 * @returns {String} All the classes in one string
 */
export const getClasses = element =>
  Object.keys(element)
    .filter(key => !key.startsWith('_'))
    .map(key => element[key])
    .join(' ');
