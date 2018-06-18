class Sneaker {
  constructor(name,price,year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }

}

class UI{
  addSneaker(sneaker){
    const sneakerList = document.getElementById('sneaker-list');
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Sneaker:</strong> ${sneaker.name}
          <strong>Price:</strong> ${sneaker.price}
          <strong>Year:</strong> ${sneaker.year}
          <a class="btn btn-danger" href="#" name="delete">Delete</a>
        </div>
      </div>
    `;
    sneakerList.appendChild(element);
    this.resetForm();
  }
  resetForm(){
    document.getElementById('sneaker-form').reset();
  }
  deleteSneaker(elemento){
    if(elemento.name === 'delete'){
      elemento.parentElement.parentElement.parentElement.remove();
      this.showMessage('Sneaker deleted successfully','danger');
    }
  }
  showMessage(messsage, cssClass){
    const div =  document.createElement('div');
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(messsage));
    /// Showing in DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');

    container.insertBefore(div,app);
    setTimeout(()=>{
      document.querySelector('.alert').remove();
    },3000);
  }
}
//DOM Events
document.getElementById('sneaker-form')
  .addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const sneaker = new Sneaker(name,price,year);
    const ui = new UI();
    if(name === '' || price === '' || year === ''){
      ui.showMessage('Complete Fields Please','info');
    }else{
      ui.addSneaker(sneaker);
      ui.showMessage('Sneaker added successfully','success');
    }

    //console.log(sneaker);
  });

document.getElementById('sneaker-list').addEventListener('click',(e)=>{
  const ui = new UI();
  ui.deleteSneaker(e.target);
})
