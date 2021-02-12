/*var j = []

function runas(){
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/Aatrox.json`)
    .then(res => res.json())
    .then(json => {
        backup = json
        document.getElementById('section').innerHTML += `<div>` + json.data.enemytips + `</div>`
        
    })
    
}
runas()*/

const g1 = document.getElementById('g1')
const g2 = document.getElementById('g2')
const g3 = document.getElementById('g3')
const g4 = document.getElementById('g4')
const g5 = document.getElementById('g5')
const g6 = document.getElementById('g6')
const g7 = document.getElementById('g7')
const g8 = document.getElementById('g8')
const g9 = document.getElementById('g9')
const g10 = document.getElementById('g10')
const g11 = document.getElementById('g11')
const g12 = document.getElementById('g12')
const g13 = document.getElementById('g13')
const g14 = document.getElementById('g14')

g1.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Gank ou 'gankar' é o ato de emboscar um ou mais adversários de surpresa no League of Legends, usando de superioridade numérica para derrotá-los com mais facilidade. A técnica funciona muito bem contra adversários muito avançados ou fora de posição, que se tornam presas fáceis para o Jungle.</p></div>`
})

g2.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Cait ou "caitar" é a jogada em que o atirador dispara contra o inimigo enquanto se afasta dele. A técnica é ideal para continuar causando dano, enquanto mantém boa distância de campeões capazes de vencer combates de curta distância.</p>
    </div>`
})

g3.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Mais comum no final das partidas, o Pick Off é o ato de isolar um dos campeões rivais para tornar o combate contra ele mais fácil. Essa é uma boa alternativa para equipes em desvantagem no placar, que perderiam um embate time contra time.</p>
    </div>`
})

g4.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Wardar é o ato de posicionar uma sentinela ou totem de vigilância em algum ponto do mapa de League of Legends. Esses itens garantem visão completa da área escolhida, e ajudam a evitar emboscadas dos rivais.</p>
</div>`
})

g5.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Black Door: A gíria faz referência a jogadas em que um ou mais jogadores que conseguem passar despercebidos pelos adversários e derrubar torres ou até mesmo o Nexus. Isso geralmente acontece a favor de um time que está sendo pressionado contra sua base.</p>
</div>`
})

g6.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Leash é usado para descrever a técnica em que outro campeão ajuda o Jungle a derrotar os monstros da selva. Assim, o processo se torna mais rápido e o Jungle perde menos de sua barra de vida.</p>
</div>`
})

g7.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Poke é o termo usado para descrever pequenos ataques não-letais aos campeões inimigos. Geralmente esses golpes são desferidos enquanto um adversário avança em direção a um minion, e servem para drenar sua vida lentamente e facilitar um eventual gank.</p>
</div>`
})

g8.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Split push:A gíria é usada para descrever a estratégia de focar os seus esforços em derrotar as tropas inimigas o mais rapidamente possível. Assim, será mais fácil chegar até a torre inimiga e até mesmo derrubá-la enquanto o seu time enfrenta os outros jogadores.</p>
</div>`
})

g9.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Smurfs são jogadores experientes de League of Legends que criam novas contas com o intuito de enfrentar jogadores novatos ou de elos inferiores. Considerada por muitos uma trapaça, a técnica é bastante usada para preservar o seu ranking quando for jogar com amigos.</p>
</div>`
})

g10.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>CC é a singla para crowd control, ou controle de grupo. Tratam-se de habilidades que afetam a mobilidade dos campeões adversários, como paralisia, atordoamento, enraizamento, lentidão, provocação e arremesso.</p>
</div>`
})

g11.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Engage tem exatamente o mesmo significado de iniciação, que é o ato de começar um combate contra o time rival usando uma ou mais habilidades, geralmente de crowd control, e aproveitando seu efeito para investir contra o campeão.</p>
</div>`
})

g12.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Ace é um termo usado para descrever quando uma equipe inteira é eliminada. É um feito importante para um dos times conseguir eliminar a equipe rival por completo em uma partida de LoL.</p>
</div>`
})

g13.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Quando um membro da equipe protege um aliado para que ele possa fazer dano, o ato é conhecido como Peel. É um meio de proteção importante para aumentar o potencial de causar dano de um dos membros do time.</p>
</div>`
})

g14.addEventListener('click', function (){
    document.getElementById('caixa').innerHTML = ""
    document.getElementById('caixa').innerHTML += `<div class='caixa'>
    <p>Freezar é o ato de paralisar o avanço da sua onda de minions, apenas desferindo o último golpe para garantir o gold e experiência. Dessa forma, você dificultará o farm do seu adversário, já que ele vai ficar exposto aos seus ataques.</p>
</div>`
})

