const title = document.getElementById("title");
const text = document.getElementById("text");
const surasCon = document.getElementById("sure");
const img = document.getElementById("img");

const input = document.getElementById('input');
const back = document.getElementById('back');
const next = document.getElementById('next');
const playsavt = document.getElementById('play');
const pausesavt = document.getElementById('pause');


const suras = [
  { number: 1, name: "الفاتحة" },
  { number: 2, name: "البقرة" },
  { number: 3, name: "آل عمران" },
  { number: 4, name: "النساء" },
  { number: 5, name: "المائدة" },
  { number: 6, name: "الأنعام" },
  { number: 7, name: "الأعراف" },
  { number: 8, name: "الأنفال" },
  { number: 9, name: "التوبة" },
  { number: 10, name: "يونس" },
  { number: 11, name: "هود" },
  { number: 12, name: "يوسف" },
  { number: 13, name: "الرعد" },
  { number: 14, name: "إبراهيم" },
  { number: 15, name: "الحجر" },
  { number: 16, name: "النحل" },
  { number: 17, name: "الإسراء" },
  { number: 18, name: "الكهف" },
  { number: 19, name: "مريم" },
  { number: 20, name: "طه" },
  { number: 21, name: "الأنبياء" },
  { number: 22, name: "الحج" },
  { number: 23, name: "المؤمنون" },
  { number: 24, name: "النور" },
  { number: 25, name: "الفرقان" },
  { number: 26, name: "الشعراء" },
  { number: 27, name: "النمل" },
  { number: 28, name: "القصص" },
  { number: 29, name: "العنكبوت" },
  { number: 30, name: "الروم" },
  { number: 31, name: "لقمان" },
  { number: 32, name: "السجدة" },
  { number: 33, name: "الأحزاب" },
  { number: 34, name: "سبأ" },
  { number: 35, name: "فاطر" },
  { number: 36, name: "يس" },
  { number: 37, name: "الصافات" },
  { number: 38, name: "ص" },
  { number: 39, name: "الزمر" },
  { number: 40, name: "غافر" },
  { number: 41, name: "فصلت" },
  { number: 42, name: "الشورى" },
  { number: 43, name: "الزخرف" },
  { number: 44, name: "الدخان" },
  { number: 45, name: "الجاثية" },
  { number: 46, name: "الأحقاف" },
  { number: 47, name: "محمد" },
  { number: 48, name: "الفتح" },
  { number: 49, name: "الحشر" },
  { number: 50, name: "الممتحنة" },
  { number: 51, name: "الحاقة" },
  { number: 52, name: "الطور" },
  { number: 53, name: "النجم" },
  { number: 54, name: "القمر" },
  { number: 55, name: "الرحمن" },
  { number: 56, name: "الواقعة" },
  { number: 57, name: "الحديد" },
  { number: 58, name: "المجادلة" },
  { number: 59, name: "الحشر" },
  { number: 60, name: "الممتحنة" },
  { number: 61, name: "الصف" },
  { number: 62, name: "الجمعة" },
  { number: 63, name: "المنافقون" },
  { number: 64, name: "التغابن" },
  { number: 65, name: "الطلاق" },
  { number: 66, name: "التحريم" },
  { number: 67, name: "الملك" },
  { number: 68, name: "القلم" },
  { number: 69, name: "الحاقة" },
  { number: 70, name: "المعارج" },
  { number: 71, name: "نوح" },
  { number: 72, name: "الجن" },
  { number: 73, name: "المزمل" },
  { number: 74, name: "المدثر" },
  { number: 75, name: "القيامة" },
  { number: 76, name: "الإنسان" },
  { number: 77, name: "المرسلات" },
  { number: 78, name: "النبأ" },
  { number: 79, name: "النازعات" },
  { number: 80, name: "عبس" },
  { number: 81, name: "التكوير" },
  { number: 82, name: "الإنفطار" },
  { number: 83, name: "المطففين" },
  { number: 84, name: "الإنشقاق" },
  { number: 85, name: "البروج" },
  { number: 86, name: "الطارق" },
  { number: 87, name: "الأعلى" },
  { number: 88, name: "الغاشية" },
  { number: 89, name: "الفجر" },
  { number: 90, name: "البلد" },
  { number: 91, name: "الشمس" },
  { number: 92, name: "الليل" },
  { number: 93, name: "الضحى" },
  { number: 94, name: "الشرح" },
  { number: 95, name: "التين" },
  { number: 96, name: "العلق" },
  { number: 97, name: "القدر" },
  { number: 98, name: "البينة" },
  { number: 99, name: "الزلزلة" },
  { number: 100, name: "العاديات" },
  { number: 101, name: "القارعة" },
  { number: 102, name: "التكاثر" },
  { number: 103, name: "العصر" },
  { number: 104, name: "الهمزة" },
  { number: 105, name: "الفيل" },
  { number: 106, name: "قريش" },
  { number: 107, name: "الماعون" },
  { number: 108, name: "الكوثر" },
  { number: 109, name: "الكافرون" },
  { number: 110, name: "النصر" },
  { number: 111, name: "المسد" },
  { number: 112, name: "الإخلاص" },
  { number: 113, name: "الفلق" },
  { number: 114, name: "الناس" },
];
let okuyan = 'nufais';
let savt = new Audio;

window.onload = function () {
  for (let surasLoop of suras) {
    surasCon.innerHTML += `<li class="dropdown-item text-end" id="${surasLoop.number}" onclick="changedSura(this.id)">${surasLoop.name}</li>`;
  }
  
  text.innerHTML = `(${suras[0].number} - سورة ${suras[0].name})`;
  fetch(`./JSON/nufais.json`)
    .then((res) => res.json())
    .then(function (okuyanKisiPara) {
      savt.src = okuyanKisiPara.suras[0].src;
      title.innerHTML = okuyanKisiPara.name;
    });
    savt.onloadedmetadata = function(){
        input.value = savt.currentTime;
        input.max = savt.duration;
    }
};


function okuyanKisi(data) {
    okuyan = data;
  fetch(`./JSON/${okuyan}.json`)
    .then((res) => res.json())
    .then(function (okuyanKisiPara) {
      title.innerHTML = okuyanKisiPara.name;
      img.src = okuyanKisiPara.img;
      savt.src = okuyanKisiPara.suras[0].src;
        text.innerHTML = `(${suras[0].number} - سورة ${suras[0].name})`;

    });
    pausedSavt()
}

function changedSura(data) {
    savt.pause();
  text.innerHTML = `(${document.getElementById(`${data}`).id} - سورة ${
    document.getElementById(`${data}`).innerHTML
  })`;
  fetch(`./JSON/${okuyan}.json`)
    .then((res) => res.json())
    .then(function (okuyanKisiPara) {
      savt.src = okuyanKisiPara.suras[data - 1].src;
      savt.onloadedmetadata = function(){
        input.value = savt.currentTime;
        input.max = savt.duration;
    }
    });
    pausedSavt();
}
function playedSavt(){
    savt.play();
    playsavt.classList.add('d-none');
    pausesavt.classList.remove('d-none');
    setInterval(()=>{
        input.value = savt.currentTime;
       
    },1000)
}

function pausedSavt(){
    savt.pause();
    playsavt.classList.remove('d-none');
    pausesavt.classList.add('d-none');
}
function onchanged(){
    savt.currentTime = input.value;
}
function plusten(){
    savt.currentTime += 10;
}
function naksten(){
    savt.currentTime -= 10;
    
}
function downloadSura(id){
  document.getElementById(id).setAttribute("href", savt.src);

}
