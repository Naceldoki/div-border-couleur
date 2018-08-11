    function changeC(){

        var rouge = document.getElementById ("rouge");  
        
        if (rouge.value=='Rouge !') {  
         rouge.style.border="1px solid #FF0000";
        } 
        
        var bleu = document.getElementById ("bleu"); 
        
        if (bleu.value=='Bleu !') {  
         bleu.style.border="1px solid #0000FF";
        }
        
        var vert = document.getElementById ("vert"); 
        
         if (vert.value=='Vert !') {  
         vert.style.border="1px solid #008000";
        }
        
      }  
  
  changeC()