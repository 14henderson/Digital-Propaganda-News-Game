userChoices = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
userCharacter = "mike";
characterShowing = false;
sourceShowing = false;

function openSelection(category){
    document.getElementById("tile-choice").style.display = "block";
    document.getElementById("title-choice-title").innerHTML = "Selection for: "+tileMetadata[category][0];

    if(tileMetadata[category][1] == 1){
        document.getElementById("choice-article-1").innerHTML = `<span>${cards[category][0]}</span>`;
        document.getElementById("choice-article-2").innerHTML = `<span>${cards[category][1]}</span>`;
        document.getElementById("choice-article-3").innerHTML = `<span>${cards[category][2]}</span>`;
        document.getElementById("choice-article-4").innerHTML = `<span>${cards[category][3]}</span>`;
    }
    
    if(tileMetadata[category][1] == 2){
        document.getElementById("choice-article-1").innerHTML = `
            <span id='choice-article-section-header'>${cards[category][0][0]}</span>
            <br>
            <span>${cards[category][0][1]}</span>`;
        document.getElementById("choice-article-2").innerHTML = `
            <span id='choice-article-section-header'>${cards[category][1][0]}</span>
            <br>
            <span>${cards[category][0][1]}</span>`;
        document.getElementById("choice-article-3").innerHTML = `
            <span id='choice-article-section-header'>${cards[category][2][0]}</span>
            <br>
            <span>${cards[category][0][1]}</span>`;
        document.getElementById("choice-article-4").innerHTML = `
            <span id='choice-article-section-header'>${cards[category][3][0]}</span>
            <br>
            <span>${cards[category][0][1]}</span>`;
    }
    document.getElementById("choice-article-1").setAttribute("onclick", `makeSelection('${category}', 0)`);
    document.getElementById("choice-article-2").setAttribute("onclick", `makeSelection('${category}', 1)`);
    document.getElementById("choice-article-3").setAttribute("onclick", `makeSelection('${category}', 2)`);
    document.getElementById("choice-article-4").setAttribute("onclick", `makeSelection('${category}', 3)`);
}





function makeSelection(category, selectionIndex){
    document.getElementById("tile-choice").style.display = "none";

    userChoices[tileMetadata[category][3]] = selectionIndex;

    tileID = tileMetadata[category][2];
    document.getElementById(tileID).classList.remove("empty");
    document.getElementById(tileID).classList.add("full");

    if(category == "titles"){
        document.getElementById(tileID).innerHTML = `<span id="article-title">${cards[category][selectionIndex]}</span>`;
    }else if(tileMetadata[category][1] == 1){
        document.getElementById(tileID).innerHTML = `<span>${cards[category][selectionIndex]}</span>`;
    }else if(tileMetadata[category][1] == 2){
        document.getElementById(tileID).innerHTML = `
        <span id='choice-article-section-header'>${cards[category][selectionIndex][0]}</span>
        <br>
        <span>${cards[category][selectionIndex][1]}</span>`;
    }
}

function toggleChararcter(){
    if(characterShowing){
        document.getElementById(userCharacter).style.display = "none";
        document.getElementById(userCharacter).style.zIndex = -1;
        document.getElementById("showCharacter").innerHTML = "<span>Show Character</span>";
        characterShowing = false;
    }else{
        document.getElementById(userCharacter).style.display = "block";
        document.getElementById("source").style.zIndex = 9;
        document.getElementById(userCharacter).style.zIndex = 10;
        document.getElementById("showCharacter").innerHTML = "<span>Hide Character</span>";
        characterShowing = true;
    }
}

function toggleSource(){
    if(sourceShowing){
        document.getElementById("source").style.display = "none";
        document.getElementById("source").style.zIndex = -1;
        document.getElementById("showSource").innerHTML = "<span>Show Source</span>";
        sourceShowing = false;
    }else{
        document.getElementById("source").style.display = "block";
        document.getElementById(userCharacter).style.zIndex = 9;
        document.getElementById("source").style.zIndex = 10;
        document.getElementById("showSource").innerHTML = "<span>Hide Source</span>";
        sourceShowing = true;
    }
}

function toBackground(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("background").style.display = "block";
}

function toGame(){
    let characters = ["dennis", "mike", "dannaandfox", "paula"]
    userCharacter = characters[Math.floor(Math.random() * 4)];


    document.getElementById("background").style.display = "none";
    document.getElementById("current-article").style.display = "block";
    document.getElementById("userMenu").style.display = "block";
    toggleChararcter();
}

function finish(){
    for (let i = 0; i < userChoices.length-1; i++) {
        if(userChoices[i] == answers[userCharacter][i]){
            document.getElementById(`article-${i+1}`).style.background = "linear-gradient(15deg, rgb(52, 232, 32) 50%, rgb(45, 228, 24) 50%)";
        }else{
            document.getElementById(`article-${i+1}`).style.background = "linear-gradient(15deg, rgb(237, 36, 75) 50%, rgb(218, 18, 58) 50%)";
        }
    }
}

function openImages(){
    document.getElementById("tile-choice").style.display = "block";
    document.getElementById("title-choice-title").innerHTML = "Selection for: "+tileMetadata["images"][0];

    document.getElementById("choice-article-1").style.padding = 0;
    document.getElementById("choice-article-2").style.padding = 0;
    document.getElementById("choice-article-3").style.padding = 0;
    document.getElementById("choice-article-4").style.padding = 0;
    document.getElementById("choice-article-1").innerHTML = `<img src="${cards["images"][0]}" class="article-image"/>`;
    document.getElementById("choice-article-2").innerHTML = `<img src="${cards["images"][1]}" class="article-image"/>`;
    document.getElementById("choice-article-3").innerHTML = `<img src="${cards["images"][2]}" class="article-image"/>`;
    document.getElementById("choice-article-4").innerHTML = `<img src="${cards["images"][3]}" class="article-image"/>`;

    
    document.getElementById("choice-article-1").setAttribute("onclick", `makeImageSelection(0)`);
    document.getElementById("choice-article-2").setAttribute("onclick", `makeImageSelection(1)`);
    document.getElementById("choice-article-3").setAttribute("onclick", `makeImageSelection(2)`);
    document.getElementById("choice-article-4").setAttribute("onclick", `makeImageSelection(3)`);
}

function makeImageSelection(selectionIndex){
    document.getElementById("tile-choice").style.display = "none";
    document.getElementById("choice-article-1").style.padding = "10px";
    document.getElementById("choice-article-2").style.padding = "10px";
    document.getElementById("choice-article-3").style.padding = "10px";
    document.getElementById("choice-article-4").style.padding = "10px";

    userChoices[tileMetadata["images"][3]] = selectionIndex;

    tileID = tileMetadata["images"][2];
    document.getElementById(tileID).classList.remove("empty");
    document.getElementById(tileID).classList.add("full");
    
    document.getElementById(tileID).innerHTML = `<img src="${cards["images"][selectionIndex]}" class="article-image"/>`;
   
}