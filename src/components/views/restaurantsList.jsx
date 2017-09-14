import React, { Component } from 'react';
import RestaurantCard from './static/restaurantCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
const dashify = (str) => {
  return str.toLowerCase().split(' ').join('-')
}

class RestaurantsList extends Component {

  render() {
    console.log('\'hi from RestaurantsList\'', 'hi from RestaurantsList');
    return (
      <ul>
        {
          this.props.restaurants.map(r => {
            var store_name = dashify(r.venue.name)
            return (
            <li className="listStyle" key={r.venue.id}>
                <RestaurantCard restaurant={r}/>
            </li>
          )})
        }
      </ul>
    )
  }
}

export default RestaurantsList