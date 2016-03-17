import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polymorphic-select', 'Integration | Component | polymorphic select', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{polymorphic-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#polymorphic-select}}
      template block text
    {{/polymorphic-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
