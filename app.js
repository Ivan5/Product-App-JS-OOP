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
        </div>
      </div>
    `;
    sneakerList.appendChild(element);
  }
  deleteSneaker(){

  }
  showMessage(){

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
    ui.addSneaker(sneaker);
    //console.log(sneaker);
  });
