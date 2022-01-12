// Função do Botão de Mostrar e voltar

function back(){
    document.getElementById('codigo').innerHTML =  
    
    '<button onclick="abrir()">Ler Código</button>'
;}

function back2(){
    document.getElementById('codigo2').innerHTML =  
    
    '<button onclick="abrir2()">Ler Código</button>'
;}

function back3(){
    document.getElementById('codigo3').innerHTML =  
    
    '<button onclick="abrir3()">Ler Código</button>'
;}

function back4(){
    document.getElementById('codigo4').innerHTML =  
    
    '<button onclick="abrir4()">Ler Código</button>'
;}


// Mostrar código!

function abrir(){
document.getElementById('codigo').innerHTML = 

'<span2> img{ <br> border: 2px solid blue; <br> } <br><br> <button onclick="back()">Fechar</button></span2>'

;}

function abrir2(){
document.getElementById('codigo2').innerHTML = 

'<span2> img{ <br> border: 2px solid blue; <br> box-shadow: 0px 0px 15px gold; <br> } <br><br> <button onclick="back2()">Fechar</button></span2>'

;}

function abrir3(){
document.getElementById('codigo3').innerHTML = 

'<span2> img{ <br> border: 2px solid blue;  <br> } <br><br> img:hover{<br> border: 2px solid rgb(0, 136, 248); <br> box-shadow: 0px 0px 15px gold; <br>  transition: border 0.3s, box-shadow 0.3s; <br>}  <br><br> <button onclick="back3()">Fechar</button></span2>'

;}

function abrir4(){
document.getElementById('codigo4').innerHTML = 

'<span2> img{ <br> border: 2px solid blue;  <br> } <br><br> img:hover{<br> border: 2px solid rgb(0, 136, 248); <br> border-radius: 15px;  <br> box-shadow: 0px 0px 15px gold; <br> transition: border 0.3s, box-shadow 0.3s, border-radius 0.3s; <br>}  <br><br> <button onclick="back4()">Fechar</button></span2>'

;}