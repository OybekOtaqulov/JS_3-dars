let sana = new Date();

sana.setFullYear(2008)
sana.setDate(7)
sana.setMonth(2)

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

document.write("Men "+yil+"-yili "+kun+"-"+oylar[oy]+" haftaning "+hafta[haftaKuni]+" kunida tug'lganman");
