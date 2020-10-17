import React, { Component } from 'react';


class Home extends Component {
  render() {
    return(
        <div className="banner-text">

              <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1498/1498485.svg"
                    alt="avatar"
                    className="avatar-img"
                />
                <h1>Andina Salamah</h1>
          <p>ERP | HTML/CSS | Java | Python | C# </p>

        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/andinasalamah/" rel="linkedin" target="_blank">
              <img
                  src="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg"/>
          </a>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/andinasalamah/" rel="instagram" target="_blank">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/145/145805.svg"/>
          </a>
          
          {/* Github */}
          <a href="https://github.com/andinasalamah/" rel="github" target="_blank">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/1051/1051275.svg"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
