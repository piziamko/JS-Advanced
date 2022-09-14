function solve() {
    function onScreen(e) {
        e.preventDefault();
        const movieInputElements = document.querySelectorAll('#container input');
        const data = Array.from(movieInputElements)
            .map(x => x.value);
        if (data.some(x => !x.length) || isNaN(Number(data[2]))) return;
        for (const input of movieInputElements) input.value = '';
        const [name, hall, price] = data;
        document.querySelector('#movies ul').innerHTML +=
            `<li>
               <span>${name}</span>
               <strong>Hall: ${hall}</strong>
               <div>
                    <strong>${Number(price).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
               </div>
            </li>`;
    }
    document.querySelector('#container button').addEventListener('click', onScreen);

    function archive(e) {
        e.preventDefault();
        const liElement = e.target.parentElement.parentElement;
        const soldTickets = liElement.querySelector('input').value;
        if (e.target.tagName.toLowerCase() !== 'button' || soldTickets.length === 0 || isNaN(Number(soldTickets))) return;
        const buttonElement = liElement.querySelector('button');
        const divToDelete = liElement.querySelector('div');
        const sellsIncome = Number(soldTickets) * Number(liElement.querySelector('div strong').textContent);
        buttonElement.textContent = 'Delete';
        liElement.removeChild(divToDelete);
        liElement.appendChild(buttonElement);
        liElement.querySelector('strong').textContent = `Total amount: ${sellsIncome.toFixed(2)}`;
        document.querySelector('#archive ul').appendChild(liElement);
    }

    document.getElementById('movies').addEventListener('click', archive);

    function deleting(e) {
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === 'button') e.target.parentElement.remove();
    }
    document.querySelector('#archive ul').addEventListener('click', deleting);

    function deleteAll(e) {
        e.preventDefault();
        e.currentTarget.previousElementSibling.innerHTML = ''   }
    document.querySelector('#archive > button').addEventListener('click', deleteAll)
}

// Variant 2 

function solve() {
    const getInputField = n =>
        document.querySelector(`#container > input[type=text]:nth-child(${n})`)
    const inputs = [getInputField(1), getInputField(2), getInputField(3)]
    const html = {
        moviesList: document.querySelector("#movies > ul"),
        archivesList: document.querySelector("#archive > ul"),
    }

    const checkValidInput = (arr, num) =>
        arr.every(x => x !== "") && !isNaN(Number(num))
    const clearInputs = arr => arr.map(x => (x.value = ""))

    function onScreenTemplate(n, h, p) {
        const wrapper = document.createElement("li")

        wrapper.innerHTML = `<span>${n}</span><strong>Hall: ${h}</strong>
<div><strong>${p.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
<button>Archive</button></div>`

        return wrapper
    }

    function archivedTemplate(n, p) {
        const wrapper = document.createElement("li")

        wrapper.innerHTML = `<span>${n}</span>
<strong>Total amount: ${p.toFixed(2)}</strong>
<button>Delete</button>`

        return wrapper
    }

    document.addEventListener("click", e => {
        e.preventDefault()

        if (e.target.tagName === "BUTTON") {
            const [n, h, p] = inputs.map(x => x.value)

            const buttons = {
                "On Screen": () => {
                    if (checkValidInput([n, h, p], p)) {
                        clearInputs(inputs)
                        html.moviesList.appendChild(
                            onScreenTemplate(n, h, Number(p))
                        )
                    }
                },
                Archive: e => {
                    const ticketsSold = e.previousElementSibling.value

                    if (checkValidInput([ticketsSold], ticketsSold)) {
                        const parent = e.parentNode.parentNode
                        const name = parent.children[0].innerHTML
                        const price =
                            e.previousElementSibling.previousElementSibling
                                .innerHTML

                        html.archivesList.appendChild(
                            archivedTemplate(name, ticketsSold * Number(price))
                        )
                        parent.remove()
                    }
                },
                Delete: e => e.parentNode.remove(),
                Clear: () => (html.archivesList.innerHTML = ""),
            }

            buttons[e.target.textContent](e.target)
        }
    })
}
