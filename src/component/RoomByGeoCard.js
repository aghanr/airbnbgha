import "./RoomByGeoCard.css"
import { Link } from "react-router-dom";

export default function RoomByGeoCard({room}){
   return ( <div className="roomByGeoCard">
        <table border="0">
             <tr>
                <td></td>
                <td></td>
                <td>{room.name}</td>
            </tr>
        </table>
        <a className="buttonRoomByGeoCard" target="_blank" href={room.url}>Lihat Web</a>
    </div>)
}