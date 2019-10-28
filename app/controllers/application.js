import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import { VERSION } from '@ember/version';

export default Controller.extend({
  emberVersion: VERSION,

  columns: computed(function() {
    return A([
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' }
    ]);
  }),

  rows: computed(function() {
    return A(
      Array(10)
        .fill()
        .map((_, idx) => {
          return { A: `A ${idx}`, B: `B ${idx}`, C: `C ${idx}`, D: `D ${idx}` };
        })
    );
  })
});
