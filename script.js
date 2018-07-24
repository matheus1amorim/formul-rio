let input = document.querySelectorAll('input');
let button =document.querySelector('button');

button.onclick = formulario;

function formulario(){
    
        if ( input[0].value == "") {
            alert("você não preencheu seu primeiro nome");
            }

            else if(input[1].value == ""){
                alert("você não preencheu seu sobrenome");
            }
            
            else if(input[2].value == ""){
                alert("você não preencheu seu email");
            }
            
            else if(input[3].value == ""){
                alert("você não preencheu sua senha");
            }
        
            else {
            alert(input[0].value +" "+ input[1].value +", você completou o cadastro! \n-Seu email é:"
            +input[2].value +"\n-Sua senha é:"+input[3].value );
            }
}