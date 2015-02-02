/**
 * Created by Janne on 2.2.2015.
 */
"use strict";
define(['backbone',
        'bootstrap',
        'events',
        'text!templates/feelings.html'],
    function(Backbone, Bootstrap, Events, Template) {

        return Backbone.View.extend({
            initialize : function() {
                console.log("Feelings initialized");
                var self = this;

            },
            template : _.template(Template),

            render : function() {
                console.log("Feelings render() here!");
                this.$el.html(this.template({ title : "Feelings-page"}));

                return this;
            }
        });
    });