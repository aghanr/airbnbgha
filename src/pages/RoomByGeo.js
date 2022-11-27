import Layout from "../component/Layout";
import Input from "../component/Input";
import ButtonPrimary from "../component/ButtonPrimary";
import "./RoomByGeo.css";
import Gap from "../component/Gap";
import { useState } from 'react';
import axios from 'axios';
import RoomByGeoCard from '../component/RoomByGeoCard';

export default function RoomByGeo(){
    const [data,setData] = useState(null);
    const [location,setLocation] = useState(null);
    const [tglCheckIn,setTglCheckIn] = useState(null);
    const [tglCheckOut,setTglCheckOut] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const handleFilterNeLat = (e) => setLocation(e.target.value);
    const handleFilterNeLng = (e) => setLocation(e.target.value);
    const handleFilterSwLat = (e) => setLocation(e.target.value);
    const handleFilterSwLng = (e) => setLocation(e.target.value);
    const handleFilterTglCheckIn = (e) => setTglCheckIn(e.target.value);
    const handleFilterTglCheckOut = (e) => setTglCheckOut(e.target.value);

    const handleSearchGeo = async ()=>{
        try{
            setIsLoading(true);
            const response = await axios.get(
                "https://airbnb13.p.rapidapi.com/search-location",
                {
                    params:{
                        location: location,
                        checkin: tglCheckIn,
                        checkout: tglCheckOut,
                        adults: '1',
                        children: '0',
                        infants: '0',
                        page: '1'
                      },
                    headers: {
                        'X-RapidAPI-Key': '2ca86b6fe7msha22733cea6a09b6p1e6f26jsn286531049c3b',
                        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
                    }
                }
            )
            if(response.status === 200){
                setIsLoading(false);
                setData(response.data.results);
            }else{
                console.log('lokasi tidak ditemukan');
            }
        }catch(err){
            console.log('Terjadi kesalahan pada server');
        }
       
    };

    return (
        <Layout>
            <div className="contentRoomByGeo">
                <img src="/images/airbnb.png" className="contentRoomByGeoImg" alt="rocket"></img>
                <Gap height={50}/>
                <Input 
                    label="Latitude Northeastern" 
                    placeholder="Masukkan Latitude Northeastern" 
                    onChange={handleFilterNeLat}    
                />
                 <Gap height={15}/>
                <Input 
                    label="Longitude Northeastern" 
                    placeholder="Masukkan Longitude Northeastern" 
                    onChange={handleFilterNeLng}    
                />
                <Gap height={15}/>
                <Input 
                    label="Latitude Southwestern" 
                    placeholder="Masukkan Latitude Southwestern" 
                    onChange={handleFilterSwLat}    
                />
                <Gap height={15}/>
                <Input 
                    label="Latitude Southwestern" 
                    placeholder="Masukkan Latitude Southwestern" 
                    onChange={handleFilterSwLng}    
                />
                 <Gap height={15}/>
                <Input 
                    label="Tanggal Check In" 
                    placeholder="Masukkan Tanggal Check In Y-m-d" 
                    onChange={handleFilterTglCheckIn}    
                />
                <Gap height={15}/>
                <Input 
                    label="Tanggal Check Out" 
                    placeholder="Masukkan Tanggal Check Out Y-m-d" 
                    onChange={handleFilterTglCheckOut}    
                />
                <Gap height={15}/>
                <ButtonPrimary
                    text="Cek"
                    onClick={handleSearchGeo}
                />
                  <Gap height={50}/>
                {
                    isLoading ?
                    <p>Sedang Mengambil Data..</p>
                        :(
                            (data)?
                            data.map(function(item,index){
                               return <div key={index}>
                                        <Gap height={30}/>
                                        <RoomByGeoCard
                                            room={item}
                                        />
                                     </div>
                            })
                            : <p></p>
                        )
                }
            </div>
        </Layout>
    )
}