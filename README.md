# jscs-config-nordnet

[![NPM version][npm-image]][npm-url]

> JSCS config for Nordnet Javascript applications

Nordnet follows Javascript styleguide suggested by Airbnb. See [Airbnb's Javascript styleguide][airbnb-styleguide] and the [JSCS config docs][jscs-config-docs] for more information. [Nordnet’s scaffolder][gnem] has built-in support for this config.

[airbnb-styleguide]: https://github.com/airbnb/javascript
[jscs-config-docs]: http://jscs.info/rules.html
[gnem]: https://github.com/nordnet/generator-nordnet-es-module

## Installation

Install `jscs` and `jscs-config-nordnet` and `babel-jscs` plugin dev dependencies.

    npm install --save-dev jscs jscs-config-nordnet babel-jscs

## Configuration

Add `.jscsrc` config to your project

```json
{
  "plugins": ["jscs-config-nordnet"],
  "preset": "nordnet"
}
```

## License

MIT © [Nordnet Bank AB](https://www.nordnet.se/)

[npm-url]: https://npmjs.org/package/jscs-config-nordnet
[npm-image]: https://img.shields.io/npm/v/jscs-config-nordnet.svg?style=flat-square
