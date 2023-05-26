sap.ui.define([
    'pilsetas/controller/BaseController',
    'sap/f/library'
], function(BaseController, fioriLibrary) {
    'use strict';
    
    return BaseController.extend("pilsetas.controller.App",{

        oMap         : {},
        oFcl        : {},
        aPilsetas   : [],  
        
        onInit: function() {
            this._readPilsetas();
        },

        onAfterHTMLRendering: function () {

            this.oFCL = this.getView().getParent().getParent();

            this.initMap();
        },

        initMap: function () {
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
            this.oMap = new google.maps.Map(mapElement, mapOptions);

            this._renderPilsetas(this.aPilsetas);
        },

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        _readPilsetas: function () {
            $.get({url : "/api/pilsetas",success : (data) => { this.aPilsetas = data.value}, error : (error) => { /*Error handling*/ }});
        },

        _renderPilsetas: function (data) {
            data.forEach(pilseta => {
                var marker = new google.maps.Marker({
                    position: 	new google.maps.LatLng(pilseta.coord_Lat, pilseta.coord_Long),
                    map: 		this.oMap,
                    title: 		pilseta.name,
                    icon:       pilseta.gerbURL,

                    optimized: false                    
                });

                marker.addListener("click", () => { this.oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsBeginExpanded); this.oFCL.getCurrentMidColumnPage().bindElement({path : "/pilsetas('" + pilseta.name + "')", model:'pilsetasModel'});});
            });
        }
    })

});