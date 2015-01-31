/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
define(['backbone',
        'bootstrap',
        'text!templates/home.html'],
    function(Backbone, Bootstrap, Template) {

        return Backbone.View.extend({
            initialize : function() {

            },
            template : _.template(Template),

            render : function() {

                this.$el.html(this.template());

                return this;
            }
        });
    });