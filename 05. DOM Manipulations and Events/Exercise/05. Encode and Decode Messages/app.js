function encodeAndDecodeMessages() {
    const [encodeField, decodeField] = document.querySelectorAll("textarea")

    const transform = (str, type) =>
        str
            .split("")
            .map(x =>
                String.fromCharCode(
                    type === "encode"
                        ? x.charCodeAt(0) + 1
                        : x.charCodeAt(0) - 1
                )
            )
            .join("")

    document.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            if (e.target.textContent.includes("Encode")) {
                decodeField.value = transform(encodeField.value, "encode")
                encodeField.value = ""
            } else {
                decodeField.value = transform(decodeField.value, "decode")
            }
        }
    })
}

// Variant 2 

function encodeAndDecodeMessages() {
    const textInputElement = document.querySelector('div:first-of-type textarea');
    const textOutputElement = document.querySelector('div:nth-of-type(2) textarea');

    const buttonEncodeElement = textInputElement.nextElementSibling;
    const buttonDecodeElement = textOutputElement.nextElementSibling;

    buttonEncodeElement.addEventListener('click', () => {
        textOutputElement.value = textInputElement.value
            .replace(/./g, char => String.fromCharCode(char.charCodeAt() + 1));
        textInputElement.value = '';
    });

    buttonDecodeElement.addEventListener('click', () => {
        textOutputElement.value = textOutputElement.value
            .replace(/./g, char => String.fromCharCode(char.charCodeAt() - 1));
    });
}
