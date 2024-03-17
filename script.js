// let filterbutton = document.querySelectorAll('.filter-product button')
// let filterablecard = document.querySelectorAll('.filterable-card .card')



// const myfilter = e =>{
//     console.log(e.currentTarget)
//     const targetName = e.currentTarget.dataset.name;
//     e.currentTarget.classList.add('active')

// };

// filterablecard.forEach(card =>{
//     card.classList.add('hide');
//     if (card.dataset.name ===  targetName  ||  targetName  === 'all'){
//         card.classList.remove('hide')
    
//     }}
//      );

// filterbutton.forEach(button => button.addEventListener('click' ,myfilter));


const filterButtons = document.querySelectorAll('.filter-product button');
const filterableCards = document.querySelectorAll('.filterable-card .card');

const myfilter = e => {
    console.log(e.currentTarget);
    const targetName = e.currentTarget.dataset.name;
    e.currentTarget.classList.add('active');

    filterableCards.forEach(card => {
        card.classList.add('hide');
        if (card.dataset.name === targetName || targetName === 'all') {
            card.classList.remove('hide');
        }
    });
};

filterButtons.forEach(button => button.addEventListener('click', myfilter));
