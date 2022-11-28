import LinkPrimary from "../component/LinkPrimary";
import LinkSecondary from "../component/LinkSecondary";
import Layout from "../component/Layout";
import Gap from "../component/Gap";

import "./Welcome.css";

export default function Welcome(){
    return (
        <Layout>
            <div className="contentWelcome">
                <img src="/images/airbnb.png" className="contentWelcomeImg" alt="airbnb"></img>
                <Gap
                    height={100}
                />
               <LinkPrimary
                    url="location"
                    text="Cari Lokasi"
                />
                <Gap
                    height={10}
                />
                <LinkSecondary
                    url="/room_by_loc"
                    text="Cari Kamar Berdasar Lokasi"
                />
                 <Gap
                    height={10}
                />
               <LinkPrimary
                    url="/room_by_geo"
                    text="Cari Kamar Berdasar Geo Koordinat"
                />
                <Gap
                    height={10}
                />
            </div>
        </Layout>
    )
}