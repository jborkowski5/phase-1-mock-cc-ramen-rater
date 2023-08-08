const url = 'http://localhost:3000/ramens'
const ramensUrl = 'http://localhost:3000/ramens'
const ramensIdUrl = "http://localhost:3000/ramens/:id"
const ramenDiv = document.getElementById('ramen-menu')
const ramenIdDiv = document.getElementById('ramen-detail')
const ramenName = document.querySelector('.name')
const ramenStore = document.querySelector('.restaurant')
const mainImg = document.querySelector('.detail-image')
const ramenReview = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.getElementById('new-ramen')
function renderCard(ramen) {
    const ramenImg = document.createElement('img')
            ramenImg.src = ramen.image
            ramenDiv.append(ramenImg) 
}

    fetch(ramensUrl)
    .then(res => res.json())
    .then((ramens) => {
        ramens.forEach((ramen) => {
            const ramenImg = document.createElement('img')
            ramenImg.src = ramen.image
            ramenDiv.append(ramenImg) 
            ramenImg.addEventListener('click', (e) => {
                mainImg.src = ramen.image
                ramenName.textContent = ramen.name
                ramenStore.textContent = ramen.restaurant
                ramenReview.textContent = ramen.rating
                ramenComment.textContent = ramen.comment     
                e.preventDefault()
            })
        })    
    
    })

    ramenForm.addEventListener('submit', (e) => {
        const ramen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ramen)
        })
        .then (res => res.json())
        .then((data) => {
            renderCard(data)
           
        })
    })
