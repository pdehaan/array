'use strict';

var isArray = require( './../lib' );

console.log( isArray( [] ) );
// returns true

console.log( isArray( {} ) );
// returns false