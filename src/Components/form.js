import React from "react";

function Forms() {

    // Handle change...
    const handleChange = (event) => {
        event.preventDefault()
        // console.log('Value:', event.target.value)
    }
  return (
    <section className="form-container">
      <form onSubmit={(event) => {
        event.preventDefault()
        const elements = event.target.elements
        const { name, email, tel} = elements
        console.log(name.value, email.value, tel.value)
      }}>
        <input onChange={handleChange} type="text" placeholder="Enter your name" name='name' />
        <input type="text" placeholder="Enter your email" name='email' />
        <input type="text" placeholder="Enter your phone" name='tel' />
        <button className='submit-btn' type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Forms;
