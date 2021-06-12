# Zergpool.js

Made with [![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/zergpool.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/zergpool.js.svg)](https://github.com/LockBlock-dev/zergpool.js/stargazers)

zergpool.js is a Node.js module that allows you to easily interact with the Zergpool API.

• Promise based

• Performant

• 100% coverage of the Zergpool API

• Handles server side limit on wallet and walletEx endpoints


## Installation

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

With GitHub :

• Download the project or clone it

• Go to the zergpool.js folder and do `npm install`

• Require the [index.js](/index.js)

With NPM :

• Download the project

• Do `npm install zergpool.js`

• Require the library


## Documentation

See the [API documentation](/API.md).


## Example usage

### Using the library

```js
const { Client } = require("./index.js")

const client = new Client()

client.status().then(data => {
    console.log(data)
})

//OR

const myFunc = async () => {
    const data = await client.status()
    console.log(data)
}

myFunc()
```

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)


## Credits

[Zergpool API](https://zergpool.com/site/api)


## Copyright

See the [license](/LICENSE)