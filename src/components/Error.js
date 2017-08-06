import { h } from 'preact';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
      <div>
        <h1>Error</h1>
        <p><Link to="/">Home</Link></p>
      </div>
    );
}