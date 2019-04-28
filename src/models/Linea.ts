import { Estacion } from './Estacion';

export interface Linea{
    _id: string;
    nombre: string;
    fecha: string;
    estacion: Estacion[];
}