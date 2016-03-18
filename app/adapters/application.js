import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  host: 'http://10.40.10.45:3000',
  shouldReloadAll() { return false; },
  shouldBackgroundReloadRecord() { return true; },
  buildURL: function(modelName, id, snapshot, requestType, query) {
    if(requestType === 'queryRecord'){
        var url = this._buildURL(modelName, query.id);
        delete query.id;
        return url;
    } else {
        return this._super(modelName, id, snapshot, requestType, query);
    }
}
});
