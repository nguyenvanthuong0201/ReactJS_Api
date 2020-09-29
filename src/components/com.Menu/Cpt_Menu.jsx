import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

const Menus=[
        {
            name:"Trang chủ",
            to:"/",
            exact: true
        },
        {
            name:"Quản lý sản phẩm",
            to:"/productList",
            exact: false
        },
]

const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
    return (
        <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match})=>{
            let active =match ? 'active' : '';
            return(
                <li className={active}>
                    <Link to ={to} >
                    {label}
                    </Link>
                </li>
            )
        }}
        
        />
    )
}

class Cpt_Menu extends Component {
    showMenu=(Menus)=>{
        let result= null
        if(Menus.length > 0){
            result = Menus.map((Menu,index)=>{
                return(
                    <MenuLink
                    key={index}
                    label={Menu.name}
                    to={Menu.to}
                    activeOnlyWhenExact={Menu.exact}
                    />
                )
            })
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Call APIs</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenu(Menus)}
              </ul>
            </div>
          </nav>
        );
    }
}

export default Cpt_Menu;