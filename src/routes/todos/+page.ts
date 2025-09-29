export async function load({data}){
    return{
        todos :[
            "from client",
            ...data.todos
        ]
    }
}