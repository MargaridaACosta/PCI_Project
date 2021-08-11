//src\App.js

// Basic Imports Librarys
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from './redux/User/user.actions'

//Components
//import AdminToolbar from './components/AdminToolbar'

//Pages
import {
  Homepage,
  Login,
  DesignFactory,
  InnovationSpace,
  Incubator,
  Registration,
  Recovery,
  Dashboard,
  Equipment,
  Admin,
  Requisition,
  RequisitionSecond,
  RequisitionTerms,
  EquipmentDetails,
  Cart,
  NotFound,
  ConfirmCheckout,
  NotAvailable,
  Order,
  ProfileEdit,
  AdminEquipments,
  AdminRooms,
  AdminWorkshops,
  Workshop,
  WorkshopDetails,
  Space,
  SpaceDetails
} from './pages';

//Layouts
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
//import DashboardLayout from './layouts/DashboardLayout'

// High Order Component (hoc)
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

//Styles
import './styles/app.scss';

//Template
import Template from './pages/Template'

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, [])

  return (
    <div className="App">
      <Switch>

        {/* HOMEPAGE */}
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )} />

        {/* EQUIPAMENTOS */}
        <Route exact path="/equipments/" render={() => (
          <MainLayout>
            <Equipment />
          </MainLayout>
        )} />

        <Route path="/equipments/:filterType" render={(props) => (
          <MainLayout>
            <Equipment {...props} />
          </MainLayout>
        )} />

        <Route path="/equipment/:equipmentID" render={() => (
          <MainLayout>
            <EquipmentDetails />
          </MainLayout>
        )} />

        {/* ESPAÇOS */}
        <Route exact path="/spaces" render={() => (
          <MainLayout>
            <Space />
          </MainLayout>
        )} />

        <Route path="/spaces/:filterType" render={(props) => (
          <MainLayout>
            <Space {...props} />
          </MainLayout>
        )} />

        <Route path="/space/:spaceID" render={() => (
          <MainLayout>
            <SpaceDetails />
          </MainLayout>
        )} />

        {/* OFICINAS */}
        <Route exact path="/workshops" render={() => (
          <MainLayout>
            <Workshop />
          </MainLayout>
        )} />

        <Route path="/workshops/:filterType" render={(props) => (
          <MainLayout>
            <Workshop {...props} />
          </MainLayout>
        )} />

        <Route path="/workshop/:workshopID" render={() => (
          <MainLayout>
            <WorkshopDetails />
          </MainLayout>
        )} />

        {/* CARRINHO */}
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )} />

        {/* PASSOS DE REQUISIÇÃO */}
        <Route path="/confirm_checkout" render={() => (
          <WithAuth>
            <MainLayout>
              <ConfirmCheckout />
            </MainLayout>
          </WithAuth>

        )} />

        {/* PÁGINAS ESTÁTICAS */}
        <Route path="/designfactory" render={() => (
          <MainLayout>
            <DesignFactory />
          </MainLayout>
        )} />

        <Route path="/innovationspace" render={() => (
          <MainLayout>
            <InnovationSpace />
          </MainLayout>
        )} />

        <Route path="/incubator" render={() => (
          <MainLayout>
            <Incubator />
          </MainLayout>
        )} />


        <Route path="/soon" render={() => (
          <MainLayout>
            <NotAvailable />
          </MainLayout>
        )} />


        {/* PÁGINAS LOGIN && STUFFS LIKE HOLY SHIT */}
        <Route path="/login" render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )} />

        <Route path="/edit_profile" render={() => (
          <WithAuth>
            <MainLayout>
              <ProfileEdit />
            </MainLayout>
          </WithAuth>

        )} />

        <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />

        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />

        {/* ADMIN SETUP */}
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />

        <Route path="/admin_equipments" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <AdminEquipments />
            </AdminLayout>
          </WithAdminAuth>
        )} />

        <Route path="/admin_rooms" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <AdminRooms />
            </AdminLayout>
          </WithAdminAuth>
        )} />

        <Route path="/admin_workshops" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <AdminWorkshops />
            </AdminLayout>
          </WithAdminAuth>
        )} />

        {/* MY ACCOUNT */}
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />

        {/* ENCOMENDA */}
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <MainLayout>
              <Order />
            </MainLayout>
          </WithAuth>
        )} />

        {/* // RENDER DA 404 NOT FOUND */}
        <Route render={() => (
          <MainLayout>
            <NotFound />
          </MainLayout>
        )} />

      </Switch>
    </div>
  )
}

export default App;
