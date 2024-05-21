const axios = require('axios').default;
const url = 'http://localhost:8000/api/employees';

axios.post(url, {
    name: 'Buga Jakab',
    city: 'Pécs',
    salary: 391
})
.then(response => {
    console.log(response.data);
}, (err) => {
    console.log(err)
});
