console.log("■■ アルゴリズムテスト");

// p011
console.log("■ 最大値を求める");

// 最大値の計算
let x_ary = [15, 27, 73, 84, 15, 26, 37, 78, 9, 15, 71, 62, 23, 40, 55, 96, 37, 68, 19, 80];

let max_num = x_ary.length;

let answer_num = x_ary[0]; // 最初の数字を入れておく

for (let i = 0; i < max_num; i++) {
    console.log("\n回数：", i + 1, "回");
    if (answer_num < x_ary[i]) {
        answer_num = x_ary[i];
        console.log("大きい数字が出たので代入、", x_ary[i]);
    }
    console.log("終了");
    console.log("最大値は、", answer_num);
}


console.log("\n■ 等しい整数の出力");

let x_ary2 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 10];
let max_num2 = x_ary2.length;

for (let i = 0; i < max_num2; i++) {
    for (j = i + 1; j < max_num2 + 1; j++) {
        if (x_ary2[i] === x_ary2[j]) {
            console.log(`${x_ary2[i]}と${x_ary2[j]}は同じである`);
        }
    }
}

// 2と2は同じである
// 5と5は同じである
// 3回 7と7は同じである
// 9と9は同じである


