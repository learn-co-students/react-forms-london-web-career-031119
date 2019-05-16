import React, { Component } from 'react';

class Form extends Component {

   state = {
      firstName: 'First!',
      lastName: 'Last!'
   }

   handleFirstChange = (e) => {
      this.setState({
         firstName: e.target.value
      });
   }

   handleLastChange = (e) => {
      this.setState({
         lastName: e.target.value
      });
   }

   render() {
      const { state, handleFirstChange, handleLastChange } = this
      const { firstName, lastName } = state
      return (
         <form>
            <input
               type='text'
               name='firstName'
               onChange={e => handleFirstChange(e)}
               value={firstName} />
            <input
               type='text'
               name='lastName'
               onChange={e => handleLastChange(e)}
               value={lastName} />
         </form>
      );
   }

}

export default Form;