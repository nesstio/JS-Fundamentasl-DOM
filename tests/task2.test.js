const applyStyles = require('../task2.js');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');


const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

const { window } = new JSDOM(html);
global.document = window.document;

test('Застосовує стилі до елементу', () => {
  applyStyles();

  const styledElement = document.getElementById('title');
  const firstPar = document.getElementById("myDiv").children[0];
  const secondPar = document.getElementById("myDiv").children[1];
  const thirdPar = document.getElementById("myDiv").children[2];
  const fourthPar = document.getElementById("myDiv").children[3];
  const myList = document.getElementById("myList");
  const span =  document.getElementsByTagName("span")[0];

  expect(styledElement.style.backgroundColor).toBe("lightgreen");
  expect(firstPar.style.fontWeight).toBe("700");
  expect(secondPar.style.color).toBe("red");
  expect(thirdPar.style.textDecoration).toBe("underline");
  expect(fourthPar.style.fontStyle).toBe("italic");
  expect(myList.style.listStyle).toBe("none");
  expect(myList.style.display).toBe("flex");
  expect(span.style.display).toBe("none")




});
