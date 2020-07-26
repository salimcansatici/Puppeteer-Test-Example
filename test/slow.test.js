'use strict';
/* global describe: false, before: false, it: false,
    beforeEach: false, afterEach: false, after: false, window: false, document: false */

const assert = require('assert').strict;
const startBrowser = require('../');
const util = require('util');

const promiseTimeout = util.promisify(setTimeout);

describe('Puppeteer Test Örneği', function() {
  let pageManager;

  it('TestSenaryosu', async function() {
    this.timeout(10000);


    console.time('Tarayıcı açıldı');
    const browser = await startBrowser();
    console.timeEnd('Tarayıcı açıldı');
    assert(browser);


    console.time('Ziyaret Gerçekleştirme');
    const page = await browser.newPage();
    await page.goto('https://google.com', {waitUntil: 'domcontentloaded', timeout: 0});
    console.timeEnd('Ziyaret Gerçekleştirme');
    assert(page);


    //page.waitForNavigation(options) 
    //https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagewaitfornavigationoptions 
    //DomContentLoaded Sayfanın yüklenmesini beklemez
    //Load tamamen sayfanın yüklenmesini bekler bunun gibi args'ları dökümanda bulabilirsiniz.


    console.time('Tarayıcı Kapatıldı');
    await browser.close();
    console.timeEnd('Tarayıcı Kapatıldı');
  });

});
