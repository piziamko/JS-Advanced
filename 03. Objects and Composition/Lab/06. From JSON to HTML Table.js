function solve(json) {
    let parsed = JSON.parse(json);
    
    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    
    let result = '<table>\n';
    
    appendHeaders(columnNames);
    appendValues(values);
    
    result += '</table>';
    
    function appendHeaders(columnNames) {
        result += `    <tr>`
        
        for (let columnName of columnNames) {
            result += `<th>${columnName}</th>`     
        }
        result += `</tr>\n`
    }
    
    function appendValues(values) {
        
        for (let value of values) {
            result += `    <tr>`
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`
            result += `</tr>\n`
        }
    }
    
    function escape(value) {
        return value.toString().replace('<', '&lt;').replace('>', '&gt;');
    }
    
    console.log(result);
}

fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
fromJSONToHTMLTable('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]');

// Variant 2 
function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    console.log(outputArr.join('\n'));

    function makeKeyRow(arr) {
        let result = '  <tr>';
        Object.keys(arr[0]).forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }

    function makeValueRow(obj) {
        let result = '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
fromJSONToHTMLTable('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]');
