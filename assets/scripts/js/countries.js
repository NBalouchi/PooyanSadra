let countries = [
    { id: 0, name: 'Nigeria', image: 'assets/images/flags/Nigeria.png' },
    { id: 1, name: 'Ethiopia', image: 'assets/images/flags/Ethiopia.jpg' },
    { id: 2, name: 'Tanzania', image: 'assets/images/flags/Tanzania.jpg' },
    { id: 3, name: 'Sudan', image: 'assets/images/flags/Sudan.jpg' },
    { id: 4, name: 'UAE', image: 'assets/images/flags/UAE.jpg' },
    { id: 5, name: 'Afghanistan', image: 'assets/images/flags/Pakistan.jpg' },
];

function myFunc() {
    let text = '';
    for (const country of countries) {
        text += `<a href='operators.html'><img src='${country.image}'/><span>${country.name}</span></a>`
    }
    document.querySelector('.sidebar-content').innerHTML = text;
}
myFunc();