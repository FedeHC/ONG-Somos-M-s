import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Box } from '@chakra-ui/react';
import {
  mapStyles,
  bounceTransition,
} from '../features/AnimatedSwitch/AnimatedSwitch';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getNosotros } from '../app/nosotros/nosotrosReducer';
import { getCategorias } from '../app/categorias/categoriasReducer';
import { getActividades } from '../app/actividades/actividadesReducer';
import { getMemberThunk } from '../app/members/members';
import { getSliceThunk } from '../app/slides/slides';
import { getUserThunk } from '../app/users/users';
import { getNovedades } from '../app/novedades/novedadesReducer';
import { startRenew } from '../app/auth/authReducer';
import AppSpinner from './AppSpinner';
import Private from './Private';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getNosotros());
    dispatch(getNovedades());
    dispatch(getCategorias());
    dispatch(getActividades());
    dispatch(getMemberThunk());
    dispatch(getSliceThunk());
    dispatch(getUserThunk());
    dispatch(startRenew());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (checking) {
    return <AppSpinner />;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Router>
          <div>
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              <Private path="/backoffice" component={PrivateRoutes} />
              <Route path="/" component={PublicRoutes} />
            </AnimatedSwitch>
          </div>
        </Router>
      </Box>
    </Box>
  );
};

export default AppRouter;
