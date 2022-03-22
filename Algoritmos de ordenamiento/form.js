// Este es el funcionamiento del formulario para crear el array
var boton = document.getElementById('crear');
var input = document.getElementById('array');
var tamano
boton.addEventListener('click', pregunta, false);
function pregunta () {
    tamano = prompt("¿De que tamaño será el arreglo?"); 
}
input.addEventListener('change', llenarArray, false);
var numeros = Array();

function llenarArray(){
    var valor = input.value;
    if(numeros.length < tamano){
        numeros.push(Number(valor));
        
    }else{
        alert('Array completamente lleno ' + numeros);
        document.getElementById("form").style.display= "none";
    }
    document.getElementById("instruccion").innerHTML = `el arreglo es: [ ${numeros} ]`;
}

//Aqui estan todos los funcionamientos de los botones de ordenamiento
//Odenamiento por inssercion
function inser(vector) {
    for (let i = 1; i < vector.length; i++) {
        let j = i - 1;
        let aux = vector[i];

        while (j >= 0 && vector[j] > aux) {
            vector[j + 1] = vector[j];
            j--;
        }
        vector[j + 1] = aux
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${vector} ]`;
}

//Ordenamiento por seleccion
function selecc(vector) {
    for (let i = 0; i < vector.length - 1; i++) {
        let actual = i;
        for (let j = i + 1; j < vector.length; j++){
            if (vector[j] < vector[actual]){
                actual = j;
            }
        }
        const aux = vector[i];
        vector[i] = vector[actual];
        vector[actual] = aux;
        
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${vector} ]`;
}
//Ordenamiento por burbuja
function burbuja(c){
    for (var i=1; i<c.length; i++){
        for (var j=0; j<(c.length-1); j++){
            if ((c[j])>(c[j+1])){
                temp=c[j];
                c[j]=c[j+1];
                c[j+1]=temp;
            }
        }  
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${c} ]`;
}
//Ordenamiento peine

//Ordenamiento por burbuja bidireccional
function burbujaBidireccional(vector){
    var izquierda,derecha,aux,ultimo;
    izquierda = 0;
    derecha = vector.length - 1;
    ultimo = vector.length - 1;
    do {
        for (i = izquierda; i < derecha; i++){
            if (vector[i] > vector[i + 1]){
                aux = vector[i];
                vector[i] = vector[i + 1];
                vector[i + 1] = aux;
                ultimo = i;
            }
        }
        derecha = ultimo;
        for (j = derecha; j > izquierda; j--){
            if (vector[j-1] > vector[j]){
                aux = vector[j];
                vector[j] = vector[j-1];
                vector[j-1] = aux;
                ultimo = j;
            }
        }
        izquierda = ultimo;
    } while (izquierda < derecha);
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${vector} ]`;
}
//Ordenamiento Shell
function OrdenacionShell(datos){
    let incremento = (datos.length)/2;
            
    while (incremento > 0){
        for (let i = 0; i < datos.length; i++){
            let j = i;
            let dato = datos[i];

            while(j >= incremento && datos[j - incremento] > dato){
                datos[j] = datos[j - incremento];
                j -= incremento;
            }
            datos[j] = dato;
        } 
        if (incremento == 2){
            incremento = 1;
        }else {
            incremento = parseInt(incremento*5/11); 
        } 
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${datos} ]`;
}

//Ordenamiento Gnome
function Gnome(datos) {
    function moverAtras(i) {
        for(; i > 0 && datos[i - 1] > datos[i]; --i) {
            [datos[i], datos[i - 1]] = [datos[i - 1], datos[i]];
        }
    }

    for (let i = 1; i < datos.length; i++) {
        if (datos[i - 1] > datos[i]) {
            moverAtras(i);
        }
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${datos} ]`;
}
//Ordenamiento por monticulos
const buildMaxHeap = (arr) => {
    let i = Math.floor(arr.length / 2 - 1);
    while (i >= 0) {
      heapify(arr, i, arr.length);
      i -= 1;
    }
}
  
const heapify = (heap, i, max) => {
    let index;
    let leftChild;
    let rightChild;
  
    while (i < max) {
      index = i;
      leftChild = 2 * i + 1;
      rightChild = leftChild + 1;

      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      if (rightChild < max && heap[rightChild] > heap[index]) {
        index = rightChild;
      }
  
      if (index === i) {
        return;
      }
      swap(heap, i, index);
      i = index;
    }
}
  
const swap = (arr, firstItemIndex, lastItemIndex) => {
    const temp = arr[firstItemIndex];
 
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
}
  
const heapSort = (arr) => {
    buildMaxHeap(arr);
    lastElement = arr.length - 1;

    while (lastElement > 0) {
      swap(arr, 0, lastElement);
      heapify(arr, 0, lastElement);
      lastElement -= 1;
    }
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${arr} ]`;
}
//Ordenamiento mescla
Array.prototype.mergeSort = function() {
    if (this.length <= 1) {
        return this;
    }

    let mitad = parseInt(this.length / 2);
    let izquierda = this.slice(0, mitad).mergeSort();
    let derecha = this.slice(mitad, this.length).mergeSort();

    let merge = function(izquierda, derecha) {
        let datos = [];

        while(izquierda.length > 0 && derecha.length > 0) {
            datos.push(izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift())
        }

        return datos.concat(izquierda).concat(derecha);
    }

    return merge(izquierda, derecha);
}
//Ordenamiento rapido
function quickSort(array) {

    if (array.length < 1) {
      return [];
    }
  
    var left = [];
    var right = [];
    var pivot = array[0];
  
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
}
//llamada a los botones
document.getElementById("Inssercion").onclick = function (){
    inser(numeros);  
}
document.getElementById("Seleccion").onclick = function (){
    selecc(numeros);  
}
document.getElementById("Burbuja").onclick = function (){
    burbuja(numeros);  
}
document.getElementById("bidireccional").onclick = function (){
    burbujaBidireccional(numeros);  
}
document.getElementById("Shell").onclick = function (){
    OrdenacionShell(numeros);  
}
document.getElementById("Gnome").onclick = function (){
    Gnome(numeros);  
}
document.getElementById("Monticulos").onclick = function (){
    heapSort(numeros);
}
document.getElementById("Mescla").onclick = function (){
    numeros.mergeSort();
    let respuesta= numeros.mergeSort();
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${respuesta}} ]`;
}
document.getElementById("Rapido").onclick = function (){
    document.getElementById("resultado").innerHTML = `el arreglo ordenado es: [ ${quickSort(numeros)} ]`;
}