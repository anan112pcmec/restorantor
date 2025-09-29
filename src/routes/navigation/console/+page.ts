export interface Anjay{
    FungsiConsole(nama:string): void;
}



export function load(): any{

    const Fungsinih:Anjay ={
        FungsiConsole(nama) {
          console.log(nama)  
        },
    } 
    return{
        fungsinya: Fungsinih
    }
}