// db
const listItem = [
  {
    image: './Images/hotel-book.jpg',
    link: 'https://github.com/tuananh1998hust/Hotel-Booking',
    type: 'responsive',
    name: 'Hotel Booking'
  },
  {
    image: './Images/home-page.jpg',
    link: 'https://github.com/tuananh1998hust/vijamach-homepage',
    type: 'responsive',
    name: 'Vijamach - Homepage'
  },
  {
    image: './Images/rest-api.jpg',
    link: 'https://github.com/tuananh1998hust/restful-api',
    type: 'nodejs',
    name: 'Restful API'
  }
];

// filter items
function onItemClick(type) {
  const filterItem = listItem.filter(item => {
    return item.type === type;
  });

  if (filterItem.length) {
    render(filterItem);
  } else {
    render(listItem);
  }
}

// render items
function render(arr) {
  var Item = document.getElementById('item');
  
  var content = arr.map(function(item) {
    return `
    <div class="col-sm-12 col-md-4">
      <div class="card">
      <img class="card-img-top" src="${item.image}">
      <div class="card-body d-flex align-items-center justify-content-between">
        <h5 class="card-title">${item.name}</h5>
        <a class="btn btn-outline-primary" href="${item.link}">Views</a>
      </div>
    </div>
  </div>`;
  });

  Item.innerHTML = content.join('');
}

render(listItem);
