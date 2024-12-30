const { request } = require('undici');
const { getWork, getNotWork, setWork, setNotWork } = require('./list');

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
            work.push(proxy);
         } catch (error) {
            notwork.push(proxy);
         }
      });

      setWork(work);
      setNotWork(notwork);

      if (work.length + notwork.length === list.length) {
         resolve(work); // if all proxies checked resolve promise with work
      }
   } catch (error) {
      reject(error); // if error reject promise with error
   }
});

module.exports = check_proxies;