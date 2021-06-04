function sama(partialstr,prefix=[]){
    for (var i=0;i<prefix.length;i++) {
          if (partialstr.match("^"+prefix[i]+"(?!"+prefix[i]+")")) return [true,partialstr.substring(prefix[i].length)];
    }
    return [false,null];
}

/**
 * Parse raw string into object from detected decorator
 * 
 * @param {string} str - raw string
 * @param {Object} kwargs - options
 * @returns 
 */
function cek(str,kwargs={}) {
   var sp=str.split(/ +/g);
   var hasil = {};
   var prefix = ["-"].concat(kwargs.prefix||[]);
   for (var i=0;i<sp.length;i++) {
      var samakah =sama(sp[i], prefix);
       if (samakah[0]) {
            hasil[samakah[1]]=sp[++i] || kwargs.defaultValue || true;
            continue;
       }
   }
   return hasil;
}

module.exports = {
    parse: cek
}
