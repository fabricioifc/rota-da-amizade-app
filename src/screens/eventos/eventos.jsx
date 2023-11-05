import { useEffect } from "react"
import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext';
import Card from "../../components/card/card";
import CityFilter from "../../components/cityFilter/cityFilter";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Search from "../../components/search/search";
import Categories from "../../components/categories/categories";

function Eventos(){

    const { navbarState, setNavbarState, globalCity, globalCategory  } = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState('');
    const [titleHeight, setTitleHeight] = useState(0);
    const [category, setCategory] = useState('')


    const cards = [
        {
            id: 0,
            name: 'Cachoeira do Salto',
            city: 'Salto Veloso',
            category: 'Onde Comer',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M0.436 2.8969C1.19209e-07 3.33999 0 4.10111 0 5.62156V14.0135C0 15.0909 5.96046e-08 15.6296 0.315 16.0352C0.629 16.4407 1.179 16.6114 2.279 16.9517L3.573 17.3528C4.274 17.5699 4.813 17.737 5.266 17.8442C5.562 17.9147 5.833 17.7075 5.833 17.4341V3.90011C5.82954 3.79162 5.78597 3.68721 5.70908 3.60317C5.6322 3.51913 5.52633 3.4602 5.408 3.43558C5.019 3.34714 4.551 3.20242 3.91 3.0041C2.357 2.52259 1.58 2.28228 0.99 2.52616C0.778376 2.61382 0.589657 2.74011 0.436 2.8969ZM10.62 1.4086L9.084 2.36C8.529 2.70394 8.121 2.95675 7.774 3.13631C7.69224 3.17712 7.6239 3.23638 7.57581 3.30818C7.52773 3.37998 7.50159 3.4618 7.5 3.54546V16.9874C7.5 17.318 7.884 17.5252 8.196 17.3466C8.531 17.1554 8.915 16.9178 9.38 16.6301L10.916 15.6787C11.471 15.3348 11.879 15.082 12.226 14.9024C12.3078 14.8616 12.3761 14.8023 12.4242 14.7305C12.4723 14.6587 12.4984 14.5769 12.5 14.4933V1.05038C12.5 0.71895 12.116 0.51259 11.804 0.690363C11.469 0.88243 11.085 1.12006 10.62 1.4086ZM17.72 1.08611L16.427 0.685896C15.726 0.468816 15.187 0.301763 14.734 0.194563C14.438 0.123989 14.167 0.331243 14.167 0.604603V14.1386C14.1705 14.2471 14.214 14.3515 14.2909 14.4356C14.3678 14.5196 14.4737 14.5785 14.592 14.6031C14.981 14.6916 15.449 14.8354 16.09 15.0346C17.643 15.5161 18.42 15.7564 19.01 15.5126C19.2216 15.4249 19.4103 15.2986 19.564 15.1418C20 14.6987 20 13.9376 20 12.4172V4.02518C20 2.94782 20 2.40824 19.685 2.00356C19.371 1.59799 18.821 1.42736 17.721 1.087L17.72 1.08611Z" fill="white"/>
            </svg>),
            img: 'https://live.staticflickr.com/4083/5001988006_2cd94aa9eb_b.jpg',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                }
            ],
            type: 'evento'
        },
        {
            id: 1,
            name: 'Hotel San Ghermann',
            city: 'Arroio Trinta ',
            category: 'Onde Dormir',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M0 14V8C0 7.55 0.0916668 7.14167 0.275 6.775C0.458333 6.40833 0.7 6.08333 1 5.8V3C1 2.16667 1.29167 1.45833 1.875 0.875C2.45833 0.291667 3.16667 0 4 0H8C8.38333 0 8.74167 0.0709998 9.075 0.213C9.40833 0.355 9.71667 0.550667 10 0.8C10.2833 0.55 10.5917 0.354333 10.925 0.213C11.2583 0.0716665 11.6167 0.000666667 12 0H16C16.8333 0 17.5417 0.291667 18.125 0.875C18.7083 1.45833 19 2.16667 19 3V5.8C19.3 6.08333 19.5417 6.40833 19.725 6.775C19.9083 7.14167 20 7.55 20 8V14H18V12H2V14H0ZM11 5H17V3C17 2.71667 16.904 2.479 16.712 2.287C16.52 2.095 16.2827 1.99933 16 2H12C11.7167 2 11.479 2.096 11.287 2.288C11.095 2.48 10.9993 2.71733 11 3V5ZM3 5H9V3C9 2.71667 8.904 2.479 8.712 2.287C8.52 2.095 8.28267 1.99933 8 2H4C3.71667 2 3.479 2.096 3.287 2.288C3.095 2.48 2.99933 2.71733 3 3V5Z" fill="white"/>
            </svg>),
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142768538.jpg?k=5bb8a17f79d5e56f1d781f81ccc69a110063a326543dfb6dd969c01e265bcb11&o=&hp=1',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                },{
                    day: '10',
                    month: '11',
                    year: '2022'
                },
            ],
            type: 'evento'
        },
        {
            id: 2,
            name: 'Cachoeira do Salto',
            city: 'Salto Veloso',
            category: 'Onde Comer',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M0.436 2.8969C1.19209e-07 3.33999 0 4.10111 0 5.62156V14.0135C0 15.0909 5.96046e-08 15.6296 0.315 16.0352C0.629 16.4407 1.179 16.6114 2.279 16.9517L3.573 17.3528C4.274 17.5699 4.813 17.737 5.266 17.8442C5.562 17.9147 5.833 17.7075 5.833 17.4341V3.90011C5.82954 3.79162 5.78597 3.68721 5.70908 3.60317C5.6322 3.51913 5.52633 3.4602 5.408 3.43558C5.019 3.34714 4.551 3.20242 3.91 3.0041C2.357 2.52259 1.58 2.28228 0.99 2.52616C0.778376 2.61382 0.589657 2.74011 0.436 2.8969ZM10.62 1.4086L9.084 2.36C8.529 2.70394 8.121 2.95675 7.774 3.13631C7.69224 3.17712 7.6239 3.23638 7.57581 3.30818C7.52773 3.37998 7.50159 3.4618 7.5 3.54546V16.9874C7.5 17.318 7.884 17.5252 8.196 17.3466C8.531 17.1554 8.915 16.9178 9.38 16.6301L10.916 15.6787C11.471 15.3348 11.879 15.082 12.226 14.9024C12.3078 14.8616 12.3761 14.8023 12.4242 14.7305C12.4723 14.6587 12.4984 14.5769 12.5 14.4933V1.05038C12.5 0.71895 12.116 0.51259 11.804 0.690363C11.469 0.88243 11.085 1.12006 10.62 1.4086ZM17.72 1.08611L16.427 0.685896C15.726 0.468816 15.187 0.301763 14.734 0.194563C14.438 0.123989 14.167 0.331243 14.167 0.604603V14.1386C14.1705 14.2471 14.214 14.3515 14.2909 14.4356C14.3678 14.5196 14.4737 14.5785 14.592 14.6031C14.981 14.6916 15.449 14.8354 16.09 15.0346C17.643 15.5161 18.42 15.7564 19.01 15.5126C19.2216 15.4249 19.4103 15.2986 19.564 15.1418C20 14.6987 20 13.9376 20 12.4172V4.02518C20 2.94782 20 2.40824 19.685 2.00356C19.371 1.59799 18.821 1.42736 17.721 1.087L17.72 1.08611Z" fill="white"/>
            </svg>),
            img: 'https://live.staticflickr.com/4083/5001988006_2cd94aa9eb_b.jpg',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                },{
                    day: '10',
                    month: '11',
                    year: '2022'
                },
            ],
            type: 'evento'
        },
        {
            id: 3,
            name: 'Hotel San Ghermann',
            city: 'Arroio Trinta ',
            category: 'Onde Dormir',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M0 14V8C0 7.55 0.0916668 7.14167 0.275 6.775C0.458333 6.40833 0.7 6.08333 1 5.8V3C1 2.16667 1.29167 1.45833 1.875 0.875C2.45833 0.291667 3.16667 0 4 0H8C8.38333 0 8.74167 0.0709998 9.075 0.213C9.40833 0.355 9.71667 0.550667 10 0.8C10.2833 0.55 10.5917 0.354333 10.925 0.213C11.2583 0.0716665 11.6167 0.000666667 12 0H16C16.8333 0 17.5417 0.291667 18.125 0.875C18.7083 1.45833 19 2.16667 19 3V5.8C19.3 6.08333 19.5417 6.40833 19.725 6.775C19.9083 7.14167 20 7.55 20 8V14H18V12H2V14H0ZM11 5H17V3C17 2.71667 16.904 2.479 16.712 2.287C16.52 2.095 16.2827 1.99933 16 2H12C11.7167 2 11.479 2.096 11.287 2.288C11.095 2.48 10.9993 2.71733 11 3V5ZM3 5H9V3C9 2.71667 8.904 2.479 8.712 2.287C8.52 2.095 8.28267 1.99933 8 2H4C3.71667 2 3.479 2.096 3.287 2.288C3.095 2.48 2.99933 2.71733 3 3V5Z" fill="white"/>
            </svg>),
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142768538.jpg?k=5bb8a17f79d5e56f1d781f81ccc69a110063a326543dfb6dd969c01e265bcb11&o=&hp=1',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                },{
                    day: '10',
                    month: '11',
                    year: '2022'
                },
            ],
            type: 'evento'
        },
        {
            id: 4,
            name: 'Cachoeira do Salto',
            city: 'Salto Veloso',
            category: 'Onde Comer',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M0.436 2.8969C1.19209e-07 3.33999 0 4.10111 0 5.62156V14.0135C0 15.0909 5.96046e-08 15.6296 0.315 16.0352C0.629 16.4407 1.179 16.6114 2.279 16.9517L3.573 17.3528C4.274 17.5699 4.813 17.737 5.266 17.8442C5.562 17.9147 5.833 17.7075 5.833 17.4341V3.90011C5.82954 3.79162 5.78597 3.68721 5.70908 3.60317C5.6322 3.51913 5.52633 3.4602 5.408 3.43558C5.019 3.34714 4.551 3.20242 3.91 3.0041C2.357 2.52259 1.58 2.28228 0.99 2.52616C0.778376 2.61382 0.589657 2.74011 0.436 2.8969ZM10.62 1.4086L9.084 2.36C8.529 2.70394 8.121 2.95675 7.774 3.13631C7.69224 3.17712 7.6239 3.23638 7.57581 3.30818C7.52773 3.37998 7.50159 3.4618 7.5 3.54546V16.9874C7.5 17.318 7.884 17.5252 8.196 17.3466C8.531 17.1554 8.915 16.9178 9.38 16.6301L10.916 15.6787C11.471 15.3348 11.879 15.082 12.226 14.9024C12.3078 14.8616 12.3761 14.8023 12.4242 14.7305C12.4723 14.6587 12.4984 14.5769 12.5 14.4933V1.05038C12.5 0.71895 12.116 0.51259 11.804 0.690363C11.469 0.88243 11.085 1.12006 10.62 1.4086ZM17.72 1.08611L16.427 0.685896C15.726 0.468816 15.187 0.301763 14.734 0.194563C14.438 0.123989 14.167 0.331243 14.167 0.604603V14.1386C14.1705 14.2471 14.214 14.3515 14.2909 14.4356C14.3678 14.5196 14.4737 14.5785 14.592 14.6031C14.981 14.6916 15.449 14.8354 16.09 15.0346C17.643 15.5161 18.42 15.7564 19.01 15.5126C19.2216 15.4249 19.4103 15.2986 19.564 15.1418C20 14.6987 20 13.9376 20 12.4172V4.02518C20 2.94782 20 2.40824 19.685 2.00356C19.371 1.59799 18.821 1.42736 17.721 1.087L17.72 1.08611Z" fill="white"/>
            </svg>),
            img: 'https://live.staticflickr.com/4083/5001988006_2cd94aa9eb_b.jpg',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                },{
                    day: '10',
                    month: '11',
                    year: '2022'
                },
            ],
            type: 'evento'
        },
        {

            id: 5,
            name: 'Hotel San Ghermann',
            city: 'Arroio Trinta ',
            category: 'Onde Dormir',
            categorySvg: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M0 14V8C0 7.55 0.0916668 7.14167 0.275 6.775C0.458333 6.40833 0.7 6.08333 1 5.8V3C1 2.16667 1.29167 1.45833 1.875 0.875C2.45833 0.291667 3.16667 0 4 0H8C8.38333 0 8.74167 0.0709998 9.075 0.213C9.40833 0.355 9.71667 0.550667 10 0.8C10.2833 0.55 10.5917 0.354333 10.925 0.213C11.2583 0.0716665 11.6167 0.000666667 12 0H16C16.8333 0 17.5417 0.291667 18.125 0.875C18.7083 1.45833 19 2.16667 19 3V5.8C19.3 6.08333 19.5417 6.40833 19.725 6.775C19.9083 7.14167 20 7.55 20 8V14H18V12H2V14H0ZM11 5H17V3C17 2.71667 16.904 2.479 16.712 2.287C16.52 2.095 16.2827 1.99933 16 2H12C11.7167 2 11.479 2.096 11.287 2.288C11.095 2.48 10.9993 2.71733 11 3V5ZM3 5H9V3C9 2.71667 8.904 2.479 8.712 2.287C8.52 2.095 8.28267 1.99933 8 2H4C3.71667 2 3.479 2.096 3.287 2.288C3.095 2.48 2.99933 2.71733 3 3V5Z" fill="white"/>
            </svg>),
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142768538.jpg?k=5bb8a17f79d5e56f1d781f81ccc69a110063a326543dfb6dd969c01e265bcb11&o=&hp=1',
            dates: [
                {
                    day: '10',
                    month: '11',
                    year: '2022'
                },{
                    day: '10',
                    month: '11',
                    year: '2022'
                },
            ],
            type: 'evento'
        }
    ]
    const filteredCards = cards.filter((card) => {
        if ( globalCity === '' ) {
          return true
        } else {
          return card.city === globalCity
        }
    }).filter((card) => {
        if (searchTerm === '') {
          return true
        } else {
          const lowerCaseSearchTerm = searchTerm.toLowerCase()
          return card.name.toLowerCase().includes(lowerCaseSearchTerm)
        }
    }).filter((card) => {
        if (globalCategory === '') {
          return true
        } else {
          return card.category === globalCategory
        }
    });

    useEffect(() => {
        if(navbarState != 'eventos'){
            setNavbarState('eventos')
        }


    }, [])

    useEffect(() => {
        const titleDiv = document.getElementById('title-div')
        let height = titleDiv.offsetHeight

        setTitleHeight(height)
    }, [globalCity])

    const handleSearch = (value) => {
      setSearchTerm(value);
    };

    return (
        <>
        <CityFilter/>
            <section className="section-1">
                <SectionTitle
                    text1 = {globalCity == '' ? 'Eventos da' : 'Eventos de'}
                    text2 = {globalCity == '' ? 'Rota da Amizade' : globalCity}
                />
                <Search
                    onSearch={handleSearch}
                />
                <div style={{paddingBottom: `calc(75px + ${titleHeight}px`}} className="card-container">
                    <Categories category={category} setCategory={setCategory} type={'eventos'} />
                    {
                        filteredCards.map((card, index) => (
                            <Card
                                key={index}
                                name={card.name}
                                city={card.city}
                                svg={card.categorySvg}
                                img={card.img}
                                type={card.type}
                                dates={card.dates != undefined ? card.dates : null}
                                id={card.id}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Eventos