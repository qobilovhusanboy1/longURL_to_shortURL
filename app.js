
const btn = document.getElementById('long_to_shortURL')
const send  = document.getElementById('send')
const longURL = document.getElementById('longURL')
const copy_btn = document.getElementById('copy')

btn.addEventListener('click', short)
copy_btn.addEventListener('click', copyrigth)




async function short(){
  
    let shortURL = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL.value}`)

    let short = await shortURL.json()

    send.value = short.result.short_link
    short.result.short_link = ""

}




async function copyrigth(){
    window.navigator.clipboard.writeText(send.value)
}


    


