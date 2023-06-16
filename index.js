let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
        // console.log(tablink)
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        console.log(tabcontent)
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}
let sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}
const scriptURL = "https://script.google.com/macros/s/AKfycbyLfr29yBpiQMi4eOsNiK7i5ehvSeVO5ad9dLZJfC4x67XDTOtu65B2AJCm9FlrNgA9Iw/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            alert("Message sent successfully")
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000)
            form.reset()
        })
        .catch(error => {
            msg.innerHTML = "Sorry! Your message is not send"
        })
})
// [ "A Full-Stack Web Developer.", "A NodeJS Developer.", "A Problem Solver." ]
function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}
const el = document.getElementById("typerwriter")
const phrases = [ "A Full-Stack Web Developer.", "A ReactJS Developer.", "A Problem Solver." ]
let sleepTime = 100;
let curPhraseIndex = 0;
const writeLoop = async () =>{
    while(true){
        let curWord = phrases[curPhraseIndex];
        for(let i=0;i<curWord.length;i++){
            el.innerText = curWord.substring(0,i+1 );
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10)

        for(let i=curWord.length;i>0;i--){
            el.innerText = curWord.substring(0,i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5)
        if(curPhraseIndex===phrases.length-1){
            curPhraseIndex=0; 
        }
        else{
            curPhraseIndex++
        };
    };
};
writeLoop();
