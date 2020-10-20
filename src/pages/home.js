import React, { useState} from 'react';

const Home = () => {
const [myNumber, setMyNumber] = useState(1);

  return(
        <div className="button">
          <button onClick={() => {setMyNumber(myNumber + 1);}}>Click here to count the visited</button>
          <p>{myNumber}</p>

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
        </div>
      )
    }

export default Home;
