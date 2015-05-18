/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
define(['backbone',
        'events',
        'data-manager',
        'views/home',
        'views/feelings',
        'views/account'],
    function (Backbone, Events, DataManager, HomeView, FeelingsView, AccountView) {

        return Backbone.Router.extend({
            routes: {
                "": "home",
                "feelings" : "feelings",
                "account" : "account"
            },
            initialize: function() {
                var self = this;
                //this.headerView = new HeaderView();
                //this.headerView.render();
                //this.footerView = new FooterView();
                //this.footerView.render();

                this.dataManager = new DataManager();

                this.accountView = new AccountView({ dataManager : this.dataManager});
                this.feelingsView = new FeelingsView({ dataManager : this.dataManager});

                // Listener for navigation events on all views
                Events.on('router:navigate', function(params) {
                    console.log("Navigate command received. params:", params, "params.url:", params.url);
                    self.navigate(params.url, { trigger : true});
                });

                this.currentView = null;

            },
            home: function() {
                $('#content').html(this.homeView.render().el);
            },
            feelings : function() {
                console.log("Feelings!");
                if(!this.feelingsView.isCurrentView) {
                    this.changeView(this.feelingsView);
                }
                //$('#content').html(this.feelingsView.render().el);
            },
            account : function() {
                console.log("Account View!");
                if(!this.accountView.isCurrentView) {
                    this.changeView(this.accountView);
                }
                $('#content').html(this.accountView.render().el);
            },
            changeView: function(nextView) {
                var self = this;
                //UI view switching logic
                //The current view does not exist
                if(this.currentView) {
                    this.currentView.$el.fadeOut(function() {
                        nextView.$el.fadeIn(function() {
                        });
                    });
                    this.currentView.isCurrentView = false;
                }else {
                    nextView.$el.fadeIn();
                }
                //Set as the new current view
                nextView.isCurrentView = true;
                this.currentView = nextView;
            }
        });
    });