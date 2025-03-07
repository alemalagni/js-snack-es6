// Array
const squadra = [
    // 1
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 2
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 3
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 4
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 5
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 6
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 7
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 8
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 9
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 10
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    // 11
    {
        'nome' : "",
        'puntiFatti' : 0,
        'falliSubiti' : 0
    }
];

// Script
for ( let i = 0; i < 11; i++ ) {
    squadra[i].nome = `Giocatore ${i + 1}`;
    squadra[i].puntiFatti = parseInt(Math.random() * 20);
    squadra[i].falliSubiti = parseInt(Math.random() * 20);
};

const nomiFalli = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

for ( let i = 0; i < 11; i++ ) {
    nomiFalli[i][0] = squadra[i].nome;
    nomiFalli[i][1] = squadra[i].falliSubiti;
}
console.log(nomiFalli);