const fs = require('fs');
const path = require('path');
const { check_proxies, proxy_list } = require('../index');

// proxies.txt dosyasını oku ve proxy'leri bir diziye dönüştür
const proxiesFilePath = path.join(__dirname, './proxies.txt');
const proxies = fs.readFileSync(proxiesFilePath, 'utf-8').split('\n').filter(Boolean);

// check_proxies fonksiyonunu çalıştır ve sonuçları yazdır
check_proxies(proxies)

setInterval(() => {
   console.log(proxy_list.getWork().length + ' proxies are working');
}, 1000)
