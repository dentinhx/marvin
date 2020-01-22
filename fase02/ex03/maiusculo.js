function maiusculo(palavra){
    var m = palavra.toUpperCase()
    var n = m.substr(0,3)
    var p = palavra.substring(3,palavra.length)
    return n+p
}


