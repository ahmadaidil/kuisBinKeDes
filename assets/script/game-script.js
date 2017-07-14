var skor = 0;
var flagSoal = 1;

function quizMaster(){

  this.rmCont = function(){
    var cont = document.getElementById('container');
    cont.remove();
  };

  this.createCont = function(){
    var bodyElm = document.body;
    var conDiv = document.createElement('div');
    conDiv.setAttribute('id', 'container');
    bodyElm.appendChild(conDiv);
  };

  this.quest = function(){
    rmCont();
    createCont();
    var conDiv = document.getElementById('container');
    var rand = Math.floor((Math.random() * 255) + 0);
    var bin = this.decToBiner(rand);
    var p = document.createElement('p');
    var pText = document.createTextNode('Soal '+flagSoal+'. Bilangan desimal dari bilangan biner ini '+bin+' adalah...');
    p.appendChild(pText);
    conDiv.appendChild(p);
    var inp = document.createElement('input');
    inp.setAttribute('id', 'ans');
    inp.setAttribute('type', 'number');
    inp.setAttribute('min', '0');
    inp.setAttribute('max', '255');
    conDiv.appendChild(inp);
    var btnAns = document.createElement('button');
    btnAns.setAttribute('id', 'btnAns');
    var btnText = document.createTextNode('Jawab!');
    btnAns.appendChild(btnText);
    conDiv.appendChild(btnAns);
    //var btnAns = document.getElementById('btnAns');
    btnAns.addEventListener('click', function(){
        console.log(inp.value);
        if(inp.value == '' || inp.value > 256){
          alert('Jawab yang bener bro!\n');
        }
        else{
          if(inp.value==rand){
            skor +=10;
          }
          else if(inp.value!=rand){
            skor -=5;
          }
          flagSoal += 1;
          if(flagSoal <= 10){
              answ();
          }
          else{
            flagSoal = 1;
            hasil();
          }
        }
    });
  };

  this.answ = function(){
    quizMaster();
  };

  this.hasil = function(){
    rmCont();
    createCont();
    var conDiv = document.getElementById('container');
    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode('Skor akhir anda adalah');
    h3.appendChild(h3Text);
    conDiv.appendChild(h3);
    var h1 = document.createElement('h1');
    var h1Text = document.createTextNode(skor);
    h1.appendChild(h1Text);
    if(skor<=0){
      h1.style.color = 'red';
    }
    else{
      h1.style.color = 'green';
    }
    conDiv.appendChild(h1);
    var btnHome = document.createElement('button');
    btnHome.setAttribute('id', 'btnHome');
    var btnHmText = document.createTextNode('Okay!');
    btnHome.appendChild(btnHmText);
    conDiv.appendChild(btnHome);
    btnHome.addEventListener('click', function(){
      skor = 0;
      rmCont();
      beginUI();
    });
  };

  this.decToBiner = function(randNum){
    var biner=[];
    for(var i=0; i<8; i++){
      biner.push(parseInt(randNum%2));
      randNum = parseInt(randNum/2);
    }
    biner = biner.reverse();
    return biner.join('').toString();
  };
  this.quest();
}
