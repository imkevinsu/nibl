import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Restaurant extends Component {
  render() {
    const restaurant = this.props.location.state.restaurant
    const { venue } = restaurant;
    const img = `${venue.photos.groups[0].items[0].prefix}500${venue.photos.groups[0].items[0].suffix}`
      if (!restaurant) {
        return <div>Sorry, but the restaurant was not found</div>
      }

    return (
      <div className="ui container">
        <h1>{venue.name}</h1>
        <h2>Store ID: {venue.id}</h2>
        <h2>Phone: {venue.contact.formatedPhone}</h2>
        <h2>Address: {venue.location.formattedAddress.join('\n')}</h2>

        <h2>Lat: {venue.location.labeledLatLngs[0].lat}</h2>
        <h2>Lng: {venue.location.labeledLatLngs[0].lng}</h2>
        <h2><Link to='/restaurants'>Back</Link></h2>
      </div>
    )
  }
}

export default Restaurant