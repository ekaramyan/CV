import axios from 'axios'
import React from 'react'
import rest from 'rest'
// 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
async function GitImport() {
 


  axios.get('')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

  try {
    const response = await axios.get('');
    console.log(response);
  } catch (error) {
    console.error(error);
  }

}

export default GitImport