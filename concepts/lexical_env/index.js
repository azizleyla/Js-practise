//Lexical env
//2 hisseden ibaretdir
//1️⃣ Environment Record
// Burada dəyişənlər (var, let, const) və funksiyalar saxlanılır.

// Məsələn, bir funksiya içində yaradılan bütün dəyişənlər bu hissədə olur.

// 2️⃣ Reference to Outer Environment (Outer Lexical Environment)

// Bu, valideyn mühitə istinaddır.

// Əgər dəyişən cari environment-də tapılmasa,
// JavaScript onu valideyn environment-də axtarır.

//Closure sadəcə “daxili funksiya xaricdəkiləri görə bilir” deyil.
// O, outer lexical environment-ə reference saxlayır — yəni memory-də canlı bağlantı qalır.

function outer() {
  let counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
}

const count = outer();
count(); // 1
count(); // 2

// ➡️ outer()-in execution context-i bitsə də,
// onun lexical environment-i closure tərəfindən hələ memory-də(Heap) yaşayır



//JS hər dəfə dəyişən axtaranda belə edir:
// Əvvəlcə öz Environment Record-da baxır
// Tapmazsa → Outer Environment Reference vasitəsilə yuxarıdakı environment-ə baxır
// Ən yuxarı nöqtə → Global Environment
// Tapılmazsa → ReferenceError =>
    //eyni zamanda SCOPE Chain adlanir

//🌍 1️⃣ JavaScript kodu işləyərkən nə baş verir?
// Sən hər dəfə bir JS fayl işə salanda, JS Engine (məsələn, V8) kodu iki mərhələdə icra edir:
// Creation Phase (Yaradılma mərhələsi)
// Execution Phase (İcra mərhələsi)

var n = 2
function square(n) {
    let ans = n + n;
    return ans
}
const s2 = square(n);
const s4 = square(3)
//GEC yaradilir =>n:undefined square:f() s2:und s4:und
//square funk cagrilan zaman EC+LEV(lexical env) yaradilir =>n:2 ans:undefined =>ans:4(execution phase)
//funksiya bitir call Stackden EC cixir
//s4 cagrilanda EC+LEV yradilir n:3 ans:undef=>ans:6
//funk bitende Call stackden EC cixir
//proqram bitende GEC(global exec context) callstackden cixir