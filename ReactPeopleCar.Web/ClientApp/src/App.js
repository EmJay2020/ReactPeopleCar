import React from 'react';
import {Route} from 'react-router'
import PeopleCarTable from './PeopleCarTable'
import Addperson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';

const App = () => {
    return(
        <div>
            <Route exact path='/' component={PeopleCarTable}/>
            <Route exact path='/Addperson' component={Addperson}/>
            <Route exact path='/AddCar/:id' component={AddCar}/>
            <Route exact path='/deletecar/:id' component={DeleteCars}/>
        </div>
    )
}
export default App;