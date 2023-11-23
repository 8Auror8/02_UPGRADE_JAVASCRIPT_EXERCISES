let datos = [{
    "id": 1,
    "Name": "Orca",
    "Type": "video/x-mpeg",
    "color": "Khaki"
    }, {
    "id": 2,
    "Name": "White-throated kingfisher",
    "Type": "image/png",
    "color": "Turquoise"
    }, {
    "id": 3,
    "Name": "Great horned owl",
    "Type": "image/tiff",
    "color": "Red"
    }, {
    "id": 4,
    "Name": "Grouse, greater sage",
    "Type": "image/x-tiff",
    "color": "Crimson"
    }, {
    "id": 5,
    "Name": "Tarantula",
    "Type": "application/vnd.ms-excel",
    "color": "Mauv"
    }]

if(document.querySelector('.table-container')){

    var tableContainer = document.querySelector('.table-container');

    var table = document.createElement('table');
    tableContainer.appendChild(table);

    let header = document.createElement('tr');
    table.appendChild(header);

    let th1 = document.createElement('th');
    th1.innerHTML = 'id';
    let th2 = document.createElement('th');
    th2.innerHTML = 'Name';
    let th3 = document.createElement('th');
    th3.innerHTML = 'Type';
    let th4 = document.createElement('th');
    th4.innerHTML = 'Color';

    header.appendChild(th1);
    header.appendChild(th2);
    header.appendChild(th3);
    header.appendChild(th4);

    datos.forEach(item => {
        let row = document.createElement('tr');
        table.appendChild(row);

        let td1 = document.createElement('td');
        td1.innerHTML = item.id;
        row.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = item.Name;
        row.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = item.Type;
        row.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerHTML = item.Type;
        row.appendChild(td4);

    })

}




/* if(document.querySelector('.table-container')){
    var tableContainer = document.querySelector('.table-container');

    var table = document.createElement('table');
    tableContainer.appendChild(table)

    let thHeader = document.createElement('thHeader');
    table.appendChild(thHeader);

    let th1 = document.createElement('th1');
    th1.innerHTML = "id";

    let th2 = document.createElement('th2');
    th2.innerHTML = "Name";

    let th3 = document.createElement('th3');
    th3.innerHTML = "Type";

    let th4 = document.createElement('th4');
    th4.innerHTML = "Color";

    thHeader.appendChild(th1);
    thHeader.appendChild(th2);
    thHeader.appendChild(th3);
    thHeader.appendChild(th4);
}

 */
/* datos.forEach(item =>{
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td1 = document.createElement('td1');
    tr.appendChild(td1);
    td1.innerHTML = item.id;

    let td2 = document.createElement('td2');
    tr.appendChild(td2);
    td2.innerHTML = item.Name;

    let td3 = document.createElement('td3');
    tr.appendChild(td3);
    td3.innerHTML = item.Type;

    let td4 = document.createElement('td4');
    tr.appendChild(td4);
    td4.innerHTML = item.Type;
})

console.log(item.length); */