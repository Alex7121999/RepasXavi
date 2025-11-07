"use strict";
//Crida de funcions
mostrarMenu();

//Declaració de funcioncs
function mostrarMenu() {
    let opcio;
    do {
        /* 
        console.log("===== MENÚ PRINCIPAL =====");
        console.log("1. Dia de Partit");
        console.log("2. Comprovar Rookies");
        console.log("3. Ordenar rookies");
        console.log("4. Mostrar el titular");
        console.log("0. Sortir");
        console.log("==========================");
        */
        opcio = prompt("Introdueix una opció:\n1. Dia de Partit\n2. Comprovar Rookies\n3. Ordenar rookies\n4. Mostrar el titular\n5. Llençar moneda\n6. LLençar dau 6 cares\n7. Comprovar NIF\n8. Espais en Blanc\n9. Comprovar Matricula\n10. Convertir Segons\n11. Demanar dia\n0. Sortir"); /* \n fa un punt i apart com un <br> */

        switch (opcio) { //Quan hi hagi un menu o s'hagi de tractar mes d'una opció es millor fer un switch case
            case "1":
                diaDePartit(); // Ctrl + click per anar a la funció
                break;
            case "2":
                comprovarRookies();
                break;
            case "3":
                ordenarRookies();
                break;
            case "4":
                mostrarTitular();
                break;
            case "5":
                llençarMoneda();
                break;
            case "6":
                llençarDau6Cares();
                break;
            case "7":
                comprovarNIF();
                break;
            case "8":
                espaisEnBlanc();
                break;
            case "9":
                comprovarMatricula();
                break;
            case "10":
                convertirSegons();
                break;
            case "11":
                demanarDia();
                break;
            case "0":
                alert("Sortint del programa...")
                return;
            default:
                alert("Opció incorrecte");
                break;
        }
    } while (opcio !== "0"); //Amb el do while no surt del programa fins que no es el cas 0
}

//TODO: Fer bucle do... while()

function diaDePartit() {
    let equip1 = prompt("Nom de l'equip 1");
    let equip2 = prompt("Nom de l'equip 2");
    let punts1 = parseInt(prompt("Marcador de l'equip 1"));
    let punts2 = parseInt(prompt("Marcador de l'equip 2"));
    if (isNaN(punts1) || isNaN(punts2)) { //Comprovar que es un numero enter
        alert("Algun dels valors no és un número");
    } else {
        let equipGuanyador = punts1 > punts2 ? equip1 : equip2; //Ternari, si es cumpleix la condició 1, equip 1 guanyador, si no es cumpleix equip 2 guanyador
        alert(equipGuanyador + " ha guanyat el partit");
    }
}

function comprovarRookies() {
    let minuts = parseInt(prompt("Minuts per partit"));
    let punts = parseInt(prompt("Punts per partit"));
    let assistencies = parseInt(prompt("Assistències per partit"));
    if (isNaN(minuts) || isNaN(punts) || isNaN(assistencies)) {
        alert("Algun dels valors no és un número");
    } else {
        if (minuts >= 5) {
            let punts = parseInt(prompt("Punts per partit"));
            let assistencies = parseInt(prompt("Assistències per partit"));
            let missatge = "Valoració del rookie:\n";
            if (punts > 10 && assistencies > 5) missatge += "Rookie estrella";
            else missatge += "Rookie promesa";
            alert(missatge);
        } else {
            alert("Aquest rookie no es valorarà");
        }
    }
}

function ordenarRookies() {
    let puntsR1 = parseInt(prompt("Punts rookie 1")); // 5 punts
    let puntsR2 = parseInt(prompt("Punts rookie 2")); // 7 punts
    let puntsR3 = parseInt(prompt("Punts rookie 3")); // 3 punts
    if (isNaN(puntsR1) || isNaN(puntsR2) || isNaN(puntsR3)) {
        alert("Algun dels valors no és un número");
    } else {
        if (puntsR1 >= puntsR2 && puntsR1 >= puntsR3) {
            if (puntsR2 >= puntsR3) alert(puntsR1 + " " + puntsR2 + " " + puntsR3);
            else alert(puntsR1 + " " + puntsR3 + " " + puntsR2);
        } else if (puntsR2 >= puntsR1 && puntsR2 >= puntsR3) {
            if (puntsR1 >= puntsR3) {
                alert(puntsR2 + " " + puntsR1 + " " + puntsR3);
            } else alert(puntsR2 + " " + puntsR3 + " " + puntsR1);

        } else { //aqui sabem que el rookie 3 te més punts >> (puntsR3 >= puntsR1 && puntsR3 >= puntsR2)
            if (puntsR1 >= puntsR2) alert(puntsR3 + " " + puntsR1 + " " + puntsR2);
            else //  puntsR2 > puntsR1 
                alert(puntsR3 + " " + puntsR2 + " " + puntsR1);
        }
    }
}

function mostrarTitular() {
    const NOTICIA = "En un partit sorprenent celebrat al Madison Square Garden, els Knicks es passegen davant els Bulls amb un recital ofensiu que va fer vibrar el públic";
    let primera = NOTICIA.indexOf("Knicks");
    let ultima = NOTICIA.indexOf("Bulls") + "Bulls".length; //Busca la paura Bulls, es coloca al principi i despres amb el lenght li dones els caracters corresponents perque es coloqui al final de la paraula
    alert(NOTICIA.substring(primera, ultima));
}

function llençarMoneda() {
    let cares = 0; // número total de cares
    let creus = 0; // número total de creus
    let moneda;    // resultat de llençar la moneda

    for (let i = 0; i < 100; i++) { // 100 tirades exactes
        moneda = Math.floor(Math.random() * 2); // 0 o 1
        if (moneda === 0) {
            cares++;
        } else {
            creus++;
        }
    }

    console.log(`Resultat de 100 tirades:`);
    console.log(`Cares: ${cares}`);
    console.log(`Creus: ${creus}`);
}


function llençarDau6Cares() {
    let c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0,
        c5 = 0,
        c6 = 0;
    let dau;

    for (let i = 0; i < 1000; ++i) {
        dau = Math.floor(Math.random() * 6);
        switch (dau) {
            case 0:
                ++c1;
                break;
            case 1:
                ++c2;
                break;
            case 2:
                ++c3;
                break;
            case 3:
                ++c4;
                break;
            case 4:
                ++c5;
                break;
            case 5:
                ++c6;
                break;
        }
    }
    alert("el numero 1 ha sortit " + c1 / 1000 + "%");
    alert("el numero 2 ha sortit " + c2 / 1000 + "%");
    alert("el numero 3 ha sortit " + c3 / 1000 + "%");
    alert("el numero 4 ha sortit " + c4 / 1000 + "%");
    alert("el numero 5 ha sortit " + c5 / 1000 + "%");
    alert("el numero 6 ha sortit " + c6 / 1000 + "%");
}

// Dau 6 cares amb WHILE
//    while (i<1000){ dau = Math.floor(Math.random() * 6);
//          switch (dau) {
//            case 0: ++c1; break;
//            case 1: ++c2; break;
//            case 2: ++c3; break;
//            case 3: ++c4; break;
//            case 4: ++c5; break;
//            case 5: ++c6; break;
//        }
//        i++;
//    }

function comprovarNIF() {
    let nif = prompt("intro el nif");
    let errorNIF = false;
    let missatge = "";

    if (esEstranger(nif)) missatge += "El Nif es estranger\n";
    if (formatCorrecte(nif)) missatge += "lletres i numeros no corresponen\n";
    if (vuitNumeros(nif)) missatge += "....\n";
    if (lletraCorrecta(nif)) missatge += "....\n";

    if (errorNIF) alert(missatge)
    else alert("NIF correcte!!!");

}

function esEstranger(nif) {
    let lletraInicial = nif.charAt(0);
    if (lletraInicial == 'X' || lletraInicial == 'Y' || lletraInicial == 'Z') {
        errorNIF = true;
        //missatge = "El Nif es estranger\n";
        //alert("és NIF estranger, per tant no el tractarem");        
    }
    return errorNIF;
}

function formatCorrecte(nif) {
    let lletraFinal = nif.charAt(8);
    if (nif.length != 9 || lletraFinal < 'A' || lletraFinal > 'Z') {
        //alert("error, lletres i numeros no corresponen!!!"); 
        //return;
        errorNIF = true;
        //missatge += "lletres i numeros no corresponen\n";
    }
    return errorNIF;
}

function vuitNumeros() {
    for (let i = 0; i < 8; ++i) {
        if (nif.charAt(i) < '0' || nif.charAt(i) > '9') {
            // alert("error: els 8 primers caracters no son numeros!!!");
            // return;
            errorNIF = true;
            break;
        }
    }
    //el break em deixa aqui i continua...!!!!
    if (errorNIF)
        missatge += "els 8 primers caracters no son numeros!!!\n";
}

function lletraCorrecta() {
    const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
    let num = parseInt(nif.substring(0, 8));
    let lletraCorrecta = LLETRES.charAt(num % 23);
    if (nif.charAt(8) != lletraCorrecta) {
        // alert("error!!! Lletra incorrecta. Havia de ser: " + lletraCorrecta);
        // return;
        errorNIF = true;
        missatge += "Lletra incorrecta. Hauria de ser: " + lletraCorrecta;
    }

}

function comprovarResultat() {
    let blanc = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i == blanc || j == blanc) {
                break;
            }
        }
    }

    //aqui es planta després de BREAK

    //aqui fariem diferents gestions amb el resultat
    //......

}

//aqui es planta després de RETURN


function comprovarMatricula() {
    // Demana a l'usuari que introdueixi la matrícula
    let matricula = prompt("Introdueix la matrícula (format 1234-ABC)");

    // Comprova si l'usuari ha deixat el camp buit 
    if (!matricula || matricula.length !== 8) {
        alert("La matrícula no és correcta");
        return;
    }

    // Comprova que el cinquè caràcter sigui un guió 
    if (matricula.charAt(4) !== '-') {
        alert("La matrícula no és correcta");
        return;
    }

    // Comprova que els 4 primers caràcters siguin dígits 
    for (let i = 0; i < 4; i++) {
        let c = matricula.charAt(i);
        if (c < '0' || c > '9') {
            alert("La matrícula no és correcta");
            return;
        }
    }

    // Comprova que els 3 últims caràcters siguin lletres majúscules 
    for (let i = 5; i < 8; i++) {
        let c = matricula.charAt(i);
        if (c < 'A' || c > 'Z') {
            alert("La matrícula no és correcta");
            return;
        }
    }

    alert("La matrícula és correcta");
}

//Solució Pere Exercici comprovar matricula
function comprovarMatriculaPere() {
    let s = "1234-ABC";
    let ndx = s.indexOf("-");

    //comprovar el format bàsic
    if (s.length() != 8 || ndx < 0 || ndx != 4) {
        alert("Error en la matrícula");
        return;
    }

    //comprovar digits abans del guio
    let s1 = s.substring(0, ndx);
    for (let i = 0; i < s1.length(); ++i) {
        if (s1.charAt(i) < '0' || s1.charAt(i) > '9') {
            alert("Error en la matrícula");
            return;
        }
    }

    //comprovar digits despres del guio
    s1 = s.substring(ndx + 1);
    for (let i = 0; i < s1.length(); ++i) {
        if (s1.charAt(i) < 'A' || s1.charAt(i) > 'Z') {
            alert("Error en la matrícula");
            return;
        }
    }

    alert("Matrícula OK");
}

// CONVERTIR SEGONS
function convertirSegons() {
    let segons = introIntMinMax("Introdueix els segons: ", 0, 359999);
    let hms = formatarHMS(segons);
    mostrarHMS(segons, hms);
    // Les dues últimes línies es poden juntar en una:
    // mostrarHMS(segons, formatarHMS(segons));
}

// Introduir un número enter
function introInt(pregunta) {
    let valor = parseInt(prompt(pregunta));
    while (isNaN(valor)) {
        alert("Error: has d'introduir un número enter");
    }
    return valor;
}

// Introduir un número enter entre dos valors
function introIntMinMax(pregunta, min, max) {
    let valor;

    if (min > max) {
        let t = min;
        min = max;
        max = t;
    }

    valor = introInt(pregunta);
    while (valor < min || valor > max) {
        alert("Error: has d'introduir un número entre " + min + " i " + max);
        valor = introInt(pregunta);
    }
    return valor;
}

function formatarHMS(segonsTotals) {
    let minutsTotals;
    let segons, minuts, hores;

    segons = segonsTotals % 60;
    minutsTotals = Math.floor(segonsTotals / 60);
    minuts = minutsTotals % 60;
    hores = Math.floor(minutsTotals / 60);
    return dosDigits(hores) + ":" + dosDigits(minuts) + ":" + dosDigits(segons);
}

function dosDigits(n) {
    if (n < 10) return "0" + n;
    else return "" + n;
    // També es podria fer utilitzant l'operador ternari:
    // return n < 10 ? "0" + n : "" + n;
}

function mostrarHMS(segons, hms) {
    alert(segons + " segons equivalen a " + hms);
}

function demanarDia() {
    let entrada = prompt("Introdueix un número del 1 al 7:");
    let numero = parseInt(entrada);

    let resultat = diaSetmana(numero);
    alert(resultat);
}

function diaSetmanaAmbSwitch(dia) {
    let ds;
    switch (dia) {
        case 1:
            ds = "Dilluns";
            break;
        case 2:
            ds = "Dimarts";
            break;
        case 3:
            ds = "Dimecres";
            break;
        case 4:
            ds = "Dijous";
            break;
        case 5:
            ds = "Divendres";
            break;
        case 6:
            ds = "Dissabte";
            break;
        case 7:
            ds = "Diumenge";
            break;
        default:
            ds = "El dia ha d’estar entre 1 i 7";
    }
    return ds;
}

function diaSetmana(dia) {
    if (dia >= 1 && dia <= 7) {
        if (dia == 1) return "Dilluns";
        else if (dia == 2) return "Dimarts";
        else if (dia == 3) return "Dimecres";
        else if (dia == 4) return "Dijous";
        else if (dia == 5) return "Divendres";
        else if (dia == 6) return "Dissabte";
        else if (dia == 7) return "Diumenge";
    } else {
        return "El dia ha d’estar entre 1 i 7";
    }
}