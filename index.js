let count = 1;

function displayData(data) {
  data.forEach((producto) => crearItem(producto.title, producto.thumbnail));
}

var itemsLegion = Array.from(
  document.getElementsByClassName('ui-search-layout__item')
);

itemsLegion.forEach((item) => {
  item.setAttribute('draggable', 'true');
  item.setAttribute('ondragover', 'allowDrop(event)');
  item.setAttribute('ondragstart', 'drag(event)');
  crearItem();
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.className);
}

function crearItem() {
  const contenedorGrilla = document.getElementsByClassName('grilla')[0];
  const box = document.createElement('div');

  box.className = 'box';

  box.style.order = count;

  count++;

  box.setAttribute('ondragover', 'allowDrop(event)');
  box.setAttribute('ondrop', 'drop(event)');

  contenedorGrilla.appendChild(box);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementsByClassName(data)[0]);
  ev.target.setAttribute('ondrop', 'null');
  let contenedorEstilos = document.getElementsByClassName('resultado')[0];
  contenedorEstilos.innerHTML += crearLineaEstilo(data, ev.target.style.order);
}

function crearLineaEstilo(clase, order) {
  return `.${clase}{
            order:${order}};
            `;
}

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement('input');
  aux.setAttribute('value', document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
}
