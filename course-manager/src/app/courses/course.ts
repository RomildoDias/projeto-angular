export class Course{
    id: number;
    nome: string;
    imagemUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releseDate: string;

    constructor(id:number, nome:string, imagemUrl:string, price: number,code: string,duration: number, rating: number, relesesdate: string ){
        this.id = id,
        this.nome = nome;
        this.imagemUrl = imagemUrl,
        this.price = price;
        this.code = code,
        this.duration = duration;
        this.rating = rating,
        this.releseDate = relesesdate
    }

}