let noteList = [];

let view = "grid";                                                                  //default view is grid-view

function saveNote($event) {
    console.log("mim");
    event.preventDefault();
    var noteObj={
        'title':document.getElementById("noteTitle").value,
        'notes':document.getElementById("notes").value
    }
    clearFields();
    updateNoteData(noteObj);
}

function updateNoteData(note) {
    noteList.push(note);
    fetchNotes();
}
function deleteNote(note) {
    for(var i=0;i<noteList.length;i++){
        if(note==noteList[i].title){
            console.log(note);
            break;
        }
    }
    noteList.splice(i,1);noteList=                                                          //1,3,4,5
    fetchNotes();
    
}

function clearFields() {
    document.getElementsByTagName("form")[0].reset();
}

function fetchNotes() {
    var container=document.getElementById("note-container");
    while(container.lastChild){
        container.lastChild.remove();
    }
    container.style.border="3px solid #e7f1ff";
    container.style.backgroundColor="pink";

    for(let i of noteList){                                                                 //1,3,4,5
        var card=document.createElement("div");
        card.style.margin="10px";
        card.style.padding="10px";
        card.setAttribute("class","card")
        
        var div1=document.createElement("h3");
        div1.innerText=i.title;
        div1.style.backgroundColor="#98ccd4";
        card.appendChild(div1);

        var div2=document.createElement("p");
        div2.innerText=i.notes;
        div2.style.backgroundColor="#ffe6f5";
        card.appendChild(div2);

        var div3=document.createElement("input");
        div3.setAttribute("type","button");
        div3.setAttribute("value","Delete Note")
        div3.style.backgroundColor="whitesmoke";
        div3.style.border="none";
        div3.style.borderRadius="5px";
        div3.style.padding="5px 15px";
        div3.style.width="150px";

        
        div3.addEventListener("click",()=>deleteNote(i.title));
        
        card.appendChild(div3);
        container.appendChild(card);
    }

    
}

function loadNoteData() {
    
}


function createNoteCard(note) {
    
}
var click = 1;
function toggleView() {
    click=0;
    if(click==0)
    {
        document.getElementById("note-container").style.display="block";
    }
    click=1;
}

