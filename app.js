let myArr = [{name: "Harry Potter", author: 'JK Rowling', pages: 280, read: "Yes"}];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submitbtn = document.getElementById('submit');
const form = document.getElementById('form');
const tbody = document.getElementById('tbody');


function Book(name,author,pages,read){
  this.name = name,
  this.author = author,
  this.pages = pages,
  this.read = read
};


//Fetch and display the data from the text boxes when submit is clicked
function addbook(){
  let btitle = title.value;
  let bauthor = author.value;
  let bpages = pages.value;
  let bread = read.value;
  

  let book1 = new Book(btitle,bauthor,bpages,bread);
  myArr.push(book1);
  tbody.innerHTML += `
          <tr>
              <th>${btitle}</th>
              <th>${bauthor}</th>
              <th>${bpages}</th>
              <th>${bread}</th>
              <th><i class="far fa-trash-alt delete"></i></th>
          </tr>
          `;
}



//delete the data when trash is clicked

tbody.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
});




//update the data when edit is clicked





submitbtn.addEventListener('click', addbook)
submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();

})





