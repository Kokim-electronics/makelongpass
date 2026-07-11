// 文字クラスの定義（削除方式ではなく追加方式で組み立てる）
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

// チェックボックスIDと記号の明示的な対応表（DOMの並び順に依存しない）
const SYMBOL_MAP = {
    Cbox10: "!", Cbox11: "#", Cbox12: "$", Cbox13: "%", Cbox15: "(",
    Cbox16: ")", Cbox5: "*", Cbox7: "+", Cbox6: "-", Cbox8: ".",
    Cbox4: "/", Cbox9: ":", Cbox14: ";", Cbox18: "?", Cbox20: "@",
    Cbox21: "[", Cbox22: "]", Cbox23: "^", Cbox19: "_", Cbox24: "{",
    Cbox25: "}", Cbox17: "~"
};

// 暗号論的に安全な 0〜max-1 の整数を返す（剰余バイアスを除去）
function secureRandomInt(max) {
    const buf = new Uint32Array(1);
    const limit = 4294967296 - (4294967296 % max);
    do {
        crypto.getRandomValues(buf);
    } while (buf[0] >= limit);
    return buf[0] % max;
}

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

    //生成ボタン
    $("#make").on("click", function () {
        //選択された文字クラスを組み立てる
        let classes = [];
        if ($("#Cbox0").prop("checked")) classes.push(UPPER);
        if ($("#Cbox1").prop("checked")) classes.push(LOWER);
        if ($("#Cbox2").prop("checked")) classes.push(DIGITS);
        if ($("#Symbol1").prop("checked")) {
            let symbols = "";
            for (const id in SYMBOL_MAP) {
                if ($("#" + id).prop("checked")) symbols += SYMBOL_MAP[id];
            }
            if (symbols !== "") classes.push(symbols);
        }

        //似通った英数字（I l 1 O 0 o）を省く
        if ($("#Condition0").prop("checked")) {
            classes = classes.map(s => s.replace(/[Il1O0o]/g, "")).filter(s => s !== "");
        }

        if (classes.length === 0) {
            alert("選択された文字がありません");
            return;
        }

        //文字数の検証（空欄・NaN・範囲外を拒否）
        let count;
        if ($("#Digit1").prop("checked")) {
            count = 12;
        } else if ($("#Digit2").prop("checked")) {
            count = 20;
        } else {
            count = Number($("#d0num").val());
            if (!Number.isInteger(count) || count < 1 || count > 2000) {
                alert("文字数は1〜2000の整数で指定してください");
                return;
            }
        }

        const all = classes.join("");
        const playerList = document.getElementById("playerList");
        playerList.innerHTML = "";  // 一度表の中身を空にする

        for (let j = 0; j < 10; j++) {
            //選択した各文字クラスから最低1文字を保証する
            const chars = [];
            for (const cls of classes) {
                chars.push(cls[secureRandomInt(cls.length)]);
            }
            //残りは全文字プールから選ぶ（重複を許可してエントロピーを保つ）
            while (chars.length < count) {
                chars.push(all[secureRandomInt(all.length)]);
            }
            //Fisher–Yatesシャッフルで「先頭に各文字クラスが並ぶ」偏りを消す
            for (let i = chars.length - 1; i > 0; i--) {
                const k = secureRandomInt(i + 1);
                [chars[i], chars[k]] = [chars[k], chars[i]];
            }
            const randomStr = chars.join("");

            const tempArr = [j + 1, randomStr, ""];
            const tr = document.createElement("tr");
            playerList.appendChild(tr);
            tempArr.forEach((arr, i) => {
                const td = document.createElement("td");
                td.textContent = arr;
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
