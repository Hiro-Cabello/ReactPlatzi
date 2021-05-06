import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/BadgeList.css';
import logito from '../images/twitter.png'

class BadgesList extends React.Component{
    
    render(){
        return( 
        <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-1"></div>

        
                                <div className="col-10 mt-2 ">
                                    <div className="row contenido">
                                        <div className="col-3">
                                            <img className="perfiles mt-2 " src={badge.avatarUrl} alt=""/>
                                        </div>

                                        <div className="col-7">
                                            <p className="mt-2 nombre">{badge.firstName} {badge.lastName} </p>
                                            <div className="row">
                                            <img src={logito} className="logito" alt=""/>
                                            <p className="mt-1 twitt">@{badge.twitter}</p>        
                                            </div>
                                            
                                            <p className="Trabajo">{badge.jobTitle}</p>
                                            
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="col-1"></div>

                            </div>
                        
                        </div>
                        
                    </li>
                )
            })}
        </ul>
    )}
}

export default BadgesList;





                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               