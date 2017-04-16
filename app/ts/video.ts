/**
 * Created by acer on 4/12/2017.
 */
export class Video{

    id: number;
    name : string ;
    url : string ;
    desc : string ;

   constructor(id: number,name : string ,url : string ,desc : string ) {
       this.id=id;
       this.name=name;
       this.url=url;
       this.desc=desc;
   }
}