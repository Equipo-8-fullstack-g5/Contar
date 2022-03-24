let contar=["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]
    console.log (contar)

let repeat = []

 contar.forEach (function (numero) {
    repeat [numero] = (repeat [numero] || 0) + 1
 })
     console.log (repeat)