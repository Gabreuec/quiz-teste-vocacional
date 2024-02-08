function corrigir() {
    var pontA = 0;
    var pontB = 0;
    var pontC = 0;
    var pontD = 0;
    if (document.prova.q1[0].checked) {
        pontA++;
    }
    if (document.prova.q1[1].checked) {
           pontB++;
    }        
    if (document.prova.q1[2].checked) {
        pontC++;
    }
    if (document.prova.q1[3].checked) {
             pontD++;
    }
    if (document.prova.q2[0].checked) {
         pontA++;
    }
    if (document.prova.q2[1].checked) {
           pontB++;
    }        
    if (document.prova.q2[2].checked) {
        pontC++;
    }
    if (document.prova.q2[3].checked) {
           pontD++;
    }
    if (document.prova.q3[0].checked) {
         pontA++;
    }
    if (document.prova.q3[1].checked) {
           pontB++;
    }        
    if (document.prova.q3[2].checked) {
         pontC++;
    }
    if (document.prova.q3[3].checked) {
            pontD++;
        }
    if (document.prova.q4[0].checked) {
                 pontA++;
            }
    if (document.prova.q4[1].checked) {
         pontB++;
            }        
    if (document.prova.q4[2].checked) {
                pontC++;
            }
    if (document.prova.q4[3].checked) {
                     pontD++;
            }
    if (document.prova.q5[0].checked) {
                pontA++;
            }
    if (document.prova.q5[1].checked) {
                   pontB++;
            }        
    if (document.prova.q5[2].checked) {
               pontC++;
            }
    if (document.prova.q5[3].checked) {
                  pontD++;
            }        
            var resultado;
            var img = document.createElement('img');
            if (pontA >= pontB && pontA >= pontC && pontA >= pontD) {
                resultado = "Redes";
                img.src ='Redes.jpg';
            } else if (pontB >= pontA && pontB >= pontC && pontB >= pontD) {
                resultado = "Programação";
                img.src ='Progrmacao.jpg';
            } else if (pontC >= pontA && pontC >= pontB && pontC >= pontD) {
                resultado = "Design"
                img.src ='design.jpg';
            }else{
                resultado = "Segurança da informação";
                img.src ='Seguranca.webp';
            }
  
    var res = document.getElementById("resultado");
    res.innerHTML = "Você tem vocação para cursar: " + resultado;
    res.appendChild(img);
    
}
            
    
  
  
