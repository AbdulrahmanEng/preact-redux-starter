import { h } from 'preact';
import { withRouter } from 'react-router-dom';

const search = (router, query) => {
  if (query !== '') {
    router.history.push(`/profile/${encodeURIComponent(query)}`);
  }
};

const Home = withRouter((router) => {
  return (
    <section>
      <h1>Enter a Github username</h1>
      <input type="search" onSearch={e => search(router, e.target.value)}/>
    </section>
  );
});

export default Home;