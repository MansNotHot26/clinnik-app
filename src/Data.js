import Spanish_img from './images/Spanish_img.svg'
import Figma from './images/Figma_img.svg'
import Instagram from './images/Instagram.svg'
import Photoshop from './images/Photoshop_img.svg'
import Drawing from './images/Drawing_img.svg'
import Analog from './images/Analog_img.svg'
export const data = [
    {   
        id:1,
        img : Spanish_img,
        title: 'Spanish B2',
        creater : 'by Alejandro Velazquez',
        duration: '2h 40min',
        rating: 4.5,
        url: 'https://www.youtube.com/watch?v=M1THLfQ1ctQ',
       enrolled: true,
       totalEnrolled: 500,
       createdOn: new Date(10,4,2016),
       progress: 0.4
    },
    {  
        id:2,
        img : Figma,
        title: 'Learn Figma',
        creater : 'by Christopher Morgan',
        duration: '6h 30min',
        rating: 4.9,
        url:'https://www.youtube.com/watch?v=WhlNnf1711M',
        enrolled: true,
        totalEnrolled: 700,
        createdOn: new Date(10,4,2017),
        progress: 0.1
    },
    {
        id:3, 
        img : Analog,
        title: 'Analog photography',
        creater : 'by Gordon Norman',
        duration: '3h 15min',
        rating: 4.7,
        url:'https://www.youtube.com/watch?v=y64Ab4GaKs8',
        enrolled: true,
        totalEnrolled: 900,
        createdOn: new Date(10,4,2014),
        progress: 0.2
    },
    {
        id:4,
        img : Instagram,
        title: 'Master Instagram',
        creater : 'by Sophie Gill',
        duration: '7h 40min',
        rating: 4.6,
        url:'https://www.youtube.com/watch?v=97gwDbXalBI',
        enrolled: true,
        totalEnrolled: 500,
        createdOn: new Date(10,4,2019),
        progress: 0.3
    },
    {
        id:5,
        img : Drawing,
        title: 'Basics of drawing',
        creater : 'by Jean Tate',
        duration: '11h 30min',
        rating: 4.8,
        url:'https://www.youtube.com/watch?v=ewMksAbgdBI',
        enrolled: true,
        totalEnrolled: 200,
        createdOn: new Date(10,4,2015),
        progress: 0.4
    },
    {
        id:6,
        img : Photoshop,
        title: 'Photoshop - Essence',
        creater : 'by David Green',
        duration: '5h 35min',
        rating: 4.7,
        url:'https://www.youtube.com/watch?v=Ka-4x2vgh58',
        enrolled: true,
        totalEnrolled: 1000,
        createdOn: new Date(10,4,2018),
        progress: 0.5
    },
]