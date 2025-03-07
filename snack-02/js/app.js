// Array
const squadra = [
    // 1
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
];

// Script
for ( let i = 0; i < 11; i++) {
    squadra[i].nome = "Giocatore " + i;
    squadra[i].puntiFatti = parseInt(Math.random() * 20),
    squadra[i].falliSubiti = parseInt(Math.random() * 20)
};
