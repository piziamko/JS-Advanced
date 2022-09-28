
function create(words) {
    for (let word of words) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = word;
        p.style.display = "none";
        div.appendChild(p);
        div.addEventListener("click", showP);
        document.getElementById("content").appendChild(div)
    }
    
    function showP(event) {
        if (event.target.nodeName === "P") {
            return
        }
        let p = event.target.children[0];
        p.style.display = "block"
    }
}

// Variant 1

// function create(arr) {
//     const elements = []
//     const output = document.getElementById("content")

//     function eFactory(tag, content = "") {
//         const temp = document.createElement(tag)
//         temp.innerHTML = content

//         return temp
//     }

//     arr.forEach(x => {
//         const div = eFactory("div")
//         const p = eFactory("p", x)
//         p.style.display = "none"
        
//         div.appendChild(p)
//         div.addEventListener("click", () => (p.style.display = "block"))
//         elements.push(div)
//     })

//     elements.forEach(x => output.appendChild(x))
// }

// Variant 2

function create(strings) {

    function display(e) {
        e.target.firstChild.style.display = 'inline-block';
    }

    for (const string of strings) {
        const currentPElement = document.createElement('p');
        currentPElement.textContent = string;
        currentPElement.style.display = 'none';

        const currentDivElement = document.createElement('div');
        currentDivElement.appendChild(currentPElement);
        currentDivElement.addEventListener('click', display);

        document.getElementById('content').appendChild(currentDivElement);
    }

}
