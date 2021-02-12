const conteudo = document.getElementById('conteudo')
const section = document.querySelectorAll('section')
const input = document.getElementById('input')


fetch("https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json")
.then(res => res.json())
.then(xhr => {
    json = xhr;
    document.getElementById("busca").innerHTML += "<option hidden selected>Selecione o seu campeão!</option>";
    
    for(prop in json.data){    
        document.getElementById("busca").innerHTML += "<option class='option' value='"+ prop +"'>"+ prop +"</option>";
    }
});


function loadchamp() {
    
    const busca = document.getElementById("busca").value
    const section = document.getElementById('section')
    const apresentacao = document.getElementById('apresentacao')
    const resultado = document.getElementById('resultado')
    const vida1 = document.getElementById('vida1')
    const nivel = document.getElementById('ali')
    const nivel2 = document.getElementById('ini')
    const inimigo = document.getElementById('inimigo')
    
    
    
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/${busca}.json`)
    .then(res => res.json())
    .then(json => {
        var cont = 0
        backup = json
        
        nome = `${busca}`
        Passive = json.data[nome].passive.image.full
        Q = json.data[nome].spells[0].image.full
        W = json.data[nome].spells[1].image.full
        E = json.data[nome].spells[2].image.full
        R = json.data[nome].spells[3].image.full
        apresentacao.innerHTML= ''
        resultado.innerHTML= ''
        vida.innerHTML= ''
        nivel.innerHTML= ''
        nivel2.innerHTML= ''
        apresentacao.innerHTML =
        
        `<div id='descricao'>
        <div id='nome'>
        `+ json.data[nome].name + '. ' + json.data[nome].title + `
        </div>
        <div>
        `+ json.data[nome].lore + `
        </div>
        <div id='status'>
        <p>Poder de Ataque: `+ json.data[nome].info.attack + `</p>
        <p>Poder de Defesa: `+ json.data[nome].info.defense + `</p>
        <p>Poder de Magia: `+ json.data[nome].info.magic + `</p>
        <p>Dificuldade: `+ json.data[nome].info.difficulty + `</p>
        </div>
        </div>`
        
        
        resultado.innerHTML =
        `<div function="mudaimg()" ><img id="img" src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${busca}_${cont}.jpg'></div>`
        
        var j = []
        
        for (skin in json.data[nome].skins) {
            j.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${busca}_`+json.data[nome].skins[skin].num+`.jpg`)   
        }
        
        var maxJ = j.length
        var cont1 = 0;
        
        setInterval(function mudaimg(){
            
            if(cont1 == maxJ -1){
                cont1 = 0;
            }else{
                cont1++;
            }
            
            document.getElementById('resultado').innerHTML = `<div><image src="`+j[cont1]+`"><div>`
            
        }, 5000)
        
        document.getElementById("vida1").innerHTML =
        
        
        `<div>
        <div><input type='number' id='lvl' placeholder='Mude o Nível' max='18' min='1' value='1' onkeydown='return false' onchange='lvl()' onChange:function(e)> </div>
        <div id="stats">
        <h2 id='niv'>Nível `+ 1 + `</h2>
        <p>Vida Base: `+ json.data[nome].stats.hp + `</p>
        <p>Velocidade de Movimento Base: `+ json.data[nome].stats.movespeed + `</p>
        <p>Alcance de Ataque Base: `+ json.data[nome].stats.attackrange + `</p>
        <p>Velocidade de Ataque Base: `+ json.data[nome].stats.attackspeed + `</p>
        <p>Dano de Ataque Base: `+ json.data[nome].stats.attackdamage + `</p>
        <p>Armadura Base: `+ json.data[nome].stats.armor + `</p>
        <p>Bloqueio de Resistência Mágica: `+ json.data[nome].stats.spellblock + `</p>
        <p>Quantidade de Mana Base: `+ json.data[nome].stats.mp + `</p>
        </div>
        </div>`
        
                                document.getElementById('ali').innerHTML += '<div><h2>Jogando com:</h2>'
                                for (var i in json.data[nome].allytips) {
                                    if (i <= 1) {
                                        document.getElementById('ali').innerHTML += '<div><div id="aliado"><p>' + json
                                        .data[nome].allytips[i] + '</p></div></div>'
                                    }
                                }
                                
                                
                                document.getElementById('ini').innerHTML += '<div><h2>Jogando contra:</h2>'
                                for (var i in json.data[nome].enemytips) {
                                    if (i <= 1) {
                                        document.getElementById('ini').innerHTML += '<div><div id="inimigo"><p>' + json
                                        .data[nome].enemytips[i] + '</p></div></div>'
                                    }
                                }
                                
                                document.getElementById("passivadesc").innerHTML =
                                `<p> Magia de Passiva: </p>
                                <img  style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${Passive}">                                
                                <p>`+ json.data[nome].passive.name + `</p>
                                <p>`+ json.data[nome].passive.description + `</p>
                                `
                                
                                for (var i in json.data[nome].spells) {
                                    document.getElementById('conteudomagia').innerHTML +=
                                    
                                    `<div id='magia` + [i] +`'><div id="infos` + [i] + `">
                                    <p id="abname`+ [i] + `" style="visibility: visible">` + '<span>Nome da Magia:  </span>' +  json.data[nome].spells[i].name + `</p>
                                    <p id="custo`+ [i] + `" style="visibility: visible">` + 'Custo: ' +  json.data[nome].spells[i].costBurn + `</p>
                                    <p id="cooldown`+ [i] + `" style="visibility: visible">` + 'Tempo de Recarga: ' +  json.data[nome].spells[i].cooldown + `</p>
                                    <p id="description`+ [i] + `" style="visibility: visible">` + json.data[nome].spells[i].description + `</p>
                                    </div><div id='separar'><br></div></div>`
                                    
                                    document.getElementById('magiaimg').innerHTML =
                                    `
                                    <a href='#magia0'><img style="width:100px; border-radius: 50%" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${Q}"></a>
                                    <a href='#magia1'><img style="width:100px; border-radius: 50%"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${W}"></a>
                                    <a href='#magia2'><img style="width:100px; border-radius: 50%"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${E}"></a>
                                    <a href='#magia3'><img style="width:100px; border-radius: 50%"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${R}"></a>`
                                    
                                    
                                }
                            }).catch(function () {
                                $("#lvl").hide()
                                $("#nomeC").css("background-color", "red")
                                alert("Champion Not Found!");
                            })
                        }

                        function lvl(){
                            var lvl = document.getElementById('lvl').value;
            
            
                            var asF = (json.data[nome].stats.attackspeed + (json.data[nome].stats.attackspeed *
                                json.data[nome].stats.attackspeedperlevel * (lvl - 1) * 0.01)).toFixed(2)
                                
                                
                                var spellbF = (json.data[nome].stats.spellblock + (json.data[nome].stats
                                    .spellblockperlevel * (lvl - 1)))
                                    
                                    
                                    var adF = (json.data[nome].stats.attackdamage + (json.data[nome].stats
                                        .attackdamageperlevel * (lvl - 1)))
                                        
                                        
                                        var armF = (json.data[nome].stats.armor + (json.data[nome].stats.armorperlevel * (
                                            lvl - 1)))
                                            
                                            
                                            var mpF = (json.data[nome].stats.mp + (json.data[nome].stats.mpperlevel * (lvl -
                                                1)))
                                                
                                                
                                                var hpF = (json.data[nome].stats.hp + (json.data[nome].stats.hpperlevel * (lvl -
                                                    1)))
                                                    
                                                    document.getElementById("stats").innerHTML =
                                                    
                                                    `
                                                    
                                                    <h2 id='niv'>Nível `+ lvl + `</h2>
                                                    <p>Vida: `+ hpF + `</p>
                                                    <p>Velocidade de Movimento: `+ json.data[nome].stats.movespeed + `</p>
                                                    <p>Distância de Ataque: `+ json.data[nome].stats.attackrange + `</p>
                                                    <p>Velocidade de Ataque: `+ asF + `</p>
                                                    <p>Dano de Ataque: `+ adF + `</p>
                                                    <p>Armadura: `+ armF + `</p>
                                                    <p>Quantidade de Resistência Magica: `+ spellbF + `</p>
                                                    <p>Quantidade de Mana: `+ mpF + `</p>
                                                    
                                                    `


                        }
                       