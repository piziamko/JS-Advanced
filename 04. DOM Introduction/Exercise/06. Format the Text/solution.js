// function solve() {
//   let divOutputElement = document.getElementById('output');
//   let inputTextareaElement = document.getElementsByTagName('textarea')[0];
//   let all = inputTextareaElement.value.split('.');
//   all.pop();

//   while (all.length > 0) {
//     let paragraphText = all.splice(0, 3).join('.') + '.';
//     let newParagraph = document.createElement('p');
//     newParagraph.textContent = paragraphText;
//     divOutputElement.appendChild(newParagraph);
//   }
// }

//Variant 2 

function solve() {
    const text = document.getElementById('input').value;
    const sentences = text.split('.').filter(x => x);
    const output = document.getElementById('output');
    output.innerHTML = ''
    for (let i = 0; i < sentences.length; i += 3) {
        output.innerHTML += `<p>${sentences.slice(i, i + 3).join('.')}.</p>`;
    }
}
