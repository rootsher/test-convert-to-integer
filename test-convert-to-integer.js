var x = 10;
var time = 100000000;
var start, end;

// Number Constructor (e.g. Number(x))
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    Number(x);
}
end = new Date().getTime();
console.log('Number Constructor (e.g. Number(x)), time:', (end - start));

// parseInt (e.g. parseInt(x))
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    parseInt(x);
}
end = new Date().getTime();
console.log('parseInt (e.g. parseInt(x)):', (end - start));

// Plus operator (e.g. +x)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    +x;
}
end = new Date().getTime();
console.log('Plus operator (e.g. +x):', (end - start));

// Bitwise >> (right shift) (e.g. x >> 0)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    (x >> 0);
}
end = new Date().getTime();
console.log('Bitwise >> (right shift) (e.g. x >> 0):', (end - start));

// Multiply (force cast) (e.g. x * 1)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    (x * 1);
}
end = new Date().getTime();
console.log('Multiply (force cast) (e.g. x * 1):', (end - start));

// Bitwise NOT (e.g. ~~x)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    ~~x;
}
end = new Date().getTime();
console.log('Bitwise NOT (e.g. ~~x):', (end - start));

// parseInt with base argument (e.g. parseInt(x, 10))
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    parseInt(x, 10);
}
end = new Date().getTime();
console.log('parseInt with base argument (e.g. parseInt(x, 10)):', (end - start));

// Bitwise OR (e.g. x | 0)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    (x | 0);
}
end = new Date().getTime();
console.log('Bitwise OR (e.g. x | 0):', (end - start));

// minus 0 (e.g. x - 0)
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    (x - 0);
}
end = new Date().getTime();
console.log('minus 0 (e.g. x - 0):', (end - start));

// parseFloat (e.g. parseFloat(x, 10))
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    parseFloat(x, 10);
}
end = new Date().getTime();
console.log('parseFloat (e.g. parseFloat(x, 10)):', (end - start));

// Math.floor (e.g. Math.floor(x))
start = new Date().getTime();
for (var i = 0; i < time; i += 1) {
    Math.floor(x);
}
end = new Date().getTime();
console.log('Math.floor (e.g. Math.floor(x)):', (end - start));

