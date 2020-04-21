const ApiData = (props) => {
  const userData = {
    palette: props.palette,
    name: props.name,
    job: props.job,
    photo: props.photo,
    email: props.email,
    phone: props.phone,
    linkedin: props.linkedin,
    github: props.github,
  };
  console.log(JSON.stringify(userData), 'aqui');
  // debugger;
  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userData),
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

export { ApiData };
