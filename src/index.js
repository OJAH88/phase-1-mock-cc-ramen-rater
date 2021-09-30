// write your code here

  //define some constants
  
document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = 'http://localhost:3000/beers';
  fetch(`${baseUrl}`)
    .then(resp => resp.json())
    .then(data => data.forEach(renderMenu))
    const newRamenForm = document.querySelector('#new-ramen');
    newRamenForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newRamenName = document.querySelector('#new-name').value;
        const newRamenRestaurant = document.querySelector('#new-restaurant').value;
        const newRamenImage = document.querySelector('#new-image').value;
        const newRamenRating = document.querySelector('#new-rating').value;
        const newRamenComment = document.querySelector('#new-comment').value;
        const newRamenItem = {};
        newRamenItem.name = newRamenName;
        newRamenItem.restaurant = newRamenRestaurant;
        newRamenItem.image = newRamenImage;
        newRamenItem.rating = newRamenRating;
        newRamenItem.comment = newRamenComment;
        renderMenu(newRamenItem);
    })
})

function renderMenu(ramenItem) {
  const menuContainer = document.querySelector('#ramen-menu');
  const menuItem = document.createElement('img');
  menuItem.src = ramenItem.image;
  menuContainer.append(menuItem);
  menuItem.addEventListener('click', () => {
    const detailContainer = document.querySelector('#ramen-detail')
    const detailImg = document.querySelector('img');
    const detailName = detailContainer.querySelector('h2');
    const detailRestaurant = detailContainer.querySelector('h3');
    const ratingText = detailContainer.querySelector('#rating-display');
    const commentText = detailContainer.querySelector('#comment-display');
    detailImg.src = ramenItem.image;
    detailImg.alt = ramenItem.name;
    detailName.textContent = ramenItem.name;
    detailRestaurant.textContent = ramenItem.restaurant; 
    ratingText.textContent = ramenItem.rating;
    commentText.textContent = ramenItem.comment

  })
}














  
//   const makeEl = el => document.createElement(el);
//   const baseUrl = 'http://localhost:3000';
//   const ramenDetail = document.getElementById('ramen-detail')  //container?
//   const ramenForm = document.getElementById('new-ramen');






// //fetch on init
// const init = () =>  {  

//   fetch(`${baseUrl}`)
//   .then(resp => resp.json())
//   .then(data => addInfo(data))

//   fetch(`${baseUrl}/ramens/:id`)
//   .then(resp => resp.json())
//   .then(data => addIDs(data))

//   console.log(ramens)

// }


// //render ramen
// function renderRamen(ramen) {
//   const ramenCard = makeEl('div')
//   const ramenImg = makeEl ('img')
//   const ramenName = makeEl ('h2')
//   const ramenRestaurant = makeEl ('h3')
//   const ramenRating = makeEl ('h3')
//   const ramenComment = makeEl ('h3')

//   ramenCard.id = `ramen ${ramen.id}`;
//   ramenCard.className = 'ramen card'

//   ramenImg.src = `${baseUrl}/assets/ramen/${ramenName}.jpg`
//   ramenImg.alt = `${ramen.name} Image`

//   ramenName.textContent = ramen.name

//   ramenRestaurant.textContent = ramen.restaurant 

//   ramenRating.textContent = ramen.rating 

//   ramenComment.textContent = ramen.comment

//   ramenCard.append(ramenName, ramenImg, ramenRestaurant, ramenRating, ramenComment);

//   ramenDetail.append(ramenCard)

// }

// //create new ramen
// function createRamen(e){
//   e.preventDefault();
//   let ramenName = ramenForm.querySelector('#new-name').value;
//   let ramenImg = ramenForm.querySelector('#new-image').value;
//   let ramenRestaurant = ramenForm.querySelector('#new-restaurant').value;
//   let ramenRating = ramenForm.querySelector('#new-rating').value;
//   let ramenComment = ramenForm.querySelector('#new-comment').value;


//   let lastRamenId = ramens.slice(-1)[0].id;
  
//   let newRamen = {
//     id: lastRamenId + 1,
//     Name: ramenName,
//     Restaurant: ramenRestaurant,
//     Image: ramenImg,
//     Rating: ramenRating,
//     Comment: ramenComment,
//   }
//   ramens.push(newRamen);
//   renderRamen(newRamen);
//   ramenForm.reset();
// }














































// //render the ramen
// function renderRamen(ramens){


//   ramens.forEach (ramen => {
//     const ramenName = ramen.name
//     const li = document.createElement('li')
//     li.innerText = ramenName
//     document.querySelector('#ramen-detail').appendChild(li)
//     li.addEventListener('click', () => {
//         getRamenInfo(ramen)
//     })
  
//   })}
  
// function getRamenInfo(ramen) {
//   document.querySelector('div#ramen-detail').innerText =''
  
//   const ramenImgElement = document.createElement('img')
//   ramenImgElement.innerHTML = `<img scr = '${baseUrl}/assets/ramen/${ramenName}.jpg`

//   const ramenNameElement = document.createElement('div')
//   ramenNameElement.innerHTML =`${ramen.name}`

//   const ramenRestaurantElement = document.createElement('div')
//   ramenRestaurantElement.innerHTML = `${ramen.restaurant}`

//   const ramenRatingElement = document.createElement('div')
//   ramenRatingElement.innerHTML = `${ramen.rating}`

//   const ramenCommentElement= document.createElement('div')
//   ramenCommentElement.innerHTML = `${ramen.comment}`

//   const ramenInfoElement = document.querySelector('div#ramen-detail')
//   ramenInfoElement.append(ramenImgElement, ramenNameElement, ramenCommentElement, ramenRestaurantElement, ramenRatingElement)

// }

// const div = document.createElement('div');
// div.id = `ramen-${ramen.id}`;

  
// // id name restaurant image rating comment
//   //set attributes
// ramenDetail.id = `ramen-${ramen.id}`;
// ramenDetail.className = "ramen-detail"

// ramenImg.src= baseUrl + `/assets/ramen/${ramen}.jpg`
// ramenImg.alt = `${ramen.name} image`;

// ramenName.textContent = ramen.name;

// ramenRestaurant.textContent = ramen.restraurant;

// ramenRating.textContent = ramen.rating;


// //append info to ramenDetail
// div.append(ramenImg, ramenName, ramenRestaurant, ramenRating, newComment)

// //append ramenDetail to ramenMenu

// ramenMenu.appendChild(div)
// }


// See all ramen images in the `div` with the id of `ramen-menu`. 

// When the page loads, request the data from the server to get all the ramen objects.
      // const init and fetch the base URL 👌🏽


// Then, display the image for each of the ramen using an `img` tag inside the `#ramen-menu` div.
      // render the Ramen


// - Click on an image from the `#ramen-menu` div and see all the info about that
// ramen displayed inside the `#ramen-detail` div and where it says
// `insert comment here` and `insert rating here`.
      //  will need an onClick listener event



// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
// be added to the`#ramen-menu` div. The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.


// "new-ramen" form data IDs:
//     name = new-name
//     restaurant = new-restaurant
//     image = new-image
//     rating = new-rating
//     comment = new-comment

//   comment-display
//   rating-display
