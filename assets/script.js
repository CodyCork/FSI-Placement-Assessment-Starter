//My name!
let yourName = "Cody Cork"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

//Cookie Quantity Variables
let gbQuantityTd = document.querySelector('#qty-gb');

let ccQuantityTd = document.querySelector('#qty-cc');

let sugarQuantityTd = document.querySelector('#qty-sugar');

//Cookie Quantity Total Variable and array
let totalCookieQuantity = [gb, cc, sugar];
document.querySelector('#qty-total')
console.log(totalCookieQuantity)

//Add and Minus Ginger-Bread Cookies
const gbPlusBtn = document.querySelector('#add-gb');
gbPlusBtn.addEventListener('click', function addGb() {
    gb = gb + 1;
    gbQuantityTd.textContent = gb
})

const gbMinusBtn = document.querySelector('#minus-gb');
gbMinusBtn.addEventListener('click', function minusGb() {
    gb = gb - 1;
    gbQuantityTd.textContent = gb
})

//Add and Minus Choclate-Chip Cookies
const ccPlusBtn = document.querySelector('#add-cc');
ccPlusBtn.addEventListener('click', function addCc() {
    cc = cc + 1;
    ccQuantityTd.textContent = cc
})
const ccMinusBtn = document.querySelector('#minus-cc');
ccMinusBtn.addEventListener('click', function minusCc() {
    cc = cc - 1;
    ccQuantityTd.textContent = cc
})

//Add and Minus Sugar-Cookies
const sugarPlusBtn = document.querySelector('#add-sugar');
sugarPlusBtn.addEventListener('click', function addSugar() {
    sugar = sugar + 1;
    sugarQuantityTd.textContent = sugar
})
const sugarMinusBtn = document.querySelector('#minus-sugar');
sugarMinusBtn.addEventListener('click', function minusSugar() {
    sugar = sugar - 1;
    sugarQuantityTd.textContent = sugar
})

//For loop for total cookie quantity
for (let i = 0; i < totalCookieQuantity.length; i++) {
    const total = totalCookieQuantity[i];
        totalCookieQuantity.textContent = gbQuantityTd.textContent + ccQuantityTd.textContent + sugarQuantityTd.textContent;
        
}
