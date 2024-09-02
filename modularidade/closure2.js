function adicionar(X) {
    return function(Y) {
      return X + Y;
    }
  }
  
  const add = adicionar(5);
  console.log(add(10));
  console.log(add(2));
  console.log(add(20));