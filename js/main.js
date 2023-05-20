/* Function in JS */

/*function savatchaniTekshir(uzatilganContainer =[78,"text"]){


    if (uzatilganContainer.length == 0) {
        document.write("Savatchamiz ichida " + uzatilganContainer.length + "ta ma'lumot bor!");
    }
    else{
        document.write("Savatchamiz ichida " + uzatilganContainer.length + " dona ma'lumot bor!");
    }

}

let container = [333,336,366,337,377,363,367,373,376,666,663,667,633,636,637,];
savatchaniTekshir(container);*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2023)
sana.setDate(27)
sana.setMonth(3)

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()
let hafta = ["Yakshanba","Dushanba","Seshanba","Chorshanda","Payshanba","Juma","Shanba"];
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"];
let soat = sana.getHours()
let minuta = sana.getMinutes()
let secunda = sana.getSeconds()
let millsec = sana.getMilliseconds()
let vaqt = sana.getTime()
let shtoto = sana.getTimezoneOffset()
let day = sana.getUTCDate()
let shto = sana.getUTCMinutes()

document.write(yil+"-yil "+kun+"-"+oylar[oy]+"- haftaning "+hafta[haftaKuni]+" kuni");






