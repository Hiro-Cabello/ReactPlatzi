import React from 'react';


class BadgeForm extends React.Component{

    //Esto es para inciar el estado
    //state = {
        /*
        firstName:"",
        lastName:"",
        email:"",
        twitter:"",
        jobTitle : 'Ingenieer',
        */
   // };

    
    /*
    handleChange = e =>{
      
        //console.log({
        //    name:e.target.name,
        //    value:e.target.value,
        //  });
        
       this.setState({
           //firstName : e.target.value
           [e.target.name]:e.target.value
       });

    };
    */

    handleClick = e =>{
        console.log("Button was clicked");
    };

    handleSubmit = e =>{
        e.preventDefault();//Con esto se detiene para que no pase el formulario
        console.log('Form was submitted');
    };


//Nota un button por defecto es submit 
    render(){
        return(
            <div>
                <h1>New Attendat</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                        //onChange={this.handleChange}//Esto lo usaba si solo queria ver las modificaciones en este componente pero como lo estoy recibiendo del bagdeNew 
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control"
                        name="firstName"
                        value={this.props.formValue.firstName}//Esto es para pasar los inpt de no controlados a controlados 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                        //onChange={this.handleChange}
                        onChange={this.props.onChange}
                        type="text" 
                        className="form-control"
                        name="lastName"
                        value={this.props.formValue.lastName}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input 
                        //onChange={this.handleChange}
                        onChange={this.props.onChange}
                        type="email"                        
                        className="form-control"
                        name="email"
                        value={this.props.formValue.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">jobTitle</label>
                        <input 
                        //onChange={this.handleChange}
                        onChange={this.props.onChange}
                        type="text"                        
                        className="form-control"
                        name="jobTitle"
                        value={this.props.formValue.jobTitle}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                        //onChange={this.handleChange}
                        onChange={this.props.onChange}
                        type="text"                        
                        className="form-control"
                        name="twitter"
                        value={this.props.formValue.twitter}
                        />
                    </div>


                    
                    <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

} 

export default BadgeForm;