/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
define(['backbone',
        'events',
        'views/home',
        'views/feelings'],
    function (Backbone, Events, HomeView, FeelingsView) {

        return Backbone.Router.extend({
            routes: {
                "": "home",
                "feelings" : "feelings"
            },
            initialize: function() {
                var self = this;
                //this.headerView = new HeaderView();
                //this.headerView.render();
                //this.footerView = new FooterView();
                //this.footerView.render();

                // Listener for navigation events on all views
                Events.on('router:navigate', function(params) {
                    console.log("Navigate command received. params:", params, "params.url:", params.url);
                    self.navigate(params.url, { trigger : true});
                });

                this.currentView = null;

            },
            home: function() {
                if(!this.homeView) {
                    this.homeView = new HomeView();
                }
                $('#content').html(this.homeView.render().el);
            },
            feelings : function() {
                console.log("Feelings!");
                if(!this.feelingsView) {
                    this.feelingsView = new FeelingsView();
                }
                $('#content').html(this.feelingsView.render().el);
            }
        });
    });