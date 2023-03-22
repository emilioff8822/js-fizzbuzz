const list = document.querySelector('#list');

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');

  
  if (i % 3 === 0 && i % 5 === 0) {
    li.append('FizzBuzz');
  }
  else if (i % 3 === 0) {
    li.append('Fizz');
  }
  else if (i % 5 === 0) {
    li.append('Buzz');
  }
  else {
    li.append(i);
  }

  list.append(li);
}



