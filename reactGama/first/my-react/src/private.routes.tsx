import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoute: any = ({
  component: Componet,
  path: Path,
  ...rest
}: any) => {
  const isLoggedIn: string | null = localStorage.getItem('@meuserviceToken');

  const isSectionActive: any = () => {
    if (isLoggedIn === null) {
      return false;
    } else {
      const onlyToken = isLoggedIn;
      const tokenPayLoad: any = jwt_decode(onlyToken);
      const expSeconds = tokenPayLoad.ex();
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true;
    }
  };
  return (
    <Route
      {...rest}
      render={props =>
        isSectionActive() ? <Componet {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
