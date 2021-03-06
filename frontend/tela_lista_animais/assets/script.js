

var ul = document.getElementsByClassName('list-container');
const xhr = new XMLHttpRequest()
//open a get request with the remote server URL
xhr.open("GET", "http://localhost:3000/animal")
//send the Http request
xhr.send()


//triggered when the response is completed
xhr.onload = function() {
    if (xhr.status === 200) {
      //parse JSON datax`x
      data = JSON.parse(xhr.responseText)

      for(var element in data){
        var li = document.createElement("li");
        li.innerHTML = `<div class="image-container">
                              <img src="${data[element].image}">
                          </div>

                          <div class="name-container"> 
                              <span class="name">${data[element].nome}</span>
                              <span class="description">${data[element].descricao}</span>
                          </div>`

        li.addEventListener("click", sendData)

        li.className = "myList";

        ul[0].appendChild(li)



        function sendData() {
          localStorage.setItem("id", data[element]._id)
          window.location.href = "../tela_perfilAnimal/perfilAnimal.html"
        }
    }

    } else if (xhr.status === 404) {
      console.log("No records found")
    }
  }
  
  //triggered when a network-level error occurs with the request
  xhr.onerror = function() {
    console.log("Network error occurred")
  }
  
  //triggered periodically as the client receives data
  //used to monitor the progress of the request
  xhr.onprogress = function(e) {
    if (e.lengthComputable) {
      console.log(`${e.loaded} B of ${e.total} B loaded!`)
    } else {
      console.log(`${e.loaded} B loaded!`)
    }
  }


