const TOKENURL = 'https://opentdb.com/api_token.php?command=request';

export const tokenAPI = () => (
  fetch(TOKENURL)
    .then(
      (response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then((data) => data.token)
      ),
    )
);

export const questionsAPI = (token) => (
  (fetch(`https://opentdb.com/api.php?amount=5&token=${token}`))
    .then(
      (qresponse) => (
        qresponse
          .json()
          .then((json) => (qresponse.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then((data) => data)
      ),
    )
);
