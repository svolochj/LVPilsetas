sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
    'use strict';

    return Controller.extend("pilsetas.controller.BaseController", {
        onInit: function() {},

        getModel : function (sName) {
            return this.getView().getModel(sName);
        },


        setModel : function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        }
    })
});