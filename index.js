const animal = ""
//console.log(animal);

function myAnimal() {
  let animal='dog';
  console.log("first "+animal);
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal= 'cat';
  console.log("second "+animal);
  return animal
}

function add2(n) {
   let two = 2
   console.log(two);
  return n + two

  // Feel free to move things around!
  
}
//console.log(animal);
/*console.log(animal);
myAnimal();
yourAnimal();
add2(2);*/