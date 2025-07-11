let string="";

let input=document.querySelector("input");

let buttons=document.querySelectorAll(".buttons");

let a = Array.from(buttons)

for(i=0;i<a.length;i++){
    a[i].addEventListener("click", function(e){
        

        if(e.target.innerText==="="){
            string=eval(string);
            input.value=string;

        }
        else if(e.target.innerText==="C"){
            string="";
            input.value=string;
        }
        else{
            string=string+e.target.innerText;
            input.value=string;

        }
    });
}

