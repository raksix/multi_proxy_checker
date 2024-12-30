const { request } = require('undici');
const { addWork, addNotWork } = require('./list');

const recheck_list = [];

const check_proxies = (list) => new Promise((resolve, reject) => {
   try {
      const work = [];
      const notwork = [];

      list.map(async (proxy) => {
         // Proxy URL'sinin başında http veya https yoksa ekle
         if (!proxy.startsWith('http://') && !proxy.startsWith('https://')) {
            proxy = 'http://' + proxy;
         }

         try {
            await request(proxy);
            addWork(proxy);
            // Proxy çalışıyorsa recheck_list'ten kaldır
            const index = recheck_list.indexOf(proxy);
            if (index > -1) {
               recheck_list.splice(index, 1);
            }
         } catch (error) {
            if (!recheck_list.includes(proxy)) {
               setTimeout(() => {
                  recheck_list.push(proxy);
               }, 30 * 1000); // recheck after 15 seconds
            }
            addNotWork(proxy);
         }
      });

      if (work.length + notwork.length === list.length) {
         resolve(work); // if all proxies checked resolve promise with work
      }
   } catch (error) {
      reject(error); // if error reject promise with error
   }
});

setInterval(() => {
   check_proxies(recheck_list); // rechecking not working proxies
}, 30 * 1000)

module.exports = check_proxies;