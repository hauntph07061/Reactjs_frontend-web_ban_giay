import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listproduct from './components/admin/listproduct';
import Dashboard from './components/admin/dashboard';
import EditFormProduct from './components/admin/form-edit';
import AddFormProduct from './components/admin/form-add';
import WebsiteLayout from './components/layouts/websitelayout';
import Adminlayout from './components/layouts/adminlayout';
import Signin from './components/pages/signin';
import Signup from './components/pages/signup';
import Main from './components/pages/productmain';
import Details from './components/pages/details';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?">
                    <Adminlayout >
                        <Switch>
                            <Route exact path="/admin">
                                <Dashboard />
                            </Route>
                            <Route exact path="/admin/product">
                                <Listproduct {...props} />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AddFormProduct {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id/edit">
                                <EditFormProduct {...props} />
                            </Route>
                        </Switch>
                    </Adminlayout>
                </Route>

                <Route >
                    <WebsiteLayout>
                        <Switch>
                            <Route exact path="/">
                            <Main {...props}/>
                            </Route>
                            <Route exact path="/signup">
                                <Signup {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <Signin {...props}/>
                            </Route>
                            <Route exact path="/details/product/:id">
                                <Details {...props}/>
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>

            </Switch>
        </Router>
    );
};
export default Routes
