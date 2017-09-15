function jsonToHTMLTable(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);

    let headers = [];
    html += '   <tr>';
    for (let head in arr[0]) {
        headers.push(head);
        html += `<th>${htmlEscape(head)}</th>`;
    }

    html += '</tr>\n';

    for (let obj of arr) {
        html += '   <tr>';
        for (let head of headers) {
            html += `<td>` + htmlEscape(obj[head]) + `</td>`;
        }

        html += '</tr>\n';
    }


    return html + "</table>";

    function htmlEscape(text) {
        let result = text.toString();
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return result.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(jsonToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));