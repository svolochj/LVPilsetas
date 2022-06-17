namespace  model;

entity Pilsetas{
    name: String(73);

    admin_unit: String(200);    

    coord: coordinates;

    status_republic: String(20);

    gerbURL: String(2000);
}

type  coordinates: {
    Lat: Decimal;
    Long: Decimal;
};
