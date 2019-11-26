function logged() {
  axios({
    method: 'post',
    url: '/api/user/logged',
    data: {},
    withCredentials: true,
  })
    .then(function(response) {
      var result = response.data;
      console.log('result :', result);
    })
    .catch(function(error) {
      console.log(error);
    });
}
