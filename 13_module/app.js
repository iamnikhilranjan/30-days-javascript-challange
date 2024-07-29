import _ from 'lodash';

// Example usage of lodash's chunk function
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray);

////////////////////////////////////////////////////

import axios from 'axios';

// Make a GET request to a public API
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data); // Log the response data
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });


  