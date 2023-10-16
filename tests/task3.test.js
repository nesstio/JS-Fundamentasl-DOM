const applyStyles = require('../task3.js');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');


const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

const { window } = new JSDOM(html);
global.document = window.document;

function hasRequiredMarkup() {
    const mainElement = document.querySelector('.mainClass.check.item');
    if (!mainElement) {
      return false;
    }
  
    const divElement = mainElement.querySelector('#myDiv');
    if (!divElement) {
      return false;
    }
  
    const paragraphElement = divElement.querySelector('p');
    if (!paragraphElement) {
      return false;
    }
  
    return true;
  }

  

test('Застосовує стилі до елементу', () => {
  applyStyles();

  const result = hasRequiredMarkup();

expect(result).toBe(true)
 



});
