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
 * @param {string} kwargs.prefix string for start any sentences
 * @param {string} kwargs.multiSpace boolean if parser must includes next line
 * @param {string} kwargs.defaultValue any data if a decor found with no values
 * @returns {object}
 */
function cek(str,kwargs={}) {
   var sp=str.split(/ +/g);
   var hasil = {};
   var prefix = ["-"].concat(kwargs.prefix||[]);
   var multispace = kwargs.multiSpace==true;
   for (var i=0;i<sp.length;i++) {
        var samakah =sama(sp[i], prefix);
        if (samakah[0]) {
            let isi = sp[++i] || kwargs.defaultValue || true;
            if (multispace && sp[i]) {
                const keySKRG = samakah[1]
                if (sama(sp[i],prefix)[0]) {
                    hasil[keySKRG] = kwargs.defaultValue || true;
                }
                while (sp[i] && !(sama(sp[i], prefix)[0])) {
                    samakah = sama(sp[i], prefix)
                    hasil[keySKRG] = hasil[keySKRG] ? hasil[keySKRG] + " " + isi : isi
                    isi = sp[++i] || kwargs.defaultValue || true;
                }
                i--;
                continue;
            }
            hasil[samakah[1]]=isi
            //continue;
        }
   }
   return hasil;
}

module.exports = {
    parse: cek
}
