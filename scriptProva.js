/*async function editPhone(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()

    const btnsEditArray = document.querySelectorAll('.btnEdit')

    let objectId = ''

    for (let i = 0; i < btnsEditArray.length; i++) {
        btnsEditArray[i].addEventListener('click', () => {
            phoneNameEdit.value = data[i].name
            phoneDescEdit.value = data[i].description
            phoneBrandEdit.value = data[i].brand
            phoneImgUrlEdit.value = data[i].imageUrl
            phonePriceEdit.value = data[i].price
            editPage.classList.add('show');

            objectId = urlApi + data[i]._id
        })
    }

    btnEditPage.addEventListener('click', async (event) => {
        event.preventDefault()
        fetchPhone(objectId, putPhone(phoneNameEdit.value, phoneDescEdit.value, phoneBrandEdit.value, phoneImgUrlEdit.value, phonePriceEdit.value))
        editPage.classList.remove('show');
        window.location.reload()
    })  

     btnDelete.addEventListener('click', async (event) => {
        event.preventDefault()
        fetchPhone(objectId, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0N2Y3MzJjNmEwZDAwMTg0OTVmNjYiLCJpYXQiOjE3MDIxMzM2MTksImV4cCI6MTcwMzM0MzIxOX0.bFdf47Fao8BOHrkkkHyzXutHMc5CSgfH1p2abmSrbGk",
                "Content-Type": "application/json",
                },
        })
        editPage.classList.remove('show');
        window.location.reload()
    }) 
}*/