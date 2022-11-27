import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout";
import "./DetailLocation.css";

export default function DetailLocation() {
  const { param } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetailLocation() {
      try {
        const response = await axios.get(
          "https://airbnb13.p.rapidapi.com/autocomplete",
          {
              params:{
                  query: param
              },
              headers: {
                  'X-RapidAPI-Key': '2ca86b6fe7msha22733cea6a09b6p1e6f26jsn286531049c3b',
                  'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
              }
          }
      )
        if (response.status === 200) {
          setData(response.data[0]);
        }
      } catch (err) {
        console.log("err", err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchDetailLocation();
      setIsLoading(false);
    }
    fetchData();
  }, [param]);

  return (
    <Layout>
      <div className="contentDetailLocation">
        <img
          src="/images/airbnb.png"
          className="contentDetailLocationImg"
          alt="rocket"
        ></img>
        {isLoading ? (
          <p>Harap Tunggu..</p>
        ) : (
          <>
            <h1>Detail Lokasi</h1>
            <div className="cardDetailLocation">
              <table border="0" width="100%">
                <tr>
                  <td>Query Lokasi</td>
                  <td>:</td>
                  <td>{data.query}</td>
                </tr>
                <tr>
                  <td>Country Lokasi</td>
                  <td>:</td>
                  <td>{data.country}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
