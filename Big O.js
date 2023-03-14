//O(1) 
function get_element(arr, index) {
    if (index < 0 || index >= 10) {
      console.log("Error: Index out of bounds");
      return -1;
    }
    return arr[index];
}

 
//O(n) 
function increment_array_elements(arr) {
    for (var i = 0, _pj_a = 10; i < _pj_a; i++) {
      arr[i] += 1;
    }
}  

 
//O(n^2) 
function print_array_pairs(arr) {
    for (var i = 0, _pj_a = 10; i < _pj_a; i++) {
      for (var j = i + 1, _pj_b = 10; j < _pj_b; j++) {
        console.log(`O(n^2): (${arr[i]}, ${arr[j]})`);
      }
    }
}

//O(n^3) 
function print_array_triplets(arr) {
    for (var i = 0, _pj_a = 10; i < _pj_a; i++) {
      for (var j = i + 1, _pj_b = 10; j < _pj_b; j++) {
        for (var k = j + 1, _pj_c = 10; k < _pj_c; k++) {
          console.log(`O(n^3): (${arr[i]}, ${arr[j]}, ${arr[k]})`);
        }
      }
    }
}


 
//O(n^3 + 2n) 
function print_array_triplets_and_increment(arr) {
    for (var i = 0, _pj_a = 10; i < _pj_a; i++) {
      for (var j = i + 1, _pj_b = 10; j < _pj_b; j++) {
        for (var k = j + 1, _pj_c = 10; k < _pj_c; k++) {
          console.log(`O(n^3 + 2n): (${arr[i]}, ${arr[j]}, ${arr[k]})`);
        }
      }
    }
    for (var i = 0, _pj_a = 10; i < _pj_a; i += 1) {
      console.log('2n: ' + arr[i]);
    }
}

let arr = Array.from({length: 1000000}, () => Math.floor(Math.random() * 10)); 

console.time('Constant time');
get_element(arr);
console.timeEnd('Constant time');

console.time('Lineal time');
increment_array_elements(arr);
console.timeEnd('Lineal time');

console.time('Cuadratic time');
print_array_pairs(arr);
console.timeEnd('Cuadratic time');

console.time('Cubic time');
print_array_triplets(arr);
console.timeEnd('Cubic time');

console.time('n^3 + 2n time');
print_array_triplets_and_increment(arr);
console.timeEnd('n^3 + 2n time');