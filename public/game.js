userChoices = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
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
    document.getElementById("background").style.display = "none";
    document.getElementById("current-article").style.display = "block";
    document.getElementById("userMenu").style.display = "block";
    toggleChararcter();
}