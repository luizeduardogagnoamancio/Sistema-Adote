/*
Porte pequeno: 1
Porte médio: 2
Porte grande: 3

Tem raça: 1
Sem raça: 0

Tipo cachorro: 1
Tipo gato: 2
Tipo outros: 3
*/


var item = document.getElementById('content');
const xhr = new XMLHttpRequest()
//open a get request with the remote server URL
xhr.open("GET", `http://localhost:3000/animal/${localStorage.getItem("id")}`)
//send the Http request
xhr.send()


//triggered when the response is completed
xhr.onload = function() {
    if (xhr.status === 200) {
      //parse JSON datax`x
    data = JSON.parse(xhr.responseText)

        
    item.innerHTML = `
                <div>
                    <center>
                    <img class="gato" src="${data.image}" alt="">
                    </center>
                    <form method="get">
                        <h4 style="text-align: center;">Informações</h4>
                        <p>Tipo: ${getTipo(data.tipo)}</p>
                        <p>Nome: ${data.nome}</p>
                        <p>Descrição: ${data.descricao}.</p>
                        <p>Idade: ${data.idade} anos</p>
                        <p>Sexo: ${getSexo(data.sexo)}</p>
                        <p>Vacinado: ${getVacinado(data.vacinado)}</p>
                        <p>Porte: ${getPorte(data.porte)}</p>
                        <p>Raça: ${getRaca(data.raca)}</p>
                        <a class="Adotar" href="../tela_formulario/formulario.html">Quero Adotar</a>
                    </form>           
                </div>`


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


  function getTipo(tipo) {
    if(tipo == 1) return "Cachorro"
    else if(tipo == 2) return "Gato"
    else return "Outros"
  }

  function getSexo(sexo) {
    if(sexo == 1) return "Macho"
    else return "Fêmea"
  }

  function getVacinado(vacinado) {
    if(vacinado == 1) return "Sim"
    else return "Não"
  }

  function getPorte(porte) {
    if(porte == 1) return "Pequeno"
    else if(porte == 2) return "Médio"
    else return "Grande"
  }

  function getRaca(raca) {
    if(raca == 1) return "Animal de raça"
    else return "Sem raça definida"
  }

