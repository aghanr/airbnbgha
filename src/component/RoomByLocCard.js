import "./RoomByLocCard.css"
import { Link } from "react-router-dom";

export default function RoomByLocCard({room}){
   return ( <div className="roomByLocCard">
        <table border="0">
             <tr>
                <td>Lokasi</td>
                <td>:</td>
                <td>{room.name}</td>
            </tr>
        </table>
        <a className="buttonRoomByLocCard" target="_blank" href={room.url}>Lihat Web</a>
    </div>)
}