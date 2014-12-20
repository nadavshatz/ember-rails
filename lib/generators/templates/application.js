//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
<%- if engine_extension == 'js.es6' -%>
//= require ember-rails/application
//
//= require ./<%= application_name.underscore %>
//= require_self

require('<%= application_name.underscore %>');
<%- else -%>
//= require_self
//= require ./<%= application_name.underscore %>

// for more details see: http://emberjs.com/guides/application/
<%= application_name.camelize %> = Ember.Application.create();
<%- end -%>
