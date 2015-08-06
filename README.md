# jscs-config-nordnet

[![NPM version][npm-image]][npm-url]

> JSCS config for Nordnet Javascript applications

Nordnet follows Javascript styleguide suggested by Airbnb. See [Airbnb's Javascript styleguide][airbnb-styleguide] and the [JSCS config docs][jscs-config-docs] for more information.

[airbnb-styleguide]: https://github.com/airbnb/javascript
[jscs-config-docs]: http://jscs.info/rules.html

## Installation

Install `JSCS` and `jscs-config-nordnet` plugin as dev dependencies

```bash
npm install --save-dev jscs jscs-config-nordnet babel-jscs 
```

## Configuration

Add `.jscsrc` config to your project

```js
{
  "plugins": ["jscs-config-nordnet"],
  "preset": "nordnet"
}
```

## License

MIT © [Nordnet Bank AB](https://www.nordnet.se/)

[npm-url]: https://npmjs.org/package/jscs-config-nordnet
[npm-image]: https://img.shields.io/npm/v/jscs-config-nordnet.svg?style=flat-square
