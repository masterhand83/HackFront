export class Estacion{
    _nombre: string;
    _personas: number;
    constructor(nombre: string, personas: number){
        this._nombre = nombre;
        this._personas = personas;
    }

    get personas(){
        return this._personas;
    }
    get nombre(){
        return this._nombre;
    }
}