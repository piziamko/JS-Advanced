function solve() {
    const html = {
        numberField: document.getElementById("input"),
        convertTo: document.getElementById("selectMenuTo"),
        output: document.getElementById("result"),
        button: document.querySelector("#container > button"),
    }
    const makeOptions = arr =>
        arr.map(x => {
            const option = document.createElement("option")
            x = x.toLocaleLowerCase()
            option.value = x
            option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`
            return option
        })
    const print = n => (html.output.value = n)
    makeOptions(["binary", "hexadecimal"]).forEach(x => html.convertTo.add(x))

    function convert(to, n) {
        n = Number(n) || 0
        const formats = {
            binary: n => (n >>> 0).toString(2),
            hexadecimal: n => n.toString(16).toLocaleUpperCase(),
        }

        return formats[to](n)
    }

    html.button.addEventListener("click", () =>
        print(convert(html.convertTo.value, html.numberField.value))
    )
}

// Variant 2

function solve() {
    document.querySelector('#selectMenuTo option').textContent = 'Hexadecimal';
    document.querySelector('#selectMenuTo option').value = 'hexadecimal';
    const selectTo = document.getElementById('selectMenuTo');
    selectTo.innerHTML += '<option selected value="binary">Binary</option>';

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        let number = Number(document.getElementById('input').value);
        let convertTo = document.getElementById('selectMenuTo').value;
        const converting = {
            binary(number) {
                return number.toString(2);
            },
            hexadecimal(number) {
                return number.toString(16).toUpperCase();
            },
        };
        document.getElementById('result').value = converting[convertTo](number);
    }
}
