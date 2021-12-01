const table = document.querySelector('.elements').children[0];
let idcnt = 0;

function addEl() {
  element = document.createElement('tr');
  element.id = ++idcnt;
  element.innerHTML = `
    <td><input type="text" class="npttext"></td>
    <td><input type="number" class="nptnumber"></td>
    <td><button onclick="moveUp(this)">&#8593;</button></td>
    <td><button onclick="moveDown(this)">&#8595;</button></td>
    <td><button onclick="removeEl(this)">&#10005;</button></td>
  `;
  table.appendChild(element);
}

function moveUp(e) {
  e = e.parentNode.parentNode;
  const prev = e.previousSibling;
  if (prev) {
    table.removeChild(e);
    table.insertBefore(e, prev);
  }
}

function moveDown(e) {
  e = e.parentNode.parentNode;
  table.removeChild(e);
  table.insertBefore(e, e?.nextSibling?.nextSibling);
}

function removeEl(e) {
  table.removeChild(e.parentNode.parentNode);
}

function exportEls() {
  let elements = {};
  resultBox = document.querySelector(".result");
  for (let e of table.children) {
    text = e.querySelector(".npttext").value;
    number = e.querySelector(".nptnumber").value;
    if (text && number) {
      elements[text] = number;
    }
  }
  console.log(elements);
  resultBox.textContent = JSON.stringify(elements);
}


