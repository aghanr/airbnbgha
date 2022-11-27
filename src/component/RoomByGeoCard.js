import "./RoomByGeoCard.css"

export default function RoomByGeoCard({room}){
   return ( <div className="roomByGeoCard">
        <table border="0">
             <tr>
                <td></td>
                <td></td>
                <td>{room.name}</td>
            </tr>
        </table>
        <a className="buttonRoomByGeoCard" target="_blank" rel="noreferrer" href={room.url}>Lihat Web</a>
    </div>)
}