import React, { Component } from 'react'

import axios from 'axios'

export default class GetData extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data: [],
       isLoading: false,
    }

  }

  componentDidMount() {

    this.setState({ isLoading: true });

    axios.get('https://data.austintexas.gov/resource/fs3c-45ge.json?ip_comm_status=ONLINE')
    .then(result => {
      this.setState({data: result.data, isLoading: false})
      console.log(this.state);
    })
    .catch(error => console.log('Error:', error))

  }

  render() {

    const { data, isLoading } = this.state;
    let quickKey = 0;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="traffic-wrapper">
        {data.slice(0, 50).map(dataObject =>
          <div key={quickKey++} className="traffic-item">
            <img key={dataObject.atd_location_id} src={dataObject.screenshot_address} alt={dataObject.atd_location_id} />
            <p key={dataObject.coa_intersection_id}>{dataObject.location_name}</p>
            <a key={quickKey * 3.14} href={dataObject.screenshot_address}>View Image</a>
          </div>
        )}
      </div>
    )
  }
}

