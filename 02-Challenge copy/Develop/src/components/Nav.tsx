import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
  <Link to="/">Candidate Search</Link>
  <Link to="/SavedCandidates">Saved Candidates</Link>
    </nav>
  );
};

export default Nav;

// const Nav = () => {
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//     <div>Nav</div>
//   )
// };

// export default Nav;
