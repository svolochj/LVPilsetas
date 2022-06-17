sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    
    return Controller.extend("pilsetas.controller.App",{

        map : {},

        onInit: function() {
            this._readPilsetas();
        },

        onAfterHTMLRendering: function () {

            const mapOptions = {
                center:                     new google.maps.LatLng(56.9,24.7),
                zoom:                       9,
                zoomControl:                true,
                zoomControlOptions:         {style: google.maps.ZoomControlStyle.DEFAULT},
                disableDoubleClickZoom:     true,
                mapTypeControl:             true,
                mapTypeControlOptions:      {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR},
                scaleControl:               true,
                scrollwheel:                true,
                panControl:                 false,
                streetViewControl:          true,
                draggable :                 true,
                overviewMapControl:         true,
                overviewMapControlOptions:  {opened: false},
                mapTypeId:                  google.maps.MapTypeId.ROADMAP,
            };
            
            const mapElement = document.getElementById("map");
            this.map = new google.maps.Map(mapElement, mapOptions);
        },

        _readPilsetas: function () {
            $.get({url : "/api/pilsetas",success : (data) => {this._renderPilsetas(data)}, error : (error) => { /*Error handling*/ }});
        },

        _renderPilsetas: function (data) {
            data.value.forEach(pilseta => {
                var marker = new google.maps.Marker({
                    position: 	new google.maps.LatLng(pilseta.coord_Lat, pilseta.coord_Long),
                    map: 		this.map,
                    title: 		pilseta.name
                    // icon:       pilseta.gerbURL
                });
            });
        }

    })

});