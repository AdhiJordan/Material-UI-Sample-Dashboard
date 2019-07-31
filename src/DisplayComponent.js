import React from 'react';
import './App.css';
import userdata from './data/user.json'

export default class DisplayComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
        user: userdata
      }
  }

render() {
return(


      <div className="row">

      <div className="col-sm-12 col-md-4 col-lg-4">

          
            {this.state.user.map((user,id)=>{

               return(

               <div key={id}>
               <div className="card">

            <div className="card-title">
            </div>
            <div className="card-body">
                  <p>{user.namevalue}</p>
               </div>
               <input type="text" placeholder="type your reminders" className=""/>
            </div>

          </div>   

                   );



              })}
             



      </div>


  </div>





   );
}
}