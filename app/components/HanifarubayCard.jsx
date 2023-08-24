import Image from 'next/image'
import hanifarubay from '../../public/images/hanifaru.jpg'
import ReactPlayer from 'react-player'


export default function HanifarubayCard() {
  return (
    <div>
        <ReactPlayer url='/videos/hanifarubay-s.mp4' playing={true} loop={true} muted={true} controls width={'100%'} height={'auto'} />
        {/* <Image src={hanifarubay} alt='Hanifaru bay image' /> */}
        <div className='p-4 mb-6'>
        <h5 className='text-3xl md:text-7xl text-center my-4'>Hanifaru Bay</h5>
        <p>Hanifaru Bay is located in Baa Atoll of the Maldives. It gained international recognition for its rich marine biodiversity and its designation as a marine protected area, A UNESCO Biosphere Reserve. Hanifaru Bay is renowned for being a feeding ground and aggregation site for several species of marine animals, most notably Manta rays and Whale Sharks. During certain times of the year, particularly from May to November, an extraordinary phenomenon called the &quot;Hanifaru Bay feeding frenzy&quot; occurs. Large numbers of plankton, particularly a species called &quot;Thallasemia&quot; or &quot;sea tomato,&quot; gather in the bay, attracting hundreds of manta rays and whale sharks that come to feed on the abundant food.</p>
        </div>
    </div>
  )
}
