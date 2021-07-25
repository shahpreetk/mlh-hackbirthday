// @ts-check
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RefreshIcon } from "@heroicons/react/outline";

import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const BirthdayTwin = lazy(() => import("./pages/BirthdayTwin"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <section>
            <div className="flex h-screen">
              <div className="m-auto text-rose-300">
                <RefreshIcon className="text-rose-300" />
                <h1 className="text-rose-600">Loading...</h1>
              </div>
            </div>
          </section>
        }
      >
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE_PAGE} component={Profile} />
          <Route path={ROUTES.BIRTHDAY_TWIN} component={BirthdayTwin} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
