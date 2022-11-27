import Layout from "../component/Layout";
import Gap from "../component/Gap";
import "./About.css";


export default function About(){
    return <Layout>
         <div className="contentAbout">
                <img src="/images/airbnb.png" className="contentAboutImg" alt="rocket"></img>
                <Gap height={50}/>
                <h2 className="contentAboutTitle">Tentang AIRBNBGHA</h2>
                <p className="contentAboutBody">Aplikasi ini dikembangkan oleh Anugrah Nur Rahmat Mahasiswa Universitas Diponegoro Jurusan Teknik Komputer Angkatan 2020, dengan tujuan memenuhi tugas akhir praktikum pemrograman perangkat bergerak</p>
            </div>
    </Layout>
}