import { Estacion } from './Estacion';

export interface Linea{
    id: string;
    name: string;
    stations: Estacion[];
}