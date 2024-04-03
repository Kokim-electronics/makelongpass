const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+-./:;?@[]^_{}~";
const symb = "aaa!#$%()*+-./:;?@[]^_{}~aa";
var count = 10;
var str2;

//disableとenableの切り替えとフォーカス

window.onload = function () {
    if (document.getElementsByName("stg")[0].checked == true) {
        enable();
    } else {
        disable();
    }
}

function disable() {
    document.getElementById("Cbox0").disabled = true;
    document.getElementById("Cbox1").disabled = true;
    document.getElementById("Cbox2").disabled = true;
    //document.getElementById("Cbox3").disabled = true;
    document.getElementById("Cbox4").disabled = true;
    document.getElementById("Cbox5").disabled = true;
    document.getElementById("Cbox6").disabled = true;
    document.getElementById("Cbox7").disabled = true;
    document.getElementById("Cbox8").disabled = true;
    document.getElementById("Cbox9").disabled = true;
    document.getElementById("Cbox10").disabled = true;
    document.getElementById("Cbox11").disabled = true;
    document.getElementById("Cbox12").disabled = true;
    document.getElementById("Cbox13").disabled = true;
    document.getElementById("Cbox14").disabled = true;
    document.getElementById("Cbox15").disabled = true;
    document.getElementById("Cbox16").disabled = true;
    document.getElementById("Cbox17").disabled = true;
    document.getElementById("Cbox18").disabled = true;
    document.getElementById("Cbox19").disabled = true;
    document.getElementById("Cbox20").disabled = true;
    document.getElementById("Cbox21").disabled = true;
    document.getElementById("Cbox22").disabled = true;
    document.getElementById("Cbox23").disabled = true;
    document.getElementById("Cbox24").disabled = true;
    document.getElementById("Cbox25").disabled = true;

    document.getElementById("Symbol0").disabled = true;
    document.getElementById("Symbol1").disabled = true;
}

function enable() {
    document.getElementById("Cbox0").disabled = false;
    document.getElementById("Cbox1").disabled = false;
    document.getElementById("Cbox2").disabled = false;
    //document.getElementById("Cbox3").disabled = false;
    document.getElementById("Cbox4").disabled = false;
    document.getElementById("Cbox5").disabled = false;
    document.getElementById("Cbox6").disabled = false;
    document.getElementById("Cbox7").disabled = false;
    document.getElementById("Cbox8").disabled = false;
    document.getElementById("Cbox9").disabled = false;
    document.getElementById("Cbox10").disabled = false;
    document.getElementById("Cbox11").disabled = false;
    document.getElementById("Cbox12").disabled = false;
    document.getElementById("Cbox13").disabled = false;
    document.getElementById("Cbox14").disabled = false;
    document.getElementById("Cbox15").disabled = false;
    document.getElementById("Cbox16").disabled = false;
    document.getElementById("Cbox17").disabled = false;
    document.getElementById("Cbox18").disabled = false;
    document.getElementById("Cbox19").disabled = false;
    document.getElementById("Cbox20").disabled = false;
    document.getElementById("Cbox21").disabled = false;
    document.getElementById("Cbox22").disabled = false;
    document.getElementById("Cbox23").disabled = false;
    document.getElementById("Cbox24").disabled = false;
    document.getElementById("Cbox25").disabled = false;

    document.getElementById("Symbol0").disabled = false;
    document.getElementById("Symbol1").disabled = false;
}

function d_focus() {
    document.getElementsByName("digit")[0].checked = true;
}

function s_focus() {
    document.getElementsByName("su")[0].checked = true;
}

//symbolの制御
$(function () {

    //初期設定
    if ($("#Symbol0").prop("checked") == true) {

        $("#pulldown").addClass("open");

        $("#Cbox4").prop("checked", false);
        $("#Cbox5").prop("checked", false);
        $("#Cbox6").prop("checked", false);
        $("#Cbox7").prop("checked", false);
        $("#Cbox8").prop("checked", false);
        $("#Cbox9").prop("checked", false);
        $("#Cbox10").prop("checked", false);
        $("#Cbox11").prop("checked", false);
        $("#Cbox12").prop("checked", false);
        $("#Cbox13").prop("checked", false);
        $("#Cbox14").prop("checked", false);
        $("#Cbox15").prop("checked", false);
        $("#Cbox16").prop("checked", false);
        $("#Cbox17").prop("checked", false);
        $("#Cbox18").prop("checked", false);
        $("#Cbox19").prop("checked", false);
        $("#Cbox20").prop("checked", false);
        $("#Cbox21").prop("checked", false);
        $("#Cbox22").prop("checked", false);
        $("#Cbox23").prop("checked", false);
        $("#Cbox24").prop("checked", false);
        $("#Cbox25").prop("checked", false);
        $(".size_s").css('display', 'block');

    } else {

        $("#pulldown").removeClass("open");

        /*
        $("#Cbox4").prop("checked",true);
        $("#Cbox5").prop("checked",true);
        $("#Cbox6").prop("checked",true);
        $("#Cbox7").prop("checked",true);
        $("#Cbox8").prop("checked",true);
        $("#Cbox9").prop("checked",true);
        $("#Cbox10").prop("checked",true);
        $("#Cbox11").prop("checked",true);
        $("#Cbox12").prop("checked",true);
        $("#Cbox13").prop("checked",true);
        $("#Cbox14").prop("checked",true);
        $("#Cbox15").prop("checked",true);
        $("#Cbox16").prop("checked",true);
        $("#Cbox17").prop("checked",true);
        $("#Cbox18").prop("checked",true);
        $("#Cbox19").prop("checked",true);
        */
    }

    //ラジオボタンチェンジイベント
    $("#Symbol0").on("click", function () {
        $("#pulldown").addClass("open");

        $("#Cbox4").prop("checked", false);
        $("#Cbox5").prop("checked", false);
        $("#Cbox6").prop("checked", false);
        $("#Cbox7").prop("checked", false);
        $("#Cbox8").prop("checked", false);
        $("#Cbox9").prop("checked", false);
        $("#Cbox10").prop("checked", false);
        $("#Cbox11").prop("checked", false);
        $("#Cbox12").prop("checked", false);
        $("#Cbox13").prop("checked", false);
        $("#Cbox14").prop("checked", false);
        $("#Cbox15").prop("checked", false);
        $("#Cbox16").prop("checked", false);
        $("#Cbox17").prop("checked", false);
        $("#Cbox18").prop("checked", false);
        $("#Cbox19").prop("checked", false);
        $("#Cbox20").prop("checked", false);
        $("#Cbox21").prop("checked", false);
        $("#Cbox22").prop("checked", false);
        $("#Cbox23").prop("checked", false);
        $("#Cbox24").prop("checked", false);
        $("#Cbox25").prop("checked", false);
    });

    $("#Symbol1").on("click", function () {
        $("#pulldown").removeClass("open");

        $("#Cbox4").prop("checked", true);
        $("#Cbox5").prop("checked", true);
        $("#Cbox6").prop("checked", true);
        $("#Cbox7").prop("checked", true);
        $("#Cbox8").prop("checked", true);
        $("#Cbox9").prop("checked", true);
        $("#Cbox10").prop("checked", true);
        $("#Cbox11").prop("checked", true);
        $("#Cbox12").prop("checked", true);
        $("#Cbox13").prop("checked", true);
        $("#Cbox14").prop("checked", true);
        $("#Cbox15").prop("checked", true);
        $("#Cbox16").prop("checked", true);
        $("#Cbox17").prop("checked", true);
        $("#Cbox18").prop("checked", true);
        $("#Cbox19").prop("checked", true);
        $("#Cbox20").prop("checked", true);
        $("#Cbox21").prop("checked", true);
        $("#Cbox22").prop("checked", true);
        $("#Cbox23").prop("checked", true);
        $("#Cbox24").prop("checked", true);
        $("#Cbox25").prop("checked", true);
    });

    //Disable1 強力
    $("#Disable1").on("click", function () {

        $("#Cbox0").prop("checked", true);
        $("#Cbox1").prop("checked", true);
        $("#Cbox2").prop("checked", true);

        $("#Symbol0").prop("checked", true);

        $("#Digit1").prop("checked", true);

        $("#pulldown").addClass("open");

        $("#Cbox4").prop("checked", false);
        $("#Cbox5").prop("checked", false);
        $("#Cbox6").prop("checked", false);
        $("#Cbox7").prop("checked", false);
        $("#Cbox8").prop("checked", false);
        $("#Cbox9").prop("checked", false);
        $("#Cbox10").prop("checked", false);
        $("#Cbox11").prop("checked", false);
        $("#Cbox12").prop("checked", false);
        $("#Cbox13").prop("checked", false);
        $("#Cbox14").prop("checked", false);
        $("#Cbox15").prop("checked", false);
        $("#Cbox16").prop("checked", false);
        $("#Cbox17").prop("checked", false);
        $("#Cbox18").prop("checked", false);
        $("#Cbox19").prop("checked", false);
        $("#Cbox20").prop("checked", false);
        $("#Cbox21").prop("checked", false);
        $("#Cbox22").prop("checked", false);
        $("#Cbox23").prop("checked", false);
        $("#Cbox24").prop("checked", false);
        $("#Cbox25").prop("checked", false);
    });

    //Disable2 最強
    $("#Disable2").on("click", function () {

        $("#Cbox0").prop("checked", true);
        $("#Cbox1").prop("checked", true);
        $("#Cbox2").prop("checked", true);

        $("#Symbol1").prop("checked", true);

        $("#Digit2").prop("checked", true);

        $("#pulldown").removeClass("open");

        $("#Cbox4").prop("checked", true);
        $("#Cbox5").prop("checked", true);
        $("#Cbox6").prop("checked", true);
        $("#Cbox7").prop("checked", true);
        $("#Cbox8").prop("checked", true);
        $("#Cbox9").prop("checked", true);
        $("#Cbox10").prop("checked", true);
        $("#Cbox11").prop("checked", true);
        $("#Cbox12").prop("checked", true);
        $("#Cbox13").prop("checked", true);
        $("#Cbox14").prop("checked", true);
        $("#Cbox15").prop("checked", true);
        $("#Cbox16").prop("checked", true);
        $("#Cbox17").prop("checked", true);
        $("#Cbox18").prop("checked", true);
        $("#Cbox19").prop("checked", true);
        $("#Cbox20").prop("checked", true);
        $("#Cbox21").prop("checked", true);
        $("#Cbox22").prop("checked", true);
        $("#Cbox23").prop("checked", true);
        $("#Cbox24").prop("checked", true);
        $("#Cbox25").prop("checked", true);
    });

    //Disable2 最強
    $("#make").on("click", function () {
        str2 = str;
        if ($("#Cbox0").prop("checked") == false) {
            str2 = str2.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
        }
        if ($("#Cbox1").prop("checked") == false) {
            str2 = str2.replace("abcdefghijklmnopqrstuvwxyz", "");
        }
        if ($("#Cbox2").prop("checked") == false) {
            str2 = str2.replace("0123456789", "");
        }
        if ($("#Symbol0").prop("checked") == true) {
            str2 = str2.replace("!#$%()*+-./:;?@[]^_{}~", "");
        }
        if (str2 == "") {
            alert("選択された文字がありません");
            return 0
        }
        if ($("#Condition0").prop("checked") == true) {
            str2 = str2.replace("I", "").replace("l", "").replace("1", "").replace("O", "").replace("0", "").replace("o", "");
        }
        for (let i = 3; i < 25; i++) {
            if (document.querySelectorAll("[type=checkbox]")[i].checked == false) {
                str2 = str2.replace(symb[i], "");
            }
        }
        if (str2 == "") {
            alert("選択された文字がありません");
            return 0
        }
        if (document.querySelectorAll("[name=digit]")[0].checked == true) {
            count = Number($("#d0num").prop("value"));
        } else if (document.querySelectorAll("[name=digit]")[1].checked == true) {
            count = Number($("#Digit1").prop("value"));
        } else if (document.querySelectorAll("[name=digit]")[2].checked == true) {
            count = Number($("#Digit2").prop("value"));
        }

        //https://color-piece.com/blog/js-random-chars/
        let passArr = new Array();
        const playerList = document.getElementById("playerList");
        playerList.innerHTML = "";  // 一度表の中身を空にする

        for (let j = 0; j < 10; j++) {
            let randomStr = '';
            let tempArr = new Array();
            tempArr.push(j + 1);
            for (let i = 0; i < count; i++) {
                let select = Math.floor(Math.random() * str2.length);
                const random = str2.substring(select, select + 1);
                if (str2.length > count) {
                    if (!(randomStr.includes(random))) {
                        randomStr += random;
                    } else {
                        i--;
                    }
                } else {
                    randomStr += random;
                }
            }
            tempArr.push(randomStr);
            tempArr.push("")
            passArr.push(tempArr);
            const tr = document.createElement("tr");
            playerList.appendChild(tr); // 表の中に８個の「tr」（行）ができる
            tempArr.forEach((arr, i) => { // No, name, age, gradeの4回繰り返す
                const td = document.createElement("td");
                td.textContent = arr;  // arr[1]はvalueの部分
                if (i == 1) {
                    td.setAttribute("onclick", "this.focus();copy_fn(" + j + ");tos(this)");
                    td.setAttribute("class", "outpass");
                }
                tr.appendChild(td);
            });
        }
    });
});

//https://gxy-life.com/2PC/PC/PC20211011.html
//https://gxy-life.com/2PC/PC/PC20211010.html
function copy_fn(j) {
    navigator.clipboard.writeText($(".outpass").eq(j).text());
}
function tos(td) {
    $("td").css("background-color", "");
    $(".copydone").text("");
    td.style.backgroundColor = "yellow"; 
    var foo = document.createElement("td")
    foo.textContent = "コピーしました"
    foo.classList.add("copydone");
    td.closest("tr").children[2].replaceWith(foo);
}
