import { useRouter } from 'next/router';

import { loginUser } from '../utils/authentication';

const Login = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    loginUser();
    router.replace('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Click to login</button>
    </div>
  )
}

export default Login;