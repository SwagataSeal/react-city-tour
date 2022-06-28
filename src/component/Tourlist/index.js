import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';
export default class ToutList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const SortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: SortedTours,
    });
  };

  render() {
    // console.log(this.state.tour);

    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
