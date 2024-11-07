export default function json2html(data) {
    const headers = ["Name", "Age", "Gender"];
    let table = `<table data-user="karthikkrishnanbs@gmail.com">`;
    table += "<thead><tr>";
    
    headers.forEach(header => {
        table += `<th>${header}</th>`;
    });
    table += "</tr></thead><tbody>";
    
    data.forEach(row => {
        table += "<tr>";
        headers.forEach(header => {
            table += `<td>${row[header] || ""}</td>`;
        });
        table += "</tr>";
    });
    
    table += "</tbody></table>";
    return table;
}
