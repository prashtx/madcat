#!/usr/bin/env node
'use strict';

var fs = require('fs');

var concat = require('concat-stream');
var render = require('ansimd');

var file = process.argv[2];

var input;

if (!file || file === '-') {
  input = process.stdin;
} else {
  input = fs.createReadStream(file);
}

var write = concat(function (data) {
  process.stdout.write(render(data.toString()));
  process.exit();
});

input.pipe(write);
