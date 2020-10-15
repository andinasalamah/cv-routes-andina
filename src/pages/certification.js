import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Certification extends Component {
    render() {
      return (
        <div className="page-5">
            <h1>Certifications:</h1>

                <div className="page-6">
                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303035383130303030313034&view=V.%10%13" rel="SAP01 Fundamental" target="_blank">
                        <button type="button" className="item1">SAP01 Fundamental</button>
                    </a>

                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303037343233303030313035&view=V.%10%13" rel="SCM 100" target="_blank">
                        <button type="button" className="item2">SCM 100</button>
                    </a>

                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303037343631303030313031&view=V.%10%11" rel="SCM 300" target="_blank">
                        <button type="button" className="item3">SCM 300</button>
                    </a>

                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303037333531303030313033&view=V.%10%13" rel="SCM 500" target="_blank">
                        <button type="button" className="item4">SCM 500</button>
                    </a>

                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303037333531303030313033&view=V.%10%13" rel="HR 050" target="_blank">
                        <button type="button" className="item5">HR 050</button>
                    </a>

                    <a href="http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303037343433303030313131&view=V.%10%19" rel="AC 010" target="_blank">
                        <button type="button" className="item6">AC 010</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Certification;