

const xhr = new XMLHttpRequest()
//open a get request with the remote server URL
//send the Http request



//triggered when the response is completed
xhr.onload = function() {
    if (xhr.status === 200) {

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
  
  function login() {

    xhr.open("POST", "http://localhost:3000/usuario/login")

    var json = JSON.stringify({
        nome : document.getElementById("nome").value, 
        senha : document.getElementById("senha").value
    })

    console.log(json)



    xhr.send(json)
    
  }



