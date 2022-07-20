namespace  model;

entity Pilsetas{
    
    key name:           String(73);

    name_lv:            String(73);

    admin_unit:         String(200);    

    coord:              coordinates;

    status_republic:    String(20);
    status_from:        String(23);

    gerbURL:            String(2000);

    population:         Integer;
}

type  coordinates: {
    Lat: Decimal;
    Long: Decimal;
};
