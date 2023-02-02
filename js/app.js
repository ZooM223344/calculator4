/*// Умовні операції це коли є якась умова (if)
// if - це умовгий оператор синтаксис якго є if(Зміна > 0) - в цих задається умова {} - цих дужках виконується дія такод якщо дія тільки одна то можна не використовувати дужки

let num = 15;

if (num == 15) {
    console.log("true");
}

if (num == 15)
    console.log("true");

//Для того щоб порівняти чи дорівнює зміна 5 то використовується знак ==, а не знак = томущо знак = це присвоєння
//Також можна зрівнювати різні типи даних
let st = "22";

if (st >= "22") {
    console.log("true st");
}

//Є багато знаків порівнювання
// (==) -- дорівнює
// (<)  -- менше
// (>)  -- більше
// (<=) -- меншу або дорівнює
// (>=) -- більше або дорівнює
// (!=) -- не дорівнює

//Також ще є оператор else в цьому не можна задавати умови і вінь йде в насому кінці if

if (num == 1) {
    console.log("true");
} else if (num == 15) {
    console.log("true!!!!");
} else {
    console.log("false");
}

//Також є оператор else if його може бути безліч і вінь позначається в центрі між if and else йому мож задавати умови

//========Провірка декількох умов в одній операції============

let num2 = 10;

if (num == 5 || num2 == 10) {
    console.log("OK");
}

// (||) -- ці палочки означають або тобто зміна == 3 або зміна2 = 5 і якщо одна з цих умов true то if спрацьовує
// (&) -- ця закорлючка означає і тобто що if видав тру і то і то має бути true

if (num == 15 & num2 == 10) {
    console.log("OK!!!!!!!!!");
}

//==========Другий оператор(switch case)===============

let stroka = "word1";

// Записується вінь таким чином

/*switch (Зміна яку нада провірити на дорівнює) {
    case "4":
        дія
        break;
    case "4":
        дія
        break;
}*/

/*//Switch це ключове слово те що в дужках це зміна яку ми провіряєм на дорівнює томто в цьому операторі нема >, <, >=, <=, !=
//Case і те що влабках це з чим ми порінюєм тобто чи наша зміна == 4 таких case можна зробити скільки можливо
//Дія це то що виконується як наша зміна == 4
//Break обовязковий томущо вінь закінчує все
//Default -- це щосб типу else але для switch рісля нього мож не прописувати break

switch (stroka) {
    case "4":
        console.log("4");
        break;
    case "ok":
        console.log("ok");
        break;
    case "word":
        console.log("word");
        break;
    default:
        console.log("error");
}*/

//======Практика==========
if (!confirm("Ти хочеш працювати з канкулятором ?")) {
    window.location.href = 'html/pages-2.html';
}
const arrButtonNumbers = document.querySelectorAll(".canculytor__button");
const canculytorDisplayNumber = document.querySelector(".display__number");
let stanChar = false;
let arrayCharLD = new Array();
let arrayCharRD = new Array();

if (arrButtonNumbers.length > 0 && canculytorDisplayNumber != null) {
    for (let i = 0; i < arrButtonNumbers.length; i++) {
        const arrButtonNumber = arrButtonNumbers[i];
        setInterval(number, 10);
        setInterval(stanNumbers, 10);
        setInterval(stanArrayChar, 10);
        setInterval(arrayChar, 10);
        canculytorDisplayNumber.classList.remove("__double-chars");
        arrButtonNumber.addEventListener("click", function (e) {
            e.preventDefault();
            if (stanChar == false) {
                if (arrButtonNumber.innerHTML != "=" & arrButtonNumber.innerHTML != "delete") {
                    if (canculytorDisplayNumber.innerHTML == 0) {
                        canculytorDisplayNumber.innerHTML = null
                    }
                    if (canculytorDisplayNumber.innerHTML.length < 30) {
                        const arrButtonNumberValue = arrButtonNumber.innerHTML;
                        canculytorDisplayNumber.innerHTML = canculytorDisplayNumber.innerHTML + arrButtonNumberValue;
                    }
                } else if (arrButtonNumber.innerHTML == "=") {
                    let chars = canculytorDisplayNumber.innerHTML;
                    if (arrayCharRD.length == arrayCharLD.length) {
                        let value = Function("return " + chars)();
                        canculytorDisplayNumber.innerHTML = value;
                    } else if (arrayCharRD.length != arrayCharLD.length) {
                        canculytorDisplayNumber.classList.add("__not-many__chars");
                    }
                } else if (arrButtonNumber.innerHTML == "delete") {
                    canculytorDisplayNumber.innerHTML = 0;
                }
            } else if (stanChar == true && arrButtonNumber.innerHTML == "delete") {
                canculytorDisplayNumber.innerHTML = 0;
            }
            e.preventDefault;
        });
    }

}
function number() {
    if (canculytorDisplayNumber.innerHTML.toLocaleLowerCase().includes("++") || canculytorDisplayNumber.innerHTML.toLocaleLowerCase().includes("**") || canculytorDisplayNumber.innerHTML.toLocaleLowerCase().includes("//") || canculytorDisplayNumber.innerHTML.toLocaleLowerCase().includes("--")) {
        canculytorDisplayNumber.classList.add("__double-chars");
        stanChar = true;
    } else {
        canculytorDisplayNumber.classList.remove("__double-chars");
        stanChar = false;
    }
}
function stanNumbers() {
    if (canculytorDisplayNumber.innerHTML.length < 30) {
        canculytorDisplayNumber.classList.remove("__max-numbers");
    } else if (canculytorDisplayNumber.innerHTML.length >= 30) {
        canculytorDisplayNumber.classList.add("__max-numbers");
    }
}
function stanArrayChar() {
    arrayCharRD == arrayCharRD.splice(-30, 30);
    arrayCharLD == arrayCharLD.splice(-30, 30);
    if (canculytorDisplayNumber.textContent.toLocaleLowerCase().includes("(") || canculytorDisplayNumber.textContent.toLocaleLowerCase().includes(")")) {
        for (let i = 0; i < canculytorDisplayNumber.textContent.length; i++) {
            const canculytorDisplayChar = canculytorDisplayNumber.textContent[i];
            if (canculytorDisplayChar == "(") {
                arrayCharRD = arrayCharRD.concat(canculytorDisplayChar);
            } else if (canculytorDisplayChar == ")") {
                arrayCharLD = arrayCharLD.concat(canculytorDisplayChar);
            }
        }
    }
}
function arrayChar() {
    if (document.querySelector(".__not-many__chars") != null && arrayCharRD.length == arrayCharLD.length) {
        canculytorDisplayNumber.classList.remove("__not-many__chars");
    }
}