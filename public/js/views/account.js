/**
 * Created by Janne on 8.3.2015.
 */
"use strict";
define(['backbone',
        'bootstrap',
        'events',
        'text!templates/account.html'],
    function(Backbone, Bootstrap, Events, Template) {

        return Backbone.View.extend({
            initialize : function() {
                console.log("Account initialized");
                var self = this;

            },
            template : _.template(Template),

            render : function() {
                console.log("Account render() here!");
                this.$el.html(this.template({ title : "Account-page"}));

                return this;
            }
        });
    });