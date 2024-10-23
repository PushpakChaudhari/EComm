import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel';
import HomeSectionnCarousel from '../../component/HomeSectionCarousel/HomeSectionnCarousel';
import { womens_kurti } from '../../../data/women_kurti';


const HomePage = ()=>{
 
    return(
        <div>
            <MainCarousel/>
           <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5'> 
           <HomeSectionnCarousel data={womens_kurti} sectionName={"Women's Kurti"}/>
           <HomeSectionnCarousel data={womens_kurti} sectionName={"Women's Kurti"}/>
           <HomeSectionnCarousel data={womens_kurti} sectionName={"Women's Kurti"}/>
           <HomeSectionnCarousel data={womens_kurti} sectionName={"Women's Kurti"}/>
           <HomeSectionnCarousel data={womens_kurti} sectionName={"Women's Kurti"}/>
           </div>
        </div>

    )
    }

    export default HomePage;