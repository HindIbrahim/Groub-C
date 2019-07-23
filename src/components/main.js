import {Switch, Route} from 'react-router-dom';
import Preview from './Preview';
import AboutUs from './AboutUS';
import UploadCv from './UploadCv';
import React  from 'react';
import Home from './Home';


const Main =()=>(
    <Switch>
        
        <Route exact path="/Home" component={Home}/>
        <Route path="/UploadCv" component={UploadCv}/>
        <Route path="/Preview" component={Preview}/>
        <Route path="/AboutUs" component={AboutUs}/>
    </Switch>
)

export default Main;