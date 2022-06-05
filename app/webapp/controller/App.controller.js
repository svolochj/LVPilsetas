sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    
    return Controller.extend("pilsetas.controller.App",{
        onInit: function() {
        },

        onAfterHTMLRendering: function () {
            console.log("map rendered");
            const mapElement = document.getElementById("map");
            const map = new google.maps.Map(mapElement, {
                zoom: 4,
                center: { lat: -25.344, lng: 131.031 }
              });
        }
    })

});