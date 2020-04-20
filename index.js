const fs = require('fs');
const http = require('http');
const moment = require('moment');
const imageHash = require('image-hash');

const db = require('./Pokemons.json')
const imghash = require('imghash');
imghash
  .hash('./image.png')
  .then((hash) => {
    console.log(hash); // 'f884c4d8d1193c07'
  });
