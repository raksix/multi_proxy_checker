# Multi Proxy Checker

A fast proxy checker for NodeJS

## Example

```
const { check_proxies, proxy_list } = require('multi-proxy-check');

const proxiesFilePath = path.join(__dirname, './proxies.txt'); // get proxies file

const proxies = fs.readFileSync(proxiesFilePath, 'utf-8').split('\n').filter(Boolean); // 

check_proxies(proxies) // start checking proxies

setInterval(() => {
   console.log(proxy_list.getWork().length + ' proxies are working');
}, 1000) // find working proxies 
```
