var item
var j

function Itens() {
    document.getElementById('itens').style.visibility = "visible"
    document.getElementById("itens").innerHTML += "<p id='carregando'>Carregando...</p>"
    
    
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/item.json`)
    .then(res => res.json())
    .then(json => {
        
        
        var j = []
        
        for (num in json.data) {
            j.push(json.data[num])
            
            json1 = json.data[num] + ".json"
            
            itemimg = json.data[num].image.full
            
            document.getElementById('carregando').style.visibility = "hidden"
            
            document.getElementById("itens").innerHTML +=
            `<div><img class='img' id="${num}" onclick="detalhar(${num})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${num}.png"></div>`
            
        }
        
        var maxJ = j.length
    })
}

Itens()

function detalhar(item) {
    document.getElementById('detalhe').style.visibility ="visible"
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/item.json`)
    .then(res => res.json())
    .then(json5 => {
        document.getElementById("detalhe").innerHTML = '<div id="titulo">' +  json5.data[item].name +
        '<br>' + '<br>' + json5.data[item].plaintext + "<br>" +
        json5.data[item].gold.total + " - " +
        json5.data[item].gold.sell + "<br>" +
        json5.data[item].description + '</div>'
        
        var finalItem = []
        
        if (finalItem != undefined) {
            for (i = 0; i < finalItem.length; i++) {
                finalItem.pop()
            }
        }
        
        for (num in json5.data[item].into) {
            finalItem.push(json5.data[item].into[num])
        }
        
        for (i = 0; i < finalItem.length; i++) {
            document.getElementById("detalhe").innerHTML +=
            `<div><img id="imgfinal" onclick="chamar(${finalItem[i]})" src="http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/${finalItem[i]}.png"></div>`
        }
        
        
    })
}