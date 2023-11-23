let food = [{
    "Name": "Horseradish Root",
    "Color": "Maroon",
    "Origin": "China",
    "ISBN": "003125923-5",
    "Healthy": false
  }, {
    "Name": "Peppercorns - Green",
    "Color": "Fuscia",
    "Origin": "Indonesia",
    "ISBN": "636267425-1",
    "Healthy": true
  }, {
    "Name": "Bread - Hamburger Buns",
    "Color": "Mauv",
    "Origin": "Philippines",
    "ISBN": "078599407-6",
    "Healthy": true
  }, {
    "Name": "Wine - Cotes Du Rhone Parallele",
    "Color": "Crimson",
    "Origin": "China",
    "ISBN": "525794985-7",
    "Healthy": true
  }, {
    "Name": "Cake - Night And Day Choclate",
    "Color": "Crimson",
    "Origin": "Japan",
    "ISBN": "474615715-4",
    "Healthy": true
  }, {
    "Name": "Blueberries",
    "Color": "Puce",
    "Origin": "Indonesia",
    "ISBN": "432248722-X",
    "Healthy": false
  }, {
    "Name": "Pepper - Black, Ground",
    "Color": "Teal",
    "Origin": "China",
    "ISBN": "355151761-4",
    "Healthy": true
  }, {
    "Name": "Liquid Aminios Acid - Braggs",
    "Color": "Pink",
    "Origin": "Indonesia",
    "ISBN": "696440174-1",
    "Healthy": false
  }, {
    "Name": "Table Cloth 53x69 White",
    "Color": "Turquoise",
    "Origin": "Zimbabwe",
    "ISBN": "687810013-5",
    "Healthy": true
  }, {
    "Name": "Icecream Bar - Del Monte",
    "Color": "Green",
    "Origin": "Iran",
    "ISBN": "765844590-8",
    "Healthy": false
  }]


if(document.querySelector('#container')){
    var container = document.querySelector('#container');

    var table = document.createElement('table');
    container.appendChild(table);

    let header = document.createElement('tr');
    table.appendChild(header);

    let th1 = document.createElement('th');
    th1.innerHTML = 'Name';
    header.appendChild(th1);

    let th2 = document.createElement('th');
    th2.innerHTML = 'Color';
    header.appendChild(th2);

    let th3 = document.createElement('th');
    th3.innerHTML = 'Origin';
    header.appendChild(th3);

    let th4 = document.createElement('th');
    th4.innerHTML = 'ISBN';
    header.appendChild(th4);

    let th5 = document.createElement('th');
    th5.innerHTML = 'Healthy'
    header.appendChild(th5);


    food.forEach(item => {
        let row = document.createElement('tr');
        table.appendChild(row);

        let td1 = document.createElement('td');
        td1.innerHTML = item.Name;
        row.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = item.Color;
        row.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = item.Origin;
        row.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerHTML = item.ISBN;
        row.appendChild(td4);

        let td5 = document.createElement('td');
        td5.innerHTML = item.Healthy;
        row.appendChild(td5);
    })


}