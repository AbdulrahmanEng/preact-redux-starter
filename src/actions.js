export function fetchUser(username) {
  return function(dispatch) {
    dispatch({ type: 'USER_FETCH' });
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((user) => {
        dispatch({ type: 'USER_FULFILLED', payload: user });
      })
      .catch((error) => console.error(error));
  };
}