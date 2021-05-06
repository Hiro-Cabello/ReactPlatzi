import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Badge.css';
import '../styles/BadgeNew.css';
import BadgeForm from '../components/BadgeForm';


import logo from   '../images/badge-header.svg';
import Badge from '../components/Badge';
//Esta es la pagina

class BadgeNew extends React.Component { 
    //Vamos a poner el valor del estado en una posicion que es 
    //visible para los diversos componentes 

    state={form : {
        firstName:'',
        lastName:'',
        email:'',
        twitter:'',
        jobTitle : '',

    } };

    handleChange = e =>{
        this.setState({
            form : {
                ...this.state.form,
                [e.target.name]:e.target.value ,
            },
        });
    };


    render(){
        return (
          <div>
              <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={logo} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <Badge 
                    
                        apellido={this.state.form.lastName}
                        nombre={this.state.form.firstName}
                        perfil="https://2.gravatar.com/avatar/8a71787d12c0e8606b7c4eff6d50cb04?s=400&d=mm"
                        carrera={this.state.form.jobTitle}
                        insta={this.state.form.twitter}
                    />
                    </div>



                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange}  formValue={this.state.form}/>
                    </div>




                </div>

            </div>

          </div>
        )
    }
}

export default BadgeNew;