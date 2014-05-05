# css-unit [![Build Status](https://travis-ci.org/morishitter/css-unit.svg)](https://travis-ci.org/morishitter/css-unit)

Analize CSS values and units.

## Installation

```
npm install css-unit
```

## Example

```javascript
var unit = require('css-unit');

var value = '50px';
var css = '.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}';

unit.is(value); // 'px'

unit.rm(value); // 50

unit.stats(css);
/*
  { num: 2,
    units: [ 'px', 'none' ],
    rules:
    [ { type: 'rule',
        selectors: [ '.site-nav > li:hover .dropdown' ],
        declarations:
        [ { type: 'declaration', property: 'position', value: 'absolute' },
          { type: 'declaration',
            property: 'top',
            value: '37px',
            num: 37,
            unit: 'px' },
          { type: 'declaration',
            property: 'left',
            value: '0',
            num: 0,
            unit: 'none' } ] } ] }
*/
```

## License
The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
