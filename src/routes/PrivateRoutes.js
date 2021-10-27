import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Page404 from '../pages/404/404Page';


function PrivateRoutes() {
  return (
    <>
      {/* NAVBAR & SIDEBAR*/}
      {/* <PrivateNavBar /> */}
      {/* <SideBar /> */}

      {/* ROUTES */}
      <Switch>
        <Route exact path="/backoffice" component={Backoffice} />
        <Route exact path="/backoffice/home" component={HomeForm} />
        <Route exact path="/backoffice/activities" component={ActivitiesList} />
        <Route exact path="/backoffice/activities/create" component={FormActivities} />
        <Route exact path="/backoffice/activities/edit/:id" component={FormActivities} />
        <Route exact path="/backoffice/activities/delete/:id" component={FormActivities} />
        <Route exact path="/backoffice/categories" component={CategoriesBackOffice} />
        <Route exact path="/backoffice/categories/create" component={CategoriesForm} />
        <Route exact path="/backoffice/categories/edit/:id" component={CategoriesForm} />
        <Route exact path="/backoffice/categories/delete/:id" component={CategoriesForm} />
        <Route exact path="/backoffice/members" component={MemberList} />
        <Route exact path="/backoffice/members/create" component={MemberForm} />
        <Route exact path="/backoffice/members/edit/:id" component={MemberForm} />
        <Route exact path="/backoffice/members/delete/:id" component={MemberForm} />
        <Route exact path="/backoffice/news" component={NewsScreen} />
        <Route exact path="/backoffice/news/create" component={FormNovedades} />
        <Route exact path="/backoffice/news/edit/:id" component={FormNovedades} />
        <Route exact path="/backoffice/news/delete/:id" component={FormNovedades} />
        <Route exact path="/backoffice/organization" component={Organization} />
        <Route exact path="/backoffice/organization/edit" component={OrgForm} />
        <Route exact path="/backoffice/projects/create" component={FormProjects} />
        <Route exact path="/backoffice/projects/edit/:id" component={FormProjects} />
        <Route exact path="/backoffice/projects/delete/:id" component={FormProjects} />
        <Route exact path="/backoffice/slides" component={SlidesScreen} />
        <Route exact path="/backoffice/slides/create" component={SlideForm} />
        <Route exact path="/backoffice/slides/edit/:id" component={SlideForm} />
        <Route exact path="/backoffice/slides/delete/:id" component={SlideForm} />
        <Route exact path="/backoffice/testimonials/create" component={TestimonialForm} />
        <Route exact path="/backoffice/testimonials/edit/:id" component={TestimonialForm} />
        <Route exact path="/backoffice/testimonials/delete/:id" component={TestimonialForm} />
        <Route exact path="/backoffice/users" component={UsersList} />
        <Route exact path="/backoffice/users/create" component={UserForm} />
        <Route exact path="/backoffice/users/edit/:id" component={UserForm} />
        <Route exact path="/backoffice/users/delete/:id" component={UserForm} />
        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default PrivateRoutes;
