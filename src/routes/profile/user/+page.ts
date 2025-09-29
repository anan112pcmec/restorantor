interface dataPengguna {
    user: string;
    name: string;
    email: string;
    infolain?: string;
}

export function load():dataPengguna{
    return{
        user: "Faiz Hannan Hakim",
        name: "faiz anan kunn",
        email: "anancuk@gmail.com",
        infolain: "suka amakan ayam"
    }
}