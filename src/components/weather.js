import React from "react";

/* full verssion */
// class Weather extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.city &&
//                     <div>
//                         <p>Location: {this.props.city}, {this.props.country}</p>
//                         <p>Temp: {this.props.temp}</p>
//                         <p>Sunrise: {this.props.sunrise}</p>
//                         <p>Sunset: {this.props.sunset}</p>
//                     </div>
//                 }
//                 <p>{this.props.error}</p>
//             </div>
//         );
//     }
// }

/*short verssion */
const Weather = props =>(
    <div >
    {props.city &&
        <div className="infoWeath">
            <p>Location: {props.city}, {props.country}</p>
            <p>Temp: {props.temp} &#176;C</p>
            <p>Sunrise: {props.sunrise}</p>
            <p>Sunset: {props.sunset}</p>
        </div>
    }
    <p className="error">{props.error}</p>
    </div>
)

export default Weather;