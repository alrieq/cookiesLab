const initLikes = 100;
const initDislikes = 20;

let upcount = initLikes;
let downCount = initDislikes;

let likesElem= document.getElementById("likeBtn");
let dislikesElem= document.getElementById("dislikeBtn");
likesElem.innerText = '👍' +initLikes;
dislikesElem.innerText = '👎' +initDislikes;

window.onload = function (){
    if(document.cookie && document.cookie.indexOf('voted') > -1){
        disabledBTN();
    }
}
function doLike(){
    upcount++;
    likesElem.innerText = '👍' + upcount;
    disabledBTN();
    setCookie();
}
function doDislike(){
    downCount++;
    dislikesElem.innerText = '👎' +downCount;
    disabledBTN();
    setCookie();
}

function disabledBTN(){
    likesElem.disabled = true;
    dislikesElem.disabled = true;
    
}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age="+60;
}