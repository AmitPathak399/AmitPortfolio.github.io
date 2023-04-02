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
                setTimeout(()=>{
                    msg.innerHTML = "";
                },5000)
                form.reset()
            })
            .catch(error => {
                msg.innerHTML = "Sorry! Your message is not send"
            })
    })