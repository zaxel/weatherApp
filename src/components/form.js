import React from "react";

/*full verssion */
// class Form extends React.Component{
//     render(){
//         return(
//             <form onSubmit={this.props.weatherMethod}>
//                 <input type="text" name="city" placeholder="City" />
//                 <button>Get the weather</button>
//             </form>
//         );
//     }
// }

/*short verssion */
const Form = props =>(
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Enter Your City" />
        <button>Get the weather</button>
    </form>
)

export default Form;