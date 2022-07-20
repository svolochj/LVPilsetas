sap.ui.define([
    'pilsetas/controller/BaseController',
    'sap/f/library',
    'sap/ui/model/json/JSONModel'
], function(BaseController, fioriLibrary, JSONModel) {
    'use strict';
    
    return BaseController.extend("pilsetas.controller.Detail",{

        onInit: function() { },

        onAfterRendering: function () { },

        onCloseDetailsPage: function() {
            this.oView.getParent().getParent().setLayout(fioriLibrary.LayoutType.OneColumn);
        }

    })

});