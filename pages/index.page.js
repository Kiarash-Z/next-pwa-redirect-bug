import { useRouter } from 'next/router';

import { authenticate as getServerSideProps, logoutUser } from '../utils/authentication';

const Home = () => {
  const router = useRouter();

  const handleLogoutClick = () => {
    logoutUser();
    router.replace('/login');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogoutClick}>Click to logout</button>
    </div>
  )
};

export { getServerSideProps }
export default Home;
