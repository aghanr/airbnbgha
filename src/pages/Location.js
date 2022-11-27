import { useNavigate } from 'react-router-dom';
import Layout from "../component/Layout";
import Input from "../component/Input";
import ButtonPrimary from "../component/ButtonPrimary";
import "./Location.css";
import Gap from "../component/Gap";
import { useState } from 'react';
import axios from 'axios';
import LocationCard from '../component/LocationCard';

export default function Location(){
    const navigate = useNavigate(); 
    const [data,setData] = useState(null);
    const [location,setLocation] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const handleFilterLoc = (e) => setLocation(e.target.value);
    const handleSearchLoc = async ()=>{
        try{
            setIsLoading(true);
            const response = await axios.get(
                "https://airbnb13.p.rapidapi.com/autocomplete",
                {
                    params:{
                        query: location
                    },
                    headers: {
                        'X-RapidAPI-Key': '2ca86b6fe7msha22733cea6a09b6p1e6f26jsn286531049c3b',
                        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
                    }
                }
            )
            if(response.status === 200){
                setIsLoading(false);
                setData(response.data);
            }else{
                console.log('lokasi tidak ditemukan');
            }
        }catch(err){
            console.log('Terjadi kesalahan pada server');
        }
       
    };

    return (
        <Layout>
            <div className="contentStart">
                <img src="/images/airbnb.png" className="contentStartImg" alt="rocket"></img>
                <Gap height={50}/>
                <Input 
                    label="Lokasi" 
                    placeholder="Masukkan Lokasi" 
                    onChange={handleFilterLoc}    
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
                                        <LocationCard
                                            location={item}
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