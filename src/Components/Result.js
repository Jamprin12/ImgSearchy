import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

export default class Result extends Component {

    showImages = () => {
        const images = this.props.images;

        if (images.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p5 row">
                    {images.map((img) => (
                        <Image
                            key={img.id}
                            image={img} />
                    ))}
                </div>
                <Pagination
                    previusPage={this.props.previusPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}