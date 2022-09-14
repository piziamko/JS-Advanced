function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName("button")
  const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
  const tableBody = document.querySelector("tbody")

  const htmlTemplate = ({ img, name, price, decFactor }) => {
      const row = document.createElement("tr")

      row.innerHTML = `<td><img src=${img}></td>
<td><p>${name}</p></td>
<td><p>${price}</p></td>
<td><p>${decFactor}</p></td>
<td><input type="checkbox"/></td>`

      return row
  }

  const generate = () =>
      JSON.parse(generateInput.value).forEach(x =>
          tableBody.appendChild(htmlTemplate(x))
      )

  const buy = () => {
      const braindeadData = Array.from(
          tableBody.querySelectorAll("input[type=checkbox]:checked")
      ).map(x =>
          Array.from(x.parentNode.parentNode.children)
              .slice(1, 4)
              .map(
                  x =>
                      Number(x.children[0].innerHTML) ||
                      x.children[0].innerHTML
              )
      )
      const getSum = arr => arr.reduce((a, v) => a + v, 0)

      const names = braindeadData.map(x => x[0]).join(", ")
      const prices = getSum(braindeadData.map(x => x[1]))
      const avFactors =
          getSum(braindeadData.map(x => x[2])) / braindeadData.length

      buyOutput.value = `Bought furniture: ${names}
Total price: ${prices.toFixed(2)}
Average decoration factor: ${avFactors}`
  }

  generateBtn.addEventListener("click", generate)
  buyBtn.addEventListener("click", buy)
}

// Variant 2

function solve() {
    const [furnitureInputElement, textareaBuyOutputElement] = document.querySelectorAll('textarea');
    const [buttonGenerateElement, buttonBuyElement] = document.querySelectorAll('button');

    buttonGenerateElement.addEventListener('click', () => {
        const furnitureList = JSON.parse(furnitureInputElement.value);
        const tbodyElement = document.querySelector('tbody');

        for (const furniture of furnitureList) {
            const htmlCodeToInsert = `<tr>
                                        <td><img src="${furniture.img}"></td>
                                        <td><p>${furniture.name}</p></td>
                                        <td><p>${furniture.price}</p></td>
                                        <td><p>${furniture.decFactor}</p></td>
                                        <td><input type="checkbox"/></td>
                                       </tr>`;
            tbodyElement.innerHTML += htmlCodeToInsert;
        }
    });

    buttonBuyElement.addEventListener('click', () => {
        const KEYS = ['name', 'price', 'decFactor'];
        const checkedElements = document.querySelectorAll('input:checked');
        const result = [];

        for (const element of checkedElements) {
            const allElementSiblings = Array.from(element.parentElement.parentElement.children).slice(1,-1);
            const boughtFurniture = {};
            for (let i = 0; i < 3; i++) {
                boughtFurniture[KEYS[i]] = allElementSiblings[i].children[0].textContent;
            }
            result.push(boughtFurniture);
        }

        const names = result.map(furniture => furniture.name);
        const totalPrice = result.map(furniture => furniture.price).reduce((acc, price) => acc + Number(price), 0);
        const averageDecFactor = result.map(furniture => furniture.decFactor).reduce((acc, df) => acc + Number(df), 0) / result.length;

        textareaBuyOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textareaBuyOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaBuyOutputElement.textContent += `Average decoration factor: ${averageDecFactor}`;
    });
}

