const DataApi = (props) => {
  console.log(props, 'aqui');
  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(props),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default DataApi;
