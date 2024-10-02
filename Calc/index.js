let display = document.querySelector('.display');
function append(value){
    if(display.value==0){
        display.value=value;
    }
    else{

        display.value+=value;
    }
}

function clearAll(){
    display.value='0';
}
function clearOne(){
    let value = display.value.slice(0,-1);
    display.value=value;
    if(display.value ==''){
        display.value='0';
    }

}
function calculate(){
    display.value= eval(display.value);
}

document.addEventListener('keydown',(e)=>{
    if(e.key=='0'||e.key=='1'||e.key=='2'||e.key=='3'||e.key=='4'||e.key=='5'||e.key=='6'||e.key=='7'||e.key=='8'||e.key=='9'||e.key=='.'){
        if(display.value=='0'){
            display.value=e.key;
        }
        else{

            display.value+=e.key;
        }
    }

    if(e.key=='+' ||e.key=='*'||e.key=='/' ||e.key=='%' && display.value!='0'){
        
        display.value+=e.key;
    }
    if(e.key=='-'){
        if(display.value=='0'){
            display.value='-';
        }
        display.value+=e.key;
    }

    if(e.key=="Backspace"){
        clearOne();
    }
    if(e.key=="Enter"){
        calculate();
    }
    if(e.key=='Delete'){
        clearAll();
    }

})