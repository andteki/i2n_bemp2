const axios = require('axios').default;
const url = 'http://localhost:8000/api/employees';

axios.get(url)
.then(response => {
    console.log(response.data);
});
