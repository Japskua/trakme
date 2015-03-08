/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
define(['jquery',
        'backbone',
        'bootstrap',
        'events',
        'text!templates/home.html'],
    function($, Backbone, Bootstrap, Events, Template) {

        return Backbone.View.extend({
            initialize : function() {
                var self = this;
            },
            template : _.template(Template),

            render : function() {

                this.$el.html(this.template({ title : "tester-title"}));

                return this;
            },
            events : {
                'click #trakme-go-feelings' : function() {
                    console.log("Click!");
                    Events.trigger('router:navigate', {url : '#feelings'});
                },
                'click #trakme-modal' : function() {
                    console.log("Modal clicked!");
                    $('#modal1').openModal();
                }
            },
            close : function() {
                this.remove();
            }
        });
    });