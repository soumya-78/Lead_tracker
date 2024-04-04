
const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// localStorage.clear()
let myleads = []
let clickCount = 0;
let clickTimer;
// const tab = [
//     {url: "https://www.linkedin.com/in/azad-kumar-0a70b5209/"}
// ]

tabBtn.addEventListener("click",function(){

    // Remember that chorme tabs api run in extension enviroment only 
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        // console.log(tabs[0])
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderLeads()
    })
    // let URL = tab[0].url
    // myleads.push(URL)
    // localStorage.setItem("myleads",JSON.stringify(myleads))
    // renderLeads()
    // console.log(tab[0].url)
})
// myleads = JSON.parse(myleads)
// myleads.push("www.facebook.com")
// myleads = JSON.stringify(myleads)
// console.log(typeof myleads)
// let tempLead = ""


// localStorage.setItem("myleads",JSON.stringify(myleads))
// localStorage.clear()


saveBtn.addEventListener("click",function(){
    var tempLead = inputEl.value;
    myleads.push(tempLead)
    inputEl.value = "" //This is to clear the input box
    
    localStorage.setItem("myleads",JSON.stringify(myleads))
    

    // console.log(leadsFromLocalStorage)

    
    renderLeads()
    // for(let i = 0;i<myleads.length;i++){
        // var li = document.createElement("li")
        // ulEl.innerHTML += "<li>"+tempLead+"</li>"
        // const li = document.createElement("li")
        // li.textContent = tempLead
        // ulEl.append(li)

    // }
    
})


deleteBtn.addEventListener("dblclick", function() {
    
    localStorage.clear()
        
     myleads = []
     renderLeads()
    
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    console.log("ok")
    myleads = leadsFromLocalStorage
    renderLeads();
}



function renderLeads(){
    let listItems = ""
    for(let i = 0;i<myleads.length;i++){
            
            // listItems += "<li><a href = '"+myleads[i]+"' target = '_blank'>" + myleads[i] ;
            // template string
            listItems += `
            <li>
                <a href = '${myleads[i]}' target = '_blank'> ${myleads[i]}
                </a>
            </li>
            `
            // console.log(listItems)
        

        }
    ulEl.innerHTML = listItems
}


// console.log(ulEl)



