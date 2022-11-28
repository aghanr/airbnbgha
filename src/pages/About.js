import Layout from "../component/Layout";
import Gap from "../component/Gap";
import "./About.css";


export default function About(){
    return <Layout>
         <div className="contentAbout">
                <img src="/images/agha.png" className="contentAboutImg" alt="rocket"></img>
                <Gap height={20}/>
                <h2 className="contentAboutTitle">Tentang AIRBNBGHA</h2>
                <p className="contentAboutBody">Aplikasi ini dikembangkan oleh Anugrah Nur Rachmat, NIM 21120120130126, dengan tujuan memenuhi tugas akhir Praktikum Pemrograman Perangkat Bergerak</p>
            </div>
    </Layout>
}