import Image from "next/image";
import './style.css';
import RekomKategories from './components/Landing_Page/Category/Card_Category';
import Products from './product/components/Card_Product.tsx';
import WhyEpicGoods from './components/Landing_Page/WeAre/Card_WeAre.tsx';
import Testimoni from './components/Landing_Page/Testimoni/Testimoni.tsx';
import Header from './components/Globals/headers/header.tsx';
import Footer from './components/Globals/footers/footer.tsx';

const whyWeAre = [
  {
    background_image:'/customerservice.jpg',
    label:'Customer Service Yang Competen'
  },
  {
    background_image:'/customerservice.jpg',
    label:'Customer Service Yang Competen'
  },
  {
    background_image:'/customerservice.jpg',
    label:'Customer Service Yang Competen'
  }
];

const testi = [
  {
    comment:'Terimakasih Banyakkk, sangatt membantu',
    profile_picture:'/profile.jpg',
    job:'Penjual',
    name:'Jeremy'
  },
  {
    comment:'Terimakasih Banyakkk, sangatt membantu',
    profile_picture:'/profile.jpg',
    job:'Penjual',
    name:'Jeremy'
  },
  {
    comment:'Terimakasih Banyakkk, sangatt membantu',
    profile_picture:'/profile.jpg',
    job:'Penjual',
    name:'Jeremy'
  }
];

export default function Home() {
  return (
    <>
      <Header/>
      <content>
        <div className="content">
          <div className="containerContent">
            {/*rekomendasi*/}
            <RekomKategories/>
            {/*products*/}
            <Products/>
            <WhyEpicGoods whyWeAre={whyWeAre}/>
          </div>
        </div>
      </content>
      <Testimoni testi={testi} />
      <Footer/>
    </>
  );
}
