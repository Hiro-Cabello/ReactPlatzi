import React from 'react';

import confLogo from  '../images/badge-header.svg';
//para insertar mis estilos
import '../styles/Badge.css';

/*En react vamos a usar para refereirnos a las clase  el clasename pues ya existe un keyword que es class y es exclusivo para las clases */
class Badge extends React.Component {
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.perfil} alt="Avatar"/>
                <h1>{this.props.nombre} <br/>{this.props.apellido}</h1>
            </div>

            <div className="Badge__section-info">
            <h3>{this.props.carrera}</h3>
            <div>@{this.props.insta}</div>
            </div>

            <div className="Badge__footer">#Platzicom</div>

        </div>;
           
        
    }

}

//para exportar
export default Badge;