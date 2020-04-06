import React , { Component } from 'react';

export default class Searcher extends Component {

    searchRef = React.createRef();

    getData = e => {
        e.preventDefault();

        // Take the value of input
        const term = this.searchRef.current.value;

        // Show the value 
        this.props.dataSearching(term);
    }

    render = () => {
        return(
            <form className="p-4" onSubmit={this.getData}> 
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control text-center" placeholder="Searcher of images"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block" value="Search"/>
                    </div>
                </div>
            </form>
        );
    }
}

