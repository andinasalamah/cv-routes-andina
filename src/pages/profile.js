import React from 'react';

    const Profile = () => {
      return (
        <div className="profile-page">
                <div className="page-1">
                <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQGQprc1zIDwcA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mr57ZdU2zLSZT5jU759s95WPCGJKQP5VTdAih80rqiI"
                    alt="profile"
                    className="profile-img"
                />
                <h1>About Me</h1>
            </div>
                <div>
                    <p>I am a person who always in time, respect each others and want to learn a new things.</p>
          
        <div className="page-2">
                <h1>Contact Details</h1>
            </div>
                <p>Andina</p>
                <p>Jakarta, 10650</p>
                <p>andina.salamah@gmail.com</p>
                </div>
        
        <div className="page-3">
                <h1>Education</h1>
            </div>
                <div>
                <h2>Telkom University</h2>
                    <p>Bachelor in Information System</p>
                    <p>August 2016 - August 2020</p>
                    <p>I studied programming and business, specialize in Enterprise Resource Planning</p>
                 <h2>Darunnajah Islamic Boarding School</h2>
                    <p>Senior High School</p>
                    <p>August 2016</p>
                    <p>Majored in Science</p>
                </div>

            <div className="page-4">
                <h1>Work</h1>
            </div>
                <div>
                <h2>ERP Laboratorium</h2>
                    <p>Public Relation Division</p>
                    <p>Aug 2018 - May 2020</p>
                    <p>Labwork assistant, Created presentation and module for practicum and Created poster for particular events</p>
                <h2>PT. Pertamina Trans Kontinental</h2>
                    <p>Student Internship</p>
                    <p>June 2019 - Aug 2019</p>
                    <p>Developed PRIDE system using C# Programming Language</p>
                </div>
            </div>
        )
    }

export default Profile;