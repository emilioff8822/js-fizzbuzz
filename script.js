const list = document.querySelector('#list');

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  list.append(li);


  
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

}


/*INNER HTML

const list = document.querySelector('#list');


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    
   console.log("FizzBuzz");
   list.innerHTML += "<li>FizzBuzz</li>";
 





  } else if (i % 3 === 0) {
    console.log("Fizz");
    list.innerHTML += "<li>Fizz</li>";

  
  
  } else if (i % 5 === 0) {
    console.log("Buzz");
    list.innerHTML += "<li>Buzz</li>";


  } else {
    console.log(i);
    list.innerHTML += "<li> " + i + "</li>";


  }


  
}


*/


