// 1. Contando as letras dos números:
// • Se os números de 1 a 5 fossem escritos em palavras: um, dois, três, quatro, cinco, então teríamos utilizado
// 2 + 4 + 4 + 6 + 5 = 21 letras no total.
// • Se todos os números de 1 até 1000 fossem escritos em palavras, quantas letras nós teríamos utilizado?

// contador total
let fullCount = 0;

// contador auxiliar para unidades
let unitCount = 0;

// numeros que não se repetem
const uniques = [
  'dez',
  'onze',
  'doze',
  'treze',
  'quatorze',
  'quinze',
  'dezesseis',
  'dezessete',
  'dezoito',
  'dezenove',
  'cem',
  'mil',
];

// conto as letras dos "unicos"
uniques.forEach((aux) => (fullCount += aux.length));

const unit = [
  'um',
  'dois',
  'tres',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
];

const unitArray = [];
// conto e armazeno a quantidade de letras dos unitarios para usar nas dezenas
unit.forEach((aux) => {
  unitArray.push(aux.length);
  unitCount += aux.length;
});

// somo os unitarios ao total
fullCount += unitCount;

const dozens = [
  'vinte',
  'trinta',
  'quarenta',
  'cinquenta',
  'sessenta',
  'setenta',
  'oitenta',
  'noventa',
];

let dozenCount = 0;

const dozenArray = [];
// para cada dezena eu terei a dezena em si, mais dezena e `unitario`, logo
dozens.forEach((aux) => {
  unitArray.forEach((unitAux) => {
    dozenArray.push(aux.length + 1 + unitAux); // para usar nas centenas
    dozenCount += aux.length + 1 + unitAux;
  });

  // para usar em  cento e vinte, cento e trinta, ..., novecentos e noventa
  dozenArray.push(aux.length);

  // somo vinte, trinta, ..., noventa ao total
  fullCount += aux.length;
});

fullCount += dozenCount;

const hundreds = [
  'cento',
  'duzentos',
  'trezentos',
  'quatrocentos',
  'quinhentos',
  'seiscentos',
  'setecentos',
  'oitocentos',
  'novecentos',
];

hundredCount = 0;

// para cada centena eu terei a centena em si, mais dezena e unitario, logo
hundreds.forEach((aux) => {
  dozenArray.forEach((dozenAux) => {
    hundredCount += dozenAux + 1; // centena + e + dezena
  });
  if (aux !== 'cento') {
    fullCount += aux.length;
  }
});

fullCount += hundredCount;

console.log(`q1. quantidade de letras: ${fullCount}`);
