

// Classic XHR
if (window.XMLHttpRequest){
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    try{
        request = new ActiveXObject('Msxml2.XMLHTTP');
    }
    catch (e){
        try{
        request = new ActiveXObject('Microsoft.XMLHTTP');    
       }
       catch (e){}
    }
}

//Opend, send.
request.open('GET', 'https://api.github.com/users/google/repos', true);
request.send(null);

request.onreadystatechange = function(state){
    if(request.readyState === 4){
        console.log(JSON.parse(request.response));
    }
}