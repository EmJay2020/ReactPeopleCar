import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PersonCarRow from './PersonCarRow'


class PeopleCarTable extends React.Component{
    state ={
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: {
                make: '',
                model: '',
                year: ''
            }
        }
    }
    componentDidMount= async () =>{
        const response = await Axios.get('api/pplcars/getpeople');
        const people = response.data;
        this.setState({people});
    }
    render(){
        return(
            <div className="container" style={{margin: 60}}>
                <Link to='/AddPerson'><button className="btn btn-success btn-block">Add Person</button></Link>
                <br />


                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
{this.state.people.map(p =>
    <PersonCarRow 
    key={p.id}
    person={p}
    />
    )}
                    </tbody>
                </table>

            </div>


        )
    }
}
export default PeopleCarTable;