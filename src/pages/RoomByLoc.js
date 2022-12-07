import Layout from "../component/Layout";
import Input from "../component/Input";
import ButtonPrimary from "../component/ButtonPrimary";
import "./RoomByLoc.css";
import Gap from "../component/Gap";
import { useState } from 'react';
import axios from 'axios';
import RoomByLocCard from '../component/RoomByLocCard';

export default function RoomByLoc(){
    const [data,setData] = useState(null);
    const [location,setLocation] = useState(null);
    const [tglCheckIn,setTglCheckIn] = useState(null);
    const [tglCheckOut,setTglCheckOut] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const handleFilterLoc = (e) => setLocation(e.target.value);
    const handleFilterTglCheckIn = (e) => setTglCheckIn(e.target.value);
    const handleFilterTglCheckOut = (e) => setTglCheckOut(e.target.value);

    const handleSearchLoc = async ()=>{
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
            <div className="contentRoomByLoc">
                <img src="/images/airbnb.png" className="contentRoomByLocImg" alt="rocket"></img>
                <Gap height={50}/>
                <Input 
                    label="Lokasi" 
                    placeholder="Masukkan Lokasi" 
                    onChange={handleFilterLoc}    
                />
                <Gap height={15}/>
                <Input 
                    type = "date"
                    label="Tanggal Check In" 
                    placeholder="Masukkan Tanggal Check In Y-m-d" 
                    onChange={handleFilterTglCheckIn}    
                />
                <Gap height={15}/>
                <Input 
                    type = "date"
                    label="Tanggal Check Out" 
                    placeholder="Masukkan Tanggal Check Out Y-m-d" 
                    onChange={handleFilterTglCheckOut}    
                />
                <Gap height={15}/>
                <ButtonPrimary
                    text="Cek"
                    onClick={handleSearchLoc}
                />
                {
                    isLoading ?
                    <p>Sedang Mengambil Data..</p>
                        :(
                            (data)?
                            data.map(function(item,index){
                               return <div key={index}>
                                        <Gap height={30}/>
                                        <RoomByLocCard
                                            room={item}
                                        />
                                     </div>
                            }):<p></p>
                            
                        )
                }
            </div>
        </Layout>
    )
}