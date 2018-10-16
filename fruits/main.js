console.log("HELLO")

var btn = document.querySelector('button')
btn.addEventListener('click', function(){
    fetch('https://agile-inlet-36787.herokuapp.com/get_fruits.json')
    .then((response) => response.json())
    .then((response) => {
      var data = response.data
      console.log(data)
      var body = document.querySelector('body')
      //create a div for each fruit name, put the fruit name in it and append it to the dom
        for(let i = 0; i < data.length; i++){
            var fruitDiv = document.createElement('div')
            var fruitImg = document.createElement('img')
            fruitImg.src = data[i].url
            fruitImg.alt = data[i].name
            fruitDiv.innerText = `The ${data[i].name}'s source is: ${data[i].source} it will cost you $${data[i].price}` 
            fruitDiv.classList.add('special')
            fruitImg.classList.add('images')
            body.append(fruitDiv)
            fruitDiv.appendChild(fruitImg)
    
        }
    
    }) 
    
})
