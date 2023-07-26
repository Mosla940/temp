//CommonJS every file is module (by default)
//Modules- Encapsulated code (only share minimum)
const names = require('./names');
const sayHi = require("./5-utils")
const data = require('./6-alternative-flavors')
require('./7-mind-grenade')
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
