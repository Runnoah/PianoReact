
//Creamos la carpeta "globales" y haces el archivo constantes, esto lo
//hacemos por si queremos añadir alguna nueva y poder refactorizar un poco
//dentro de nuestra clase piano
const NOTES = [
    'd', 'rb', 'r', 'mb',
    'm', 'f', 'sb', 's',
    'lb', 'l', 'ib', 'i'
];

// MAPPING de que teclas de nuestro teclado será cada una

const KEY_TO_NOTE = {
    z: 'd',
    s: 'rb',
    x: 'r',
    d: 'mb',
    c: 'm',
    v: 'f',
    g: 'sb',
    b: 's',
    h: 'lb',
    n: 'l',
    j: 'ib',
    m: 'i',
};

// Otro mapping pero del reves

const NOTE_TO_KEY = {
    d : 'z',
    rb: 's',
    r: 'x',
    mb: 'd',
    m: 'c',
    f: 'v',
    sb: 'g',
    s: 'b',
    lb: 'h',
    l: 'n',
    ib: 'j',
    i: 'm',
};

export { NOTES, KEY_TO_NOTE, NOTE_TO_KEY };