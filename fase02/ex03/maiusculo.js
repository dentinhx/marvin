function maiusculo(palavra){
    var m = palavra.toUpperCase()
    var n = m.substring(0,3)
    var o = palavra.toLowerCase()
    var p = o.substring(3,palavra.length)
    return n+p
}


