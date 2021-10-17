import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SlidesScreen from "../pages/SlidesScreen/SlidesScreen";
import HomeForm from "../features/HomeForm/HomeForm";
import MemberForm from "../features/MemberForm/MemberForm";
import CategoriesBackOffice from "../pages/categoriesBackOffice";
import Organization from "../features/organization/Organization";
import TestimonialForm from "../features/testimonialForm/TestimonialForm";
import Donations from "../pages/donations";
import Gracias from "../pages/gracias";
import Contact from "../pages/Contact/Contact";
import NewsScreen from "../pages/NewsScreen/NewsScreen";
import SlideForm from "../features/SlideForm/SlideForm";
import ActivitiesList from "../features/activitiesList/ActivitiesList";
import Home from "../pages/home";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/backoffice/slidesScreen"
            component={SlidesScreen}
          />
          <Route
            exact
            path="/backoffice/slidesScreen/form"
            component={SlideForm}
          />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/backoffice/slides" component={ScreenSlidesList} />
          <Route exact path="/backoffice/home" component={HomeForm} />
          <Route exact path="/backoffice/members/edit" component={MemberForm} />
          <Route
            exact
            path="/backoffice/categories"
            component={CategoriesBackOffice}
          />
          <Route path="/backoffice/organization" component={Organization} />
          <Route
            exact
            path="backoffice/testimonials"
            component={TestimonialForm}
          />
          <Route exact path="/donar" component={Donations} />
          <Route exact path="/gracias" component={Gracias} />
          <Route exact path="/backoffice/news" component={NewsScreen} />
          <Route
            exact
            path="/backoffice/activities"
            component={ActivitiesList}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
