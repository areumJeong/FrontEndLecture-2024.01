// 숫자 변환 내장(built-in) 함수

const a = '123.65', b = '0xff', c = '23';

console.log(Number(a), Number(b));      // 123.65,  255

//정수 - Integer, 실수 - Floating point
console.log(parseInt(a), parseFloat(a));                      // 123,  123.65
console.log(parseInt(b), parseFloat(b), parseFloat(c));       // 255, 0, 23

console.log(parseInt('1401호'), Number('1401호'));            // 1401, NaN
console.log(parseInt('1,400원'), parseInt('503동 1401호'));   // 1, 503


/* 16진수(hexadecimal)		8진수(octal)

0000	0			0o0 0o7
0001	1
...
1001	9
1010	10	0xa, 0xA
1011	11	0Xb
1100	12	0xc
1101	13	0xd
1110	14	0xe
1111	15	0xf

#80ec89
R - 0x80	128
G - 0xEC
B - 0x89 */