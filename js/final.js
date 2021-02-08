function highlight(id) {
    // document.getElementById('welcome').style.color='#D8D46C'
    // document.getElementById('getting-started').style.color='#D8D46C'
    // document.getElementById('what-you-need').style.color='#D8D46C'
    // document.getElementById('htb').style.color='#D8D46C'
    index = document.getElementById('homeContent');
    subheadings = index.getElementsByTagName('h2');
    for (i = 0; i < subheadings.length; i++) {
        subheadings[i].style.color = '#D8D46C';
        subheadings[i].style.textDecoration = 'none'
    }
    console.log(subheadings);
    document.getElementById(id).style.color = '#ffffff';
    document.getElementById(id).style.textDecoration = 'underline';
}
selected = false;
selectedCell = null;
selectedText = null;
function showChord(chord) {
    if (selected == false) {
        selected = true;
    }
    else {
        showText(selectedCell, selectedText);
        selected = true;
    }
        cell = document.getElementById(chord);
        text = cell.innerHTML;
        cell.innerHTML= '<img src="images/' + chord + '.png" alt="">';
        console.log(cell.innerHTML);
        cell.onclick = function(){ showText(chord, text); };
        cell.style.backgroundColor = "#D8D46C";
        cell.onmouseout = null;
        selectedCell = chord;
        selectedText = text;
    

}
function showText(chord, text) {
    cell = document.getElementById(chord);
    cell.innerHTML = text;
    cell.onclick = function(){ showChord(chord); }
    cell.style.backgroundColor = "black";
    cell.style.color = "#D8D46C"
    cell.onmouseover = function() {
        this.style.backgroundColor = "#D8D46C";
        this.style.color = "black";
    };
    cell.onmouseout = function() {
        this.style.backgroundColor = "black";
        this.style.color = "#D8D46C"
    };
    
}
function toggleView(id) {
    x = document.getElementById(id);
    if (x.style.height == 0 || x.style.height == '0px') {
        x.style.height = 'fit-content';
    }
    else {
        x.style.height = '0px';
    }
}
function showVid(id) {
    x = document.getElementById(id);
    if (x.style.height == 0 || x.style.height == '0px') {
        x.style.height = '315px';
    }
    else {
        x.style.height = '0px';
    }
}
function validateForm() {
    var valid = true;
    var fname = document.forms[0].fname.value;
    var comments = document.forms[0].comments.value;
    document.forms[0].fname.style.border = '2px solid #D8D46C';
    document.forms[0].comments.style.border = '2px solid #D8D46C';
    if (fname == "") {
        alert('Please enter your name');
        document.forms[0].fname.style.border = '2px solid red';
        valid = false;
    }
    if (comments == "") {
        if (valid) {
            alert('Please enter a comment');
        }
        document.forms[0].comments.style.border = '2px solid red';
        valid = false;
    }
    if (valid == false) {
        return false;
    }
    else {
        alert("Your comment has been submitted. Thank you.");
        return true;
    }
}