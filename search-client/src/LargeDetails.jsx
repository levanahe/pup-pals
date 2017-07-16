import React, { Component } from 'react';

class LargeDetails extends Component {
  handleClick = () => {
    this.props.toggleHidden();
  }
  
  render() {
    return (
      <div className="largedetails-container">
        <div className="largedetails-titlebar">
          <h1 className="largedetails-titlebar-title">Pup Hangout</h1>
          <h2 className="largedetails-titlebar-subtitle">10 Going</h2>
          <a href="#" onClick={this.handleClick.bind(this)} className="largedetails-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 80">
            <path fill="#FFFFFF" d="M34.4 40L1.174 73.168c-1.563 1.56-1.566 4.093-.006 5.657s4.09 1.567 5.654.007L40 45.66s-.003.004 33.173 33.17c1.56 1.56 4.098 1.56 5.658 0 1.56-1.56 1.56-4.1 0-5.66C45.678 40.043 45.6 40 45.6 40s.077.043 33.23-33.17c1.56-1.56 1.56-4.13 0-5.66-1.56-1.56-4.087-1.56-5.657 0C39.997 34.36 39.997 34.4 39.997 34.4L6.825 1.172C5.265-.39 2.732-.39 1.17 1.172c-1.56 1.562-1.56 4.094 0 5.656L34.4 40z"></path>
            </svg>
          </a>
        </div>
        <div className="largedetails-content">
          <div className="largedetails-section">
            <span className="largedetails-date"><i className="fa fa-clock-o" aria-hidden="true"></i> Thu, July 20, 2017</span>
            <span className="largedetails-time">12:00 PM - 4:00PM</span>
            <span className="largedetails-location"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp; Lighthouse Labs</span>
            <br />
            <br />
            <a href="/events/1" target="_blank" className="btn btn-primary largedetails-eventpage">Go to event page</a>                        
          </div>
          <div className="largedetails-section">
            <span className="largedetails-detailbody">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.Donec quam felis, ultricies nec, pellentesque eu, pretium quis.Donec quam felis, ultricies nec, pellentesque eu, pretium.Donec quam felis, ultricies nec, pellentesque eu, pretium quis.Donec quam felis, ultricies nec, pellentesque eu, pretium quis.Donec quam felis, ultricies nec, pellentesque eu, pretium quis.Donec quam felis, ultricies nec, pellentesque eu, pretium.</span>
          </div>
        </div>  
      </div>
    );
  }
}

export default LargeDetails;