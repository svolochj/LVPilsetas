using {model} from '../db/schema';

@(path:'api/')
service pilsetas{
    entity pilsetas as projection on model.Pilsetas;
}