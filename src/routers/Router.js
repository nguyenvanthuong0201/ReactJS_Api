import React from 'react'
import PageAction from '../pages/PageAction/PageAction';
import PageHome from '../pages/PageHome/PageHome';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import PageProductList from '../pages/PageProductList/PageProductList';
const Router=[
    {
        path : "/",
        exact: true,
        main: ()=> <PageHome/>
    },
    {
        path : "/productList",
        exact: false,
        main: ()=> <PageProductList/>
    },
    {
        path : "/product/add",
        exact: false,
        main: ({history})=> <PageAction history={history}/>
    },
    {
        path : "/product/:id/edit",
        exact: false,
        main: ({match , history})=> <PageAction match = {match} history={history}/>
    },
    {
        path : "",
        exact: false,
        main: ()=> <PageNotFound/>
    },
];
export default Router;