const list = document.querySelector('#list');
const container = document.querySelector(".container");
console.log(container)

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  //list.append(li);
  
  const box= document.createElement("div")
  box.classList.add("box")
  container.append(box)
  box.append(i)



  
  if (i % 3 === 0 && i % 5 === 0) {
    //li.append('FizzBuzz');
    box.classList.add('FizzBuzz');
    box.innerText = "FizzBuzz";


  }
  else if (i % 3 === 0) {
    //li.append('Fizz');
    box.classList.add('Fizz');
    box.innerText = "Fizz";



  }
  else if (i % 5 === 0) {
    //li.append('Buzz');
    box.classList.add('Buzz');
    box.innerText = "Buzz";


    
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


