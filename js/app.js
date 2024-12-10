alert("bienvenido al conversor");

const morseDic = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "/": "-..-."
};

function textoAMorse(texto) {
    texto = texto.toUpperCase();
    let morse = [];

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (morseDic[char]) {
            morse.push(morseDic[char]);
        } else {
            return `Error: El carácter '${char}' no está soportado en el código Morse.`;
        }
    }

    return morse.join(' ');
}

function morseATexto(morse) {
    let texto = [];
    let morseArray = morse.split(' ');
    
    for (let i = 0; i < morseArray.length; i++) {
        let morseChar = morseArray[i];
        let found = false;
       
        for (let key in morseDic) {
            if (morseDic[key] === morseChar) {
                texto.push(key);
                found = true;
                break;
            }
        }
        
        if (!found) {
            return `Error: El código Morse '${morseChar}' no está soportado.`;
        }
    }

    return texto.join('');
}

function interfazUsuario() {
    let opcion = prompt("Seleccione una opción:\n1. Texto a Morse\n2. Morse a Texto");

    if (opcion === '1') {
        let texto = prompt("Ingrese el texto para convertir a Morse:");
        let resultado = textoAMorse(texto);
        alert("Texto en Código Morse: " + resultado);
    } else if (opcion === '2') {
        let morse = prompt("Ingrese el código Morse para convertir a texto:");
        let resultado = morseATexto(morse);
        alert("Texto original: " + resultado);
    } else {
        alert("Opción no válida. Intente de nuevo.");
    }
}

// Test Morse to Text
interfazUsuario()
