//------- Задания 1

let str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, "!"));

//------- Задания 2

let todayIs = '2025-12-31';
let arr = todayIs.split('-');
let newStr = arr[2] + '/' + arr[1] + '/' + arr[0];

alert(newStr);

//------- Задания 3

let strStr = "я учу javascript!";
document.write(strStr.substr(1, 4)+'<br>');
document.write(strStr.substr(5,11)+'<br>');
document.write(strStr.substring(2, 6)+'<br>');
document.write(strStr.substring(6,16)+'<br>');
document.write(strStr.slice(1, 5)+'<br>');
document.write(strStr.slice(5,-1)+'<br>');
alert(strStr);

//------- Задания 4

let arrArr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i=0; i < arrArr.length; i++){
    sum += Math.pow(arr[i], 3)
}
document.write(Math.sqrt(sum));

//------- Задания 5

let a = 5;
let b = 9;
let c = Math.abs(a-b);

document.write(c);

//------- Задания 6

let date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
 + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) 
 + '.' + date.getFullYear());

 //------- Задания 7

let str2 = 'aa aba abba abbba abca abea'.replace(/ab+a/g, '!');

console.log(str2)

  //------- Задания 8

   //------- Задания 9

   //------- Задания 10
