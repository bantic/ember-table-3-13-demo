import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { VERSION } from '@ember/version';

function charForIndex(idx) {
  let charCodeStart = 'a'.charCodeAt(0);
  return String.fromCharCode(charCodeStart + idx);
}

/**
 * Returns an array of columns with name, valuePath properties
 * matching the character of the alphabet at that index, e.g.:
 * [
 *   {name: 'a', vauePath: 'a'},
 *   {name: 'b', vauePath: 'b'},
 *   ...
 * ]
 */
function createColumns(count) {
  count = Math.min(count, 26);

  return new Array(count).fill().map((_, idx) => {
    let char = charForIndex(idx);
    return { name: char, valuePath: char };
  });
}

/**
 * Returns an array of rows with alphabetic keys matching the number of columns,
 * with values that include the col name and row index, e.g.:
 * [
 *   {a: 'a: 0', b: 'b: 0', ...},
 *   {a: 'a: 1', b: 'b: 1', ...},
 * ]
 */
function createRows(count, colCount) {
  count = Math.min(count, 26);

  return new Array(count).fill().map((_, rowIdx) => {
    return new Array(colCount).fill().reduce((acc, _, colIdx) => {
      let char = charForIndex(colIdx);
      acc[char] = `${char}: ${rowIdx}`;
      return acc;
    }, {});
  });
}

export default Controller.extend({
  emberVersion: VERSION,

  columns: computed(function() {
    return createColumns(5);
  }),

  rows: computed(function() {
    return createRows(20, 5);
  })
});
