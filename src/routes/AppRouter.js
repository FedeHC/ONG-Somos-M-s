import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { Box } from "@chakra-ui/react";
import { mapStyles, bounceTransition } from "../features/AnimatedSwitch/AnimatedSwitch";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useDispatch } from "react-redux";
import { getActividades } from '../reducers/actividadesReducer';
import { getNovedades } from '../reducers/novedadesReducer';
import { getNosotros } from '../reducers/nosotrosReducer';
import { getCategorias } from "../app/categorias/categoriasReducer";
import '../App.css';

import HomeForm from '../backoffice/home/HomeForm/HomeForm';
import Backoffice from '../backoffice/home/Backoffice';
import FormNovedades from '../backoffice/news/FormNews/FormNovedades';
import NewsScreen from '../backoffice/news/NewsScreen';
import CategoriesForm from '../backoffice/categories/CategoriesForm';
import CategoriesBackOffice from '../backoffice/categories/categoriesBackOffice';
import ActivitiesList from '../backoffice/activities/activitiesList/ActivitiesList';
import FormActivities from '../backoffice/activities/formActivities/FormActivities';
import SlidesScreen from '../backoffice/slides/SlidesScreen';
import SlideForm from '../backoffice/slides/SlideForm/SlideForm';
import MemberList from '../backoffice/members/memberList/MemberList';
import MemberForm from '../backoffice/members/MemberForm/MemberForm';
import Organization from '../backoffice/organization/Organization';
import OrgForm from '../backoffice/organization/OrgForm/OrgForm';
import UsersList from '../backoffice/users/UsersList/UsersList';
import UserForm from '../backoffice/users/UserForm/UserForm';
import TestimonialForm from '../backoffice/testimonials/testimonialForm/TestimonialForm';
import { FormProjects } from '../backoffice/projects/FormProjects/FormProjects';

import PublicNavBar from '../features/publicNavBar/PublicNavBar';
import PublicFooter from '../features/publicFooter/PublicFooter';
import Home from '../pages/home';
import About from '../pages/About/About';
import News from '../pages/news/News';
import NewsDetail from '../pages/news/Detail/NewsDetail';
import Contact from '../pages/Contact/Contact';
import Donations from '../pages/donations';
import Gracias from '../pages/gracias';
import Activities from '../pages/Activities/Activities';
import ActivitiesDetail from '../pages/Activities/details/Detail';
import LoginForm from '../pages/login/LoginForm';
import { Register } from '../pages/register/Register';

const AppRouter = () => {
  const isPrivate = window.location.href.includes('backoffice') ? true : false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActividades());
    dispatch(getNosotros());
    dispatch(getNovedades());
    dispatch(getCategorias());
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      {/* NAVBAR */}
      {isPrivate ? '' : <PublicNavBar />}

      {/* ROUTES */}
      <Box>
        <Router>
          {/* ANIMATEDSWITCH */}
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            {/* PUBLIC */}
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={About} />
            <Route exact path="/novedades" component={News} />
            <Route exact path="/novedades/:id" component={NewsDetail} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/donar" component={Donations} />
            <Route exact path="/gracias" component={Gracias} />
            <Route exact path="/actividades" component={Activities} />
            <Route exact path="/actividades/:id" component={ActivitiesDetail} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={Register} />

            {/* BACKOFFICE */}
            <Route exact path="/backoffice" component={Backoffice} />
            <Route exact path="/backoffice/home" component={HomeForm} />
            <Route
              exact
              path="/backoffice/activities"
              component={ActivitiesList}
            />
            <Route
              exact
              path="/backoffice/activities/create"
              component={FormActivities}
            />
            <Route
              exact
              path="/backoffice/activities/edit"
              component={FormActivities}
            />
            <Route
              exact
              path="/backoffice/categories"
              component={CategoriesBackOffice}
            />
            <Route
              exact
              path="/backoffice/categories/create "
              component={CategoriesForm}
            />
            <Route
              exact
              path="/backoffice/categories/edit "
              component={CategoriesForm}
            />
            <Route exact path="/backoffice/members" component={MemberList} />
            <Route
              exact
              path="/backoffice/members/create"
              component={MemberForm}
            />
            <Route
              exact
              path="/backoffice/members/edit"
              component={MemberForm}
            />
            <Route exact path="/backoffice/news" component={NewsScreen} />
            <Route
              exact
              path="/backoffice/news/create"
              component={FormNovedades}
            />
            <Route
              exact
              path="/backoffice/news/edit/:id"
              component={FormNovedades}
            />
            <Route
              exact
              path="/backoffice/organization"
              component={Organization}
            />
            <Route
              exact
              path="/backoffice/organization/edit"
              component={OrgForm}
            />
            <Route
              exact
              path="/backoffice/projects/create"
              component={FormProjects}
            />
            <Route
              exact
              path="/backoffice/projects/edit"
              component={FormProjects}
            />
            <Route exact path="/backoffice/slides" component={SlidesScreen} />
            <Route
              exact
              path="/backoffice/slides/create"
              component={SlideForm}
            />
            <Route exact path="/backoffice/slides/edit" component={SlideForm} />
            <Route
              exact
              path="/backoffice/testimonials/create"
              component={TestimonialForm}
            />
            <Route
              exact
              path="/backoffice/testimonials/edit"
              component={TestimonialForm}
            />
            <Route exact path="/backoffice/users" component={UsersList} />
            <Route exact path="/backoffice/users/create" component={UserForm} />
            <Route
              exact
              path="/backoffice/users/edit/:id"
              component={UserForm}
            />
          </AnimatedSwitch>
        </Router>
      </Box>
    </Box>
  );
};

export default AppRouter;
