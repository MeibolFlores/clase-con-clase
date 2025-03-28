
class Album{
    title:string
    songs:string[]
    constructor(title, songs:string[]){
        this.title = title;
        this.songs = songs;
    }
     
}

class Banda{
    members: string[];
    albums: any[];
    constructor(members:string[], albums: Album[]){
        this.members = members;
        this.albums = albums;

}

}

function main(){
const unAlbum = new Album("Album Mei",[]);// se puede agregar el album a traves de una estancia o tambien puede ser de otra manera

//const UnAlbum = {
//title: "album de mei",
//songs: [soul],
//};  siempre cumpla con las especificaciones de la class Album
//tienen la misma forma pero son obj, no son instancias de algo y es igual de valido

    const unaBanda = new Banda(["Mei"], [unAlbum,unAlbum]);
   // console.log(unaBanda.members);
    console.log(unaBanda.albums);

}

main()