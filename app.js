// https://www.omnicalculator.com/health/mentzer-index

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mentzerindexRadio = document.getElementById('mentzerindexRadio');
const MCVRadio = document.getElementById('MCVRadio');
const RBCRadio = document.getElementById('RBCRadio');

let mentzerindex;
let MCV = v1;
let RBC = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

mentzerindexRadio.addEventListener('click', function() {
  variable1.textContent = 'MCV';
  variable2.textContent = 'RBC';
  MCV = v1;
  RBC = v2;
  result.textContent = '';
});

MCVRadio.addEventListener('click', function() {
  variable1.textContent = 'Mentzer index';
  variable2.textContent = 'RBC';
  mentzerindex = v1;
  RBC = v2;
  result.textContent = '';
});

RBCRadio.addEventListener('click', function() {
  variable1.textContent = 'Mentzer index';
  variable2.textContent = 'MCV';
  mentzerindex = v1;
  MCV = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mentzerindexRadio.checked)
    result.textContent = `Mentzer index = ${computementzerindex().toFixed(2)}`;

  else if(MCVRadio.checked)
    result.textContent = `MCV = ${computeMCV().toFixed(2)}`;

  else if(RBCRadio.checked)
    result.textContent = `RBC = ${computeRBC().toFixed(2)}`;
})

// calculation

function computementzerindex() {
  return Number(MCV.value) / Number(RBC.value);
}

function computeMCV() {
  return Number(mentzerindex.value) * Number(RBC.value);
}

function computeRBC() {
  return Number(MCV.value) / Number(mentzerindex.value);
}