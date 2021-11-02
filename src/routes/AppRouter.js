import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Box } from '@chakra-ui/react';
import {
  mapStyles,
  bounceTransition,
} from '../features/AnimatedSwitch/AnimatedSwitch';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useDispatch } from 'react-redux';
import { getNosotros } from '../app/nosotros/nosotrosReducer';
import { getCategorias } from '../app/categorias/categoriasReducer';
import { getActividades } from '../app/actividades/actividadesReducer';
import { getMemberThunk } from '../app/members/members';
import { getSliceThunk } from '../app/slides/slides';
import { getUserThunk } from '../app/users/users';
import { getNovedades } from '../app/novedades/novedadesReducer';
import { startRenew } from '../app/auth/authReducer';

const AppRouter = () => {
  const ifPrivateURL = window.location.href.toLowerCase().includes('backoffice')
    ? true
    : false;

  const dispatch = useDispatch();

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

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Router>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            {ifPrivateURL ? <PrivateRoutes /> : <PublicRoutes />}
          </AnimatedSwitch>
        </Router>
      </Box>
    </Box>
  );
};

export default AppRouter;
