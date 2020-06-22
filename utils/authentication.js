import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';

const authenticate = async context => {
  const { token } = nextCookies(context);
  console.log('called!')
  console.log(token ? '✅ Token Found' : '❌Token Not Foond')
  if (!token) {
    console.log('RRRRRR')
    context.res.setHeader('location', '/login');
    context.res.statusCode = 302;
    context.res.end();
    return { props: {} };
  }

  return {
    props: {
      token,
    },
  };
};

const loginUser = () => {
  Cookies.set('token', 'token value', { expires: 30 })
};

const logoutUser = () => {
  Cookies.remove('token');
};

export { authenticate, loginUser, logoutUser };
