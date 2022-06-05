sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    
    return Controller.extend("pilsetas.controller.App",{
        onInit: function() {
        },

        onAfterHTMLRendering: function () {

            const mapOptions = {
                center:                     new google.maps.LatLng(57.15492695727807,23.370664978027307),
                zoom:                       9,
                zoomControl:                true,
                zoomControlOptions:         {style: google.maps.ZoomControlStyle.DEFAULT},
                disableDoubleClickZoom:     true,
                mapTypeControl:             true,
                mapTypeControlOptions:      {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR},
                scaleControl:               false,
                scrollwheel:                true,
                panControl:                 false,
                streetViewControl:          true,
                draggable :                 true,
                overviewMapControl:         true,
                overviewMapControlOptions:  {opened: false},
                mapTypeId:                  google.maps.MapTypeId.ROADMAP,
            };
            
            const mapElement = document.getElementById("map");
            const map = new google.maps.Map(mapElement, mapOptions);
        }
    })

});