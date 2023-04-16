import { Sexo } from "../models/Sexo";

export class sexoRepository {

    listSexo:Sexo[];

    constructor(){
        this.listSexo = [];
        this.CargarData(localStorage.getItem("listSexo")!);
    }

    private CargarData(data:string) 
    {
       const list = JSON.parse(data);
       if(list === null){
          this.listSexo = [];
       }else if(list.length > 0){
          this.listSexo = [...list];
       }else{
         this.listSexo = [];
       }
    }

    public GetAll():Sexo[] {
       return this.listSexo;
    }

    public Add(sexo:Sexo): Sexo[]
    {
        if(this.listSexo.length === 0)
        {
            sexo.sexoId = 1;
            this.listSexo.push(sexo);
            localStorage.setItem("listSexo",JSON.stringify(this.listSexo));
        }else{
            const item =  this.listSexo.at(-1);
            const id = item?.sexoId === undefined ? 1 : item?.sexoId! + 1;
            sexo.sexoId = id;
            this.listSexo.push(sexo);
            localStorage.setItem("listSexo", JSON.stringify(this.listSexo));
        }
        return this.listSexo;
    }

    public GetById(id:number):Sexo
    {
        return this.listSexo.filter(x => x.sexoId === id)[0];
    }

    public Update(sexo:Sexo):Sexo[] 
    {
        let item = this.listSexo.filter(x => x.sexoId === sexo.sexoId)[0];
        item.sexoId = sexo.sexoId;
        item.descripcion = sexo.descripcion;
       
        localStorage.setItem("listSexo", JSON.stringify(this.listSexo));
        return this.listSexo;
    }

    public Delete(id:number):Sexo[]{
        const estado = confirm("Esta seguro de eliminar este sexo");
        if(estado) {
          this.listSexo.splice(id,1);
          localStorage.setItem("listSexo", JSON.stringify(this.listSexo));
        }
        return this.listSexo;
    }

}