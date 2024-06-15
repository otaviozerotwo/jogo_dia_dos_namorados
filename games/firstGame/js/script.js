let perguntas = [
  {
    titulo: 'Qual desculpa eu dei pra te chamar no Whatsapp pela primeira vez?',
    alternativas: ['Perguntei se a impressora tava funcionando', 'Saber qual versão do Illustrator instalar na máquina', 'Saber qual versão do Corel instalar na máquina', 'Te chamei pra caminhar'],
    correta: 2
  },
  
  {
    titulo: 'Selecione a opção correspondente a um lugar que usávamos para nos pegar/almoçar',
    alternativas: ['Cantinho do amor', 'Porta das idosas', 'Cantinho da pegação', 'Cantinho das velhinhas'],
    correta: 3
  },
  
  {
    titulo: 'Selecione uma gíria bem ridícula que eu usava lá no inicínio do namoro',
    alternativas: ['Pega a visão', 'É nois que voa', 'Suave na nave', 'Podecrer'],
    correta: 1
  },
  
  {
    titulo: 'Qual o nome do primeiro animê que eu te recomendei e você viu?',
    alternativas: ['A voz do silêncio', 'Death Note', 'Dragon Ball', 'Aku no Hana'],
    correta: 0
  },
  
  {
    titulo: 'Qual era a sobremesa na primeira vez que fui a casa dos seus pais?',
    alternativas: ['Doce de leite', 'Queijo + Goiabada', 'Pudim', 'Doce de figo'],
    correta: 1
  },
]
  
let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
  
    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },
  
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
  
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 5){
                location.href = "../gameOver/gameOver.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "../firstGame/firstGame.html";
            }
        }
    },
  
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 9)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }
}

app.start();