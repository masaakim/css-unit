
var unit = require('../');

unit.rm('50px'); // '50'
unit.is('50px'); // 'px'
unit.stats('.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}');
var util = require('util')
console.log(util.inspect(unit.stats('.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}')));
// {
//   num: 2,
//   units: ['px', 'none'],
//   rules: [
//     {
//       selector: .site-nav > li:hover .dropdown,
//       declarations: [
//         {
//           property: 'top',
//           value: '37px',
//           num: '37',
//           unit: 'px'
//         },
//         {
//           property: 'left',
//           value: '0',
//           num: '0',
//           unit: 'none'
//         }
//       ]
//     }
//   ]
// }
