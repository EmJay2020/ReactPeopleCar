import React from 'react';
import Axios from 'axios';
import {produce} from 'immer';
import DeleteCarRow from './DeleteCarRow';
class DeleteCars extends React.Component{
    state={
        cars:[]
    }
    componentDidMount = async () => {
         const {data} = await Axios.get(`/api/pplcars/getcars?id=${this.props.match.params.id}`);
         this.setState({cars: data})
    }
    onSubmit = async () => {        
        await Axios.post('/api/pplcars/deletecars', {id: parseInt(this.props.match.params.id)});
        this.props.history.push('/');
    }
    onCancel = () =>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="container">
                <table className="table table-bordered table-striped" style={{marginTop: 60}}>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map((p, i)=> 
                            <DeleteCarRow
                            key={i}
                            car= {p}/>
                        )}
                    </tbody>
                </table>
                <button className="btn btn-danger btn-block" onClick={this.onSubmit}>Delete Cars</button>
                <button className="btn btn-primary btn-block" onClick={this.onCancel}>Cancel</button>
            </div>

        )
    }
}
export default DeleteCars;