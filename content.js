/*
if(location.href!="https://badoo.com/encounters"){
    location.href="https://badoo.com/encounters"
}
*/

//document.querySelector('.start').addEventListener('click', function(){console.log('startstartstartstart')})
window.onload = function () {
    function start(){
        console.log('start')
        window.a = window.setInterval(e=>window.document.querySelectorAll('.profile-action--yes')[0].click(),1000);
    }
    function stop(){
        console.log('stop')
        clearInterval(window.a);
    }
    console.log('console.log(this)',this)
}

