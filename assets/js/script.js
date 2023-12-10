// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NDZkYjJjNmEwZDAwMTg0OTU5YjUiLCJpYXQiOjE3MDIxMTkxMzEsImV4cCI6MTcwMzMyODczMX0.eB2ViWOeox2-dYIdKEKldFjtXgyCoeknGEGhzuYaj1w
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk

const urlApi = "https://striveschool-api.herokuapp.com/api/product/"

const options = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
        "Content-Type": "application/json",
        },
}

showPhoneCards(urlApi, options)
fetchShowPhonesArray(urlApi, options)

async function fetchShowPhonesArray(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
}

async function fetchPhone(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
}

function createPhone(name, description, brand, imageUrl, price) {
    return {
        "name": name,
        "description": description,
        "brand": brand,
        "imageUrl": imageUrl,
        "price": parseFloat(price),
    }
}

function postPhone(name, description, brand, imageUrl, price) {
    return {
        method: 'POST',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
            "Content-Type": "application/json",
            },
        body: JSON.stringify(createPhone(name, description, brand, imageUrl, price))
    }
}

function putPhone(newName, newDescription, newBrand, newImageUrl, newPrice) {
    return {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
            "Content-Type": "application/json",
            },
        body: JSON.stringify(createPhone(newName, newDescription, newBrand, newImageUrl, newPrice))
    }
}

function deletePhone() {
    return {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
            "Content-Type": "application/json",
            },
    }
}

// POPUP PAGE

const newPhonePage = document.querySelector('#newPhonePage')
const btnNewPhone = document.querySelector('.btnNewPhone')
const closeIcon = document.querySelector('.closeIcon')
const phoneName = document.querySelector('#phoneName')
const phoneDesc = document.querySelector('#phoneDesc')
const phoneBrand = document.querySelector('#phoneBrand')
const phoneImgUrl = document.querySelector('#phoneImgUrl')
const phonePrice = document.querySelector('#phonePrice')
const btnReset = document.querySelector('#btnReset')
const btnCreate = document.querySelector('#btnCreate')
const cardsContainer = document.querySelector('.cardsContainer')
const resetConfirmPopUp = document.querySelector('.resetConfirmPopUp')
const btnResetYes = document.querySelector('.btnResetYes')
const btnResetNo = document.querySelector('.btnResetNo')

const detailsPage = document.querySelector('.detailsPage')
const closeIconDetails = document.querySelector('.closeIconDetails')
const detailsPageImg = document.querySelector('.detailsPageImg')
const detailsPagePhoneName = document.querySelector('.detailsPagePhoneName')
const detailsPagePhoneDesc = document.querySelector('.detailsPagePhoneDesc')
const detailsPagePhoneBrand = document.querySelector('.detailsPagePhoneBrand')
const detailsPagePhoneImgUrl = document.querySelector('.detailsPagePhoneImgUrl')
const detailsPagePhonePrice = document.querySelector('.detailsPagePhonePrice')
const btnEditDetails = document.querySelector('.btnEditDetails')

const editPage = document.querySelector('.editPage')
const closeIconEdit = document.querySelector('.closeIconEdit')
const phoneNameEdit = document.querySelector('#phoneNameEdit')
const phoneDescEdit = document.querySelector('#phoneDescEdit')
const phoneBrandEdit = document.querySelector('#phoneBrandEdit')
const phoneImgUrlEdit = document.querySelector('#phoneImgUrlEdit')
const phonePriceEdit = document.querySelector('#phonePriceEdit')
const btnResetEditPage = document.querySelector('.btnResetEditPage')
const btnDelete = document.querySelector('.btnDelete')
const btnEditPage = document.querySelector('.btnEditPage')
const resetPopUpEditPage = document.querySelector('.resetPopUpEditPage')
const btnResetYesEdit = document.querySelector('.btnResetYesEdit')
const btnResetNoEdit = document.querySelector('.btnResetNoEdit')

btnNewPhone.addEventListener('click', () => {
    newPhonePage.classList.add('show')
    detailsPage.classList.remove('show');
    editPage.classList.remove('show');
    phoneName.value = ''
    phoneDesc.value = ''
    phoneBrand.value = ''
    phoneImgUrl.value = ''
    phonePrice.value = ''
})

closeIcon.addEventListener('click', () => {
    newPhonePage.classList.remove('show');
    resetConfirmPopUp.classList.remove('show');
})

btnReset.addEventListener('click', (event) => {
    event.preventDefault()
    resetConfirmPopUp.classList.add('show')
})

btnResetYes.addEventListener('click', () => {
    resetConfirmPopUp.classList.remove('show');
    phoneName.value = ''
    phoneDesc.value = ''
    phoneBrand.value = ''
    phoneImgUrl.value = ''
    phonePrice.value = ''
})

btnResetNo.addEventListener('click', () => {
    resetConfirmPopUp.classList.remove('show');
})

btnCreate.addEventListener('click', (event) => {
    event.preventDefault()
    if (phoneName.value !== '' && phoneDesc.value !== '' && phoneBrand.value !== '' &&  phoneImgUrl.value !== '' && phonePrice.value !== '') {
        fetchPhone(urlApi, postPhone(phoneName.value, phoneDesc.value, phoneBrand.value, phoneImgUrl.value, phonePrice.value))
        let cards = ''
        cards += `
        <div class="cardContainer">
            <img src="${phoneImgUrl.value}" alt="nokia">
            <p class="phoneName">${phoneName.value}</p>
            <div class="btnsContainer">
                <button class="btnDetail">Details</button>
                <button class="btnEdit">Edit</button>
            </div>
        </div>`
        cardsContainer.innerHTML += cards
        newPhonePage.classList.remove('show');
        showPhoneCards(urlApi, options)
    }
    else {
        alert('Fill all the boxes')
    }
})

let objectId = ''

async function showPhoneCards(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()

    let cards = ''
    for (let i = 0; i < data.length; i++) {
        cards += createCard(data[i])
    }
    cardsContainer.innerHTML = cards

    const btnsDetailArray = document.querySelectorAll('.btnDetail')

    for (let i = 0; i < btnsDetailArray.length; i++) {
        btnsDetailArray[i].addEventListener('click', () => {
            detailsPageImg.innerHTML = `<img src="${data[i].imageUrl}" alt="${data[i].name}">`
            detailsPagePhoneName.textContent = 'Name: ' + data[i].name
            detailsPagePhoneDesc.textContent = 'Description: ' + data[i].description
            detailsPagePhoneBrand.textContent = 'Brand: ' + data[i].brand
            detailsPagePhoneImgUrl.textContent = 'Image url: ' + data[i].imageUrl
            detailsPagePhonePrice.textContent = 'Price: ' + data[i].price + '€'
            objectId = urlApi + data[i]._id
            detailsPage.classList.add('show');
            newPhonePage.classList.remove('show');
            editPage.classList.remove('show');
            fetchDetails(objectId, options)
        })
    } 

    const btnsEditArray = document.querySelectorAll('.btnEdit')

    for (let i = 0; i < btnsEditArray.length; i++) {
        btnsEditArray[i].addEventListener('click', () => {
            phoneNameEdit.value = data[i].name
            phoneDescEdit.value = data[i].description
            phoneBrandEdit.value = data[i].brand
            phoneImgUrlEdit.value = data[i].imageUrl
            phonePriceEdit.value = data[i].price
            editPage.classList.add('show');
            newPhonePage.classList.remove('show');
            detailsPage.classList.remove('show');

            objectId = urlApi + data[i]._id
        })
    }

    btnEditPage.addEventListener('click', async (event) => {
        event.preventDefault()
        try {
            await fetchPhone(objectId, putPhone(phoneNameEdit.value, phoneDescEdit.value, phoneBrandEdit.value, phoneImgUrlEdit.value, phonePriceEdit.value));
            editPage.classList.remove('show');
            window.location.reload();
        } catch (error) {
            console.log('Errore durante la modifica:', error);
        }
    })  
    
    btnDelete.addEventListener('click', (event) => {
        event.preventDefault()
        const arrayPhonesName = document.querySelectorAll('.phoneName')
        for (let i = 0; i < arrayPhonesName.length; i++) {
            if (arrayPhonesName[i].textContent === phoneNameEdit.value) {
                arrayPhonesName[i].closest('.cardContainer').remove()
            }
        }
        fetchPhone(objectId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
                "Content-Type": "application/json",
                },
        })
        editPage.classList.remove('show');
    }) 

    btnResetEditPage.addEventListener('click', (event) => {
        event.preventDefault()
        resetPopUpEditPage.classList.add('show')
    })

    btnResetYesEdit.addEventListener('click', () => {
        phoneNameEdit.value = ''
        phoneDescEdit.value = ''
        phoneBrandEdit.value = ''
        phoneImgUrlEdit.value = ''
        phonePriceEdit.value = ''
        resetPopUpEditPage.classList.remove('show')
    })

    btnResetNoEdit.addEventListener('click', () => {
        resetPopUpEditPage.classList.remove('show')
    })
}

async function fetchDetails (url, option) {
    const response = await fetch(url, option)
    const data = await response.json()

    btnEditDetails.addEventListener('click', () => {
        phoneNameEdit.value = data.name
        phoneDescEdit.value = data.description
        phoneBrandEdit.value = data.brand
        phoneImgUrlEdit.value = data.imageUrl
        phonePriceEdit.value = data.price
        editPage.classList.add('show');
        newPhonePage.classList.remove('show');
        detailsPage.classList.remove('show');
    })
}

function createCard(phone) {
    return `
    <div class="cardContainer">
        <img src="${phone.imageUrl}" alt="nokia">
        <p class="phoneName">${phone.name}</p>
        <div class="btnsContainer">
            <button class="btnDetail">Details</button>
            <button class="btnEdit">Edit</button>
        </div>
    </div>`
}

closeIconDetails.addEventListener('click', () => {
    detailsPage.classList.remove('show');
})

closeIconEdit.addEventListener('click', () => {
    editPage.classList.remove('show');
    resetPopUpEditPage.classList.remove('show')
})