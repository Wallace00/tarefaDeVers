function chapeuSeletor (nome, qualidade){
    switch(qualidade.toLowerCase()){
        case "coragem":
            return nome + " é da casa Grifinória!" ;
        case "orgulhoso":
            return nome + " é da casa Sonserina!";
        case "inteligente":
            return nome + " é da casa Corvinal!";
        case "paciente":
            return nome + " é da casa Lufa-Lufa!";
        default:
            console.log("Qualidade não-valida");
        break;
    }
}
console.log(chapeuSeletor("R.A Black", "Inteligente"));
