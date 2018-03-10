var url = 'https://jsonplaceholder.typicode.com/photos/';
$.get(url)
    .then(recogerFotos)

function recogerFotos(photos) {
    var trocear = photos.slice(0, 100);
    trocear.forEach(photo => {
        $('#photos').append(`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${photo.url}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `)
    });
} 
