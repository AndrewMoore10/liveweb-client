import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boolean-status-red-green', 'Integration | Component | boolean status red green', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{boolean-status-red-green}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#boolean-status-red-green}}
      template block text
    {{/boolean-status-red-green}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
