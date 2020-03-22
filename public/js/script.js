var sortBy = 'sort-name-asc'; // store current sort order; default to ascending order by name

var sortFunctions = {
  'sort-name-asc': sortByNameAsc,
  'sort-name-des': sortByNameDes,
  'sort-email-asc': sortByEmailAsc,
  'sort-email-des': sortByEmailDes,
  'sort-age-asc': sortByAgeAsc,
  'sort-age-des': sortByAgeDes,
};

var users = [];

function sortByNameAsc() {
  insertionSortTable(document.getElementById('users').children, 0, 'asc');
  sortBy = 'sort-name-asc';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}
function sortByNameDes() {
  insertionSortTable(document.getElementById('users').children, 0, 'des');
  sortBy = 'sort-name-des';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}
function sortByEmailAsc() {
  insertionSortTable(document.getElementById('users').children, 1, 'asc');
  sortBy = 'sort-email-asc';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}
function sortByEmailDes() {
  insertionSortTable(document.getElementById('users').children, 1, 'des');
  sortBy = 'sort-email-des';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}
function sortByAgeAsc() {
  insertionSortTable(document.getElementById('users').children, 2, 'asc');
  sortBy = 'sort-age-asc';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}
function sortByAgeDes() {
  insertionSortTable(document.getElementById('users').children, 2, 'des');
  sortBy = 'sort-age-des';
  for (let icon of document.querySelectorAll('thead span img')) {
    icon.classList.remove('sort-active');
  }
  document.getElementById(sortBy).classList.add('sort-active')
}

document.getElementById('sort-name-asc').addEventListener('click', sortByNameAsc);
document.getElementById('sort-name-des').addEventListener('click', sortByNameDes);
document.getElementById('sort-email-asc').addEventListener('click', sortByEmailAsc);
document.getElementById('sort-email-des').addEventListener('click', sortByEmailDes);
document.getElementById('sort-age-asc').addEventListener('click', sortByAgeAsc);
document.getElementById('sort-age-des').addEventListener('click', sortByAgeDes);

document.getElementById('button').addEventListener('click', () => {
  // get form data
  let formName = document.getElementById('name');
  let formEmail = document.getElementById('email');
  let formAge = document.getElementById('age');
  let name = formName.value;
  let email = formEmail.value;
  let age = Number(formAge.value);

  if (name === '' || email === '' || isNaN(age)) {
    alert('All fields must be filled.')
    return;
  }

  // create new row in users table
  addUser(name, email, age);

  // clear form data
  formName.value = '';
  formEmail.value = '';
  formAge.value = '';
});

function insertionSortTable(rows, sortCol, sortOrder) {
  let len = rows.length;
  let i = 1;
  while (i < len) {
    let j = i;
    while (j > 0) {
      let a = rows[j-1];
      let b = rows[j];
      if (sortCol < 2) { // name or email --> sort alphabetically
        if (sortOrder === 'asc' && a.children[sortCol].innerText.toLowerCase() > b.children[sortCol].innerText.toLowerCase()) {
          swapTableRows(a, b)
        } else if (sortOrder === 'des' && a.children[sortCol].innerText.toLowerCase() < b.children[sortCol].innerText.toLowerCase()) {
          swapTableRows(a, b)
        }
      } else { // age --> sort numerically
        if (sortOrder === 'asc' && Number(a.children[sortCol].innerText) > Number(b.children[sortCol].innerText)) {
          swapTableRows(a, b)
        } else if (sortOrder === 'des' && Number(a.children[sortCol].innerText) < Number(b.children[sortCol].innerText)) {
          swapTableRows(a, b)
        }
      }
      j = j - 1;
    }
    i = i + 1;
  }
}

function swapTableRows(a, b) {
  a.parentNode.insertBefore(b, a)
}

function addUser(name, email, age) {
  let newRow = document.createElement('tr');
  let rowName = document.createElement('td');
  rowName.innerText = name;
  let rowEmail = document.createElement('td');
  rowEmail.innerText = email;
  let rowAge = document.createElement('td');
  rowAge.innerText = age;
  newRow.appendChild(rowName);
  newRow.appendChild(rowEmail);
  newRow.appendChild(rowAge);
  document.getElementById('users').appendChild(newRow);

  // sort table
  sortFunctions[sortBy]();

  // display table of users (initially hidden)
  document.getElementById('userDiv').style.display = 'block';
}
