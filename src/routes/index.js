import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {

  return (
    <Suspense fallback={
      <LoadingScreen />
    }>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    //auth

    // {
    //   path: "auth",
    //   children: [
    //     {
    //       path: "login",
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       ),
    //     },
    //   ],
    // },

    // Admin Routes

    // {
    //   path: "/mantenedor",
    //   element: <AdminLayout />,
    //   children: [
    //     { path: '', element: <Navigate replace to='home'/> },
    //   ]
    // },

    // Main Routes

    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        // { path: "coming-soon", element: <ComingSoon /> },
        // { path: "maintenance", element: <Maintenance /> },
        // { path: "500", element: <Page500 /> },
        // { path: "404", element: <NotFound /> },
        // { path: "*", element: <Navigate to="/404" replace /> },
        {path: '*', element: <div> error</div> }
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "consulta-online", element: <OnlineConsult /> },
        { path: "tus-dudas", element: <Doubts /> },
        { path: "articulos", element: <Articles /> },
        { path: "contacto", element: <Contact /> },
      ],
    },
    {
      path: '/nosotros',
      element: <MainLayout />,
      children: [
        {path: '', element:  <AboutUs /> },
        // {path: 'equipo', element: <FormSuccess />},
        // {path: 'instalaciones', element: <FormFail />}
      ]
    },
    {
      path: '/procedimientos',
      element: <MainLayout />,
      children: [
        {path: '', element: <Procedures />
    },
        // {path: 'hombre', element: <FormSuccess />},
        // {path: 'mujer', element: <FormFail />}
      ]
    },
    {
      path: '/antes-y-despues',
      element: <MainLayout />,
      children: [
        {path: '', element: <BeforeAndAfter />},
        // {path: 'hombre', element: <FormSuccess />},
        // {path: 'mujer', element: <FormFail />}
      ]
    },
  ])
}

const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const Articles = Loadable(lazy(() => import('../pages/Articles')));
const OnlineConsult = Loadable(lazy(() => import('../pages/OnlineConsult')));
const Doubts = Loadable(lazy(() => import('../pages/Doubts')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
const BeforeAndAfter = Loadable(lazy(() => import('../pages/BeforeAndAfter')));
const Procedures = Loadable(lazy(() => import('../pages/Procedures')));
