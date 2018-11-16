import React, { Component } from 'react'
import axios from 'axios'

import TrafficCamera from './TrafficCam';

import './TrafficCameras.scss'

export class TrafficCameras extends Component {
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
    const imgUrlBase = 'http://162.89.13.145/CCTVImages/CCTV'; // api returns wrong url. last checked 11/16/18
    
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="traffic-wrapper">
        {data.slice(0, 50).map(dataObject =>
          <TrafficCamera 
            key={ dataObject.camera_id }
            classStyle="traffic-item"
            imageUrl={ `${imgUrlBase}${dataObject.camera_id}.jpg` }
            imageAlt={ dataObject.atd_location_id }
            location={ dataObject.location_name }
            link={ `${imgUrlBase}${dataObject.camera_id}.jpg` }
          />
        )}
      </div>
    )
  }
}

export default TrafficCameras
