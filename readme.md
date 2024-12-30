# Multi Proxy Checker

A fast proxy checker for NodeJS

## Installation

You can install this package via npm:

```
npm install multi-proxy-check
```

## Example

```javascript
const { check_proxies, proxy_list } = require('multi-proxy-check');
const fs = require('fs');
const path = require('path');

const proxiesFilePath = path.join(__dirname, './proxies.txt'); // get proxies file

const proxies = fs.readFileSync(proxiesFilePath, 'utf-8').split('\n').filter(Boolean); // 

check_proxies(proxies) // start checking proxies

setInterval(() => {
   console.log(proxy_list.getWork().length + ' proxies are working');
}, 1000) // find working proxies 
```

## Repository

You can find the repository on GitHub:

[https://github.com/raksix/multi_proxy_checker](https://github.com/raksix/multi_proxy_checker)
