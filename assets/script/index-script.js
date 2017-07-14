function beginUI(){
  this.createConInsBody = function(){
    var bodyElm = document.body;
    var conDiv = document.createElement('div');
    conDiv.setAttribute('id', 'container');
    bodyElm.appendChild(conDiv);
  };

  this.createP = function(par){
    var conDiv = document.getElementById('container');
    var p = document.createElement('p');
    var pText = document.createTextNode(par);
    p.appendChild(pText);
    conDiv.appendChild(p);
  };

  this.createBtnStart = function(){
    var conDiv = document.getElementById('container');
    var btn = document.createElement('button');
    //btn.setAttribute('id', 'btnStart');
    var btnText = document.createTextNode('Kuy mulai!');
    btn.appendChild(btnText);
    conDiv.appendChild(btn);
    btn.addEventListener('click', function(){
      quizMaster();
    });
  };

  var p = 'Kuis ini cukup mudah, anda hanya diharuskan menjawab 10 soal bineri 8-bit ke bilangan desimal (0-255).';
  var p1 = 'Jika anda menjawab benar 1 soal maka skor +10, jika salah maka skor anda -5.';
  this.createConInsBody();
  this.createP(p);
  this.createP(p1);
  this.createBtnStart();
}

beginUI();
