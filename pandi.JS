function demo(){
    var evennumber = document.getElementById('Trial').value
    if(evennumber%2==0){
        document.getElementById('result').innerHTML = 'evennumber'
    } else {
        document.getElementById('result').innerHTML = 'oddnumber'
    }
}
//range

function demo1(){
    var range = document.getElementById('trial1').value
    if(range < 200){
        document.getElementById('result1').innerHTML = 'within range'
    } else {
        document.getElementById('result1').innerHTML = 'not in range'
    }
}
//Variable is number or String
function demo2(){
    var number  = document.getElementById('trial2').value
    if(isNaN(number)){
        document.getElementById('result2').innerHTML = 'string'
    } else {
        document.getElementById('result2').innerHTML = 'number'
    }

}
//Triangle

function demo3(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value
    if(a==b && b==c){
        document.getElementById('result3').innerHTML = 'equalateral'
        
    }
    else if(a==b && b != c){
        document.getElementById('result3').innerHTML = 'isocelne'

    }
    else{
        document.getElementById('result3').innerHTML = 'scalene'
    }

}

//Large Number

function demo4(){
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value
    if(d > e){
        document.getElementById('result4').innerHTML = 'first input is large'
    }
    else if(d == e){
        document.getElementById('result4').innerHTML = ' equal'
    }
    else{
        document.getElementById('result4').innerHTML = 'second input is large' 

    }

}

//three number
function demo5(){
    var f = document.getElementById('f').value;
    var g = document.getElementById('g').value;
    var h = document.getElementById('h').value
    if(f>g && f>h){
        document.getElementById('result5').innerHTML = f + 'is large'
        
    }
    else if(g>f && g>h){
        document.getElementById('result5').innerHTML = g + 'is large'

    }
    else{
        document.getElementById('result5').innerHTML = h +  'is large'
    }

}


