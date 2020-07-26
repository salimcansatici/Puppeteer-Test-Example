'use strict';
const puppeteer = require('puppeteer');


/*
Eklenen args'lar çok önemli kullandığınız args'lar sebebiyle tarayıcıyı daha hızlı ya da daha yavaş kullanabilirsiniz. 
Bir nebze optimizasyonunu iyi yapmak gerekiyor.
*/


module.exports = async function startBrowser() {
  const options = {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ],
    headless: false
  };


  return await puppeteer.launch(options);
};
