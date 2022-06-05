namespace  model;

entity Pilsetas{
    name: String(73);

    coord: coordinates;
}

type  coordinates: {
    Lat: Decimal;
    Long: Decimal;
};
