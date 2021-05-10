import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Badges.css';
import logo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

import {Link} from 'react-router-dom';

class Badges extends React.Component{
    state={
       data:[
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          firstName: "Scarlett",
          lastName: "Johanson",
          email: "Scarlett_Johanson@gmail.com",
          jobTitle: "Agente de Investigacion",
          twitter: "SJohanson23",
          avatarUrl:"https://larepublica.pe/resizer/V-Xv3L0tagHXK7CD0LlxlCsmNeA=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/R6CLNBX3DBD5BHC4CMVSS5NRH4.jpg"  },
        {
            
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          firstName: "Elizabeth",
          lastName: "Olsen",
          email: "EOlsen@hotmail.com",
          jobTitle: "Super Heroina",
          twitter: "EOlsen",
          avatarUrl: "https://i.pinimg.com/originals/5a/80/0d/5a800d4966b0f221f1c4995524ede2f0.jpg"
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          firstName: "Brie",
          lastName: "Larson",
          email: "BLarson@hotmail.com",
          jobTitle: "Capitana Marvel",
          twitter: "BLarson30",
          avatarUrl: "https://c.wallhere.com/photos/b4/ff/Brie_Larson_actress_women-1185359.jpg!d"
        }

      ] 
    }

    constructor(props){
       super(props);//inicializamos la superclases
       console.log('1.constructor');
    }

    componentDidMount(){
        console.log('3. ComponentDidMount');
    }

  

    render(){
        console.log('2.render()');
        return (
            <div>
                <Navbar />
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={logo} alt="" className="Badges_conf-logo"/>
                        </div>
                    </div>     
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>

                       
                    </div>
                </div>
            


             

            </div>
        );
    }
}

export default Badges;