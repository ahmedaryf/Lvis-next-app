"use client"
import Card from "./components/Card";
import HanifarubayCard from "./components/HanifarubayCard";
import HeroSection from "./components/HeroSection";
import PageRapper from "./components/PageRapper";
import blancura from '/public/images/blancura.jpg'
import village from '/public/images/village.jpg'
import {FaUmbrellaBeach} from 'react-icons/fa'
import {GiCommercialAirplane, GiMeal} from 'react-icons/gi'
import {MdFamilyRestroom, MdAttachMoney} from 'react-icons/md'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#616164]/10 to-[#DAB785]/50  dark:from-slate-700 dark:to-slate-600">
    <PageRapper>
      <div className="heroSection">
        <HeroSection />
      </div>
      <div>
        <HanifarubayCard />
      </div>

      <div className="cards p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card image={blancura} title='LVIS blancura' icon1={<FaUmbrellaBeach />} icon2={<GiCommercialAirplane />} icon3={<GiMeal />} iconText1={'Beachfront'} iconText2={'Airport Transfer'} iconText3={'Restaurant'} text="LVIS Blancura Hotel is a beachfront property located in the beautiful island Dharavandhoo. The hotel's proximity to Hanifaru Bay offers opportunities for snorkeling with Manta rays and Whalesharks during season. With elegant rooms, stunning ocean views, and modern amenities, it provides a perfect retreat. Our guests can enjoy international and local cuisine at the on-site restaurant. Experience warm hospitality and a serene beachfront setting at LVIS Blancura Hotel." link={'/blancura'} />

        <Card image={village} title='LVIS Village' icon1={<MdFamilyRestroom />} icon2={<GiCommercialAirplane />} icon3={<MdAttachMoney />} iconText1={'Family friendly'} iconText2={'Airport Transfer'} iconText3={'Budget friendly'} text="LVIS Village is our second property in Dharavandhoo island situated one block behind. Our guest staying at LVIS VIllage property has access to the bikini beach infront of LVIS Blancura hotel and all the facilities. This provides guests with additional options and amenities to explore during their stay. Whether it's dining at the beachfront restaurant, enjoying water sports, or simply relaxing by the hotel's private beach area, guests have a variety of choices to enhance their beach experience. The hotel features comfortable accommodations, providing a cozy and inviting atmosphere for guests to unwind and relax. Each room is thoughtfully designed with modern amenities, ensuring a comfortable stay." link={'/'} />
      </div>
    </PageRapper>
      </main>
  );
}

// color: #616164 #7E2E35  #DAB785