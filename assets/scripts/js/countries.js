let countries = [
    { id: 0, name: 'Nigeria' },
    { id: 1, name: 'Ethiopia' },
    { id: 2, name: 'Tanzania' },
    { id: 3, name: 'Sudan' },
    { id: 4, name: 'UAE' },
    { id: 5, name: 'Afghanistan' },
];

function myFunc() {
    let text = '';
    for (const country of countries) {
        text += `<a href=''>${country.name}</a>`
    }
    document.querySelector('.sidebar-content').innerHTML = text;
}
myFunc();