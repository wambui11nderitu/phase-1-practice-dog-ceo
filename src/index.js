console.log('%c HI', 'color: firebrick')

//Sources

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//Fetching pictures and appending them to the DOM

function dogPicFetcher () {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(img => {
        img.message.forEach(element => {
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', element)
            document.querySelector("#dog-image-container").append(imgTag)
        });
    })
}

//Grabbing 'Breed name' data from server, appending it to the dom, and adding an eventListener to change color

function dogBreedNameFetcher () {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        const nameList = Object.keys(data.message)
        const subList = Object.values(data.message)
        nameList.forEach(breedName => {
            const newLi = document.createElement('li')
            newLi.textContent = ${breedName}
            newLi.addEventListener('click', () => {newLi.style.color = '#7FFFD4'})
            newLi.hidden = true 
            document.querySelector('#dog-breeds').append(newLi)
        })
        // document.querySelector('#dog-breeds').hidden = true
    })
}

//Functionality of select ribbon

function dropdownFirstLetterSearcher () {
    const dogbreedlist = document.getElementById('dog-breeds').childNodes
    for (let i = 0; i < dogbreedlist.length; i++) {
        if (dogbreedlist[i].textContent[0] === document.querySelector('#breed-dropdown').value) {
            dogbreedlist[i].hidden = false
        } else {
            dogbreedlist[i].hidden = true
        }
    }
}

//Event listeners

document.addEventListener('DOMContentLoaded', () => {
    dogPicFetcher()
    dogBreedNameFetcher()
    document.getElementById('breed-dropdown').addEventListener('change', dropdownFirstLetterSearcher)
})



// window.setTimeout(() => {
//     const listTags = document.getElementsByTagName('li')

//     for (let i = 0; i < listTags.length; i++) {
//         console.log(i)
//         listTags[i].addEventListener('click', () => {listTags[i].style.color = '#7FFFD4'})
//     }
// }, 5000);
