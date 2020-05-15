let MANIFEST_DATA = chrome.runtime.getManifest();
let LOG_OUPUT = true;

function generateId(n){
    return randPassword = Array(n).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
}

function print( txt ){
    if( LOG_OUPUT )
        console.log(txt);
}


// ==== Page display functions ====
function deleteElementByClassName( classname ){
    let els = document.getElementsByClassName( classname );
    for( i = 0 ; i < els.length; i++ ){
        if( els[i] != null) els[i].style.display = "none";
    }
}

function deleteElementById( id ){
    let el = document.getElementById( id );
    if( el != null ) el.style.display = "none";
}

function clickButtons( classname ){
    let elems = document.getElementsByClassName(classname);
    let nElems = elems.length;
    for( let i = 0 ; i < nElems ; i++){
        elems[i].click();
    }
}


// ==== Main function ====
function closePopups(){

    switch( window.location.hostname ) {
        case "bloomberg.com":
        case "www.bloomberg.com":

            deleteElementById("paywall-banner");
            deleteElementByClassName("navi-push-notification-prompt");
            break;

        case "www.ft.com":

            clickButtons("o-banner__close");
            break;

        case "www.theguardian.com":

            deleteElementByClassName("contributions__epic");
            break;

        default:

    }

}

closePopups();
setInterval(()=>{
    closePopups();
},1000);
