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
            initialize : function(params) {
                console.log("Feelings initialized");
                var self = this;
                this.isCurrentView = false;
                this.dataManager = params.dataManager;

                this.childViews = [];

                // Render
                this.render();
            },
            template : _.template(Template),
            events : {
                'click #trakme-feelings-btn-ok' : 'saveFeelings',
                'click #trakme-feelings-btn-normal' : 'saveFeelings',
                'click #trakme-feelings-btn-bad' : 'saveFeelings'
            },
            saveFeelings : function(event) {
                var self = this;
                // Read the comments (if any)
                var feelingsComments = $('#trakme-feelings-comment').val();

                // Read the clicked feelings value
                var feelingsValue = 0;

                var $target = this.$(event.currentTarget);
                if ($target.attr('id') === 'trakme-feelings-btn-ok') {
                    feelingsValue = 3;
                }
                else if ($target.attr('id') === 'trakme-feelings-btn-normal') {
                    feelingsValue = 2;
                }
                else if ($target.attr('id') === 'trakme-feelings-btn-bad') {
                    feelingsValue = 1;
                }

                // Now, save all this
                var feelingsJson = {
                    feelings : feelingsValue,
                    comments : feelingsComments
                };
                var strObj = JSON.stringify(feelingsJson);

                var url = (this.dataManager.isDev ? this.dataManager.devRoute : this.dataManager.prodRoute) + '/api/1/feelings/';


                $.ajax({
                    url : url,
                    type : 'POST',
                    data : strObj,
                    contentType : 'application/json'
                }).success(function(data){
                    console.log(data);
                    // Do stuff
                    console.log("Update ok!");
                }).error(function() {
                    alert("Server error!");
                });

            },

            getFeelingsData : function() {
                var self = this;
                var url = (this.dataManager.isDev ? this.dataManager.devRoute : this.dataManager.prodRoute) + '/api/1/feelings/' + "id";
                $.get(url).success(function(data) {

                }).error(function() {
                    alert("No connection to server!");
                }).always(function() {
                });
            },
            render : function() {
                var self = this;
                console.log("Feelings render() here!");
                this.$el.html(this.template({ title : "Feelings-page"}));
                this.$el.hide();
                $('#main-container').append(this.el);

                // Render childs (if any)
                _.forEach(this.childViews, function(child) {
                    child.render();
                });

                return this;
            },
            close : function() {
                this.remove();
            }
        });
    });