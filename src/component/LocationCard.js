import "./LocationCard.css"
import { Link } from "react-router-dom";

export default function LocationCard({location}){
   return ( <div className="locationCard">
        <table border="0">
             <tr>
                <td>Lokasi</td>
                <td>:</td>
                <td>{location.query}</td>
            </tr>
        </table>
        <Link className="buttonLocationCard" to={'/detail_location/'+location.query}>Detail Lokasi</Link>
    </div>)
}