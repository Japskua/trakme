/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
define(['backbone',
        'views/home'],
    function (Backbone, HomeView) {

        return Backbone.Router.extend({
            routes: {
                "": "home"
            },
            initialize: function() {
                //this.headerView = new HeaderView();
                //this.headerView.render();
                //this.footerView = new FooterView();
                //this.footerView.render();

            },
            home: function() {
                if(!this.homeView) {
                    this.homeView = new HomeView();
                }
                $('#my-content').html(this.homeView.render().el);
            }
        });
    });