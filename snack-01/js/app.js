// Dichiarazione
const bici = [
    ["Bici 01", 7.1],
    ["Bici 02", 7.8],
    ["Bici 03", 7.3],
    ["Bici 04", 6.9],
    ["Bici 05", 7.4]
];

// Script
let minorPeso = bici[0][1];
for ( let i = 0; i < bici.length; i++) {
    if ( bici[i][1] < minorPeso ) {

        minorPeso = bici[i][1];
    };
};
console.log(minorPeso);