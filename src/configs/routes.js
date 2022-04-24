import {Map} from 'immutable';

import Home from './../routers/pages/Home/Home';
import {About} from './../routers/pages/About/About'
import {error} from './../routers/pages/404/404'

//by default exact:true

export const routes = Map({
    home:{
        url:'/',
        Component:Home,
    },
    about:{
        url:'about',
        Component:About,
    },
    error:{
        url:'*',
        Component:error,
    }
});
