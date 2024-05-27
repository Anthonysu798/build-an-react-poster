import { Link } from 'react-router-dom'; // Import the Link component
import { MdPostAdd, MdMessage } from 'react-icons/md'; // Icons from third-party library
import classes from '@/src/components/MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;