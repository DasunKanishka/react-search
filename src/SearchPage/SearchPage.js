import React from 'react';

import { Users } from '../json-store/';

class SearchPage extends React.Component {
    constructor(){
        super();

        this.state = {
            search: null
        };
    }

    searchData = (event) => {
        let keyword = event.target.value;

        this.setState({ search: keyword });
    }

    render() {
        const users = Users.filter(data => {
            if(this.state.search == null) {
                return data
            } else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
          }).map(data => {
            return(
                <tr key={ data._id }>
                    <td>{ data.name }</td>
                    <td>{ data.alias }</td>
                    <td>{ data.email }</td>
                    <td>{ data.phone }</td>
                    <td>{ data.signature }</td>
                </tr>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-12">
                        <p>&nbsp;</p>

                        <input className="form-control" type="text" placeholder="Search..." onChange={ (e) => this.searchData(e) } />

                        <p>&nbsp;</p>
                    </div>

                    <div className="col-sm-12 table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Alias</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Signature</th>
                                </tr>
                            </thead>

                            <tbody>{ users }</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export { SearchPage };
