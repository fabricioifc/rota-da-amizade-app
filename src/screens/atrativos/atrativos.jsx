import { useEffect } from "react"
import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext';
import Card from "../../components/card/card";
import CityFilter from "../../components/cityFilter/cityFilter";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Search from "../../components/search/search";
import Categories from "../../components/categories/categories";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { motion } from "framer-motion";

function Atrativos() {

    const { navbarState, setNavbarState, globalCity } = useContext(UserContext)
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [atrativos, setAtrativos] = useState([])
    const [titleHeight, setTitleHeight] = useState(0);



    useEffect(() => {
        if (navbarState != 'atrativos') {
            setNavbarState('atrativos')
        }

        getAtrativos()

    }, [])

    useEffect(() => {
        const titleDiv = document.getElementById('title-div')
        let height = titleDiv.offsetHeight

        setTitleHeight(height)
    }, [globalCity])

    const getAtrativos = async () => {
        try {
            const data = await getDocs(collection(db, "atrativos"));
            const atrativosData = [];

            data.forEach((doc) => {
                const dataAtrativos = {
                    id: doc.id,
                    municipio: doc.data().municipio,
                    nome: doc.data().nome,
                    imgCard: doc.data().imgCard,
                    type: 'atrativo',
                    ativo: doc.data().ativo,
                }

                if (dataAtrativos.ativo) {
                    atrativosData.push(dataAtrativos);
                }
            });

            setAtrativos(atrativosData);
        } catch (error) {
            console.error("Erro ao recuperar documentos:", error);
        }
    }

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    return (

        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1, transition: { duration: 0.25 } }}
            className="section-1">
            <SectionTitle
                text1={globalCity == '' ? 'Atrativos da' : 'Atrativos de'}
                text2={globalCity == '' ? 'Rota da Amizade' : globalCity}
            />
            <Search
                onSearch={handleSearch}
            />

            <div style={{ paddingBottom: `calc(75px + ${titleHeight}px` }} className="card-container">
                {
                    <>
                        <Categories category={category} setCategory={setCategory} type={'atrativos'} />
                        {atrativos.map((card, index) => (
                            <Card
                                key={index}
                                name={card.nome}
                                city={card.municipio}
                                svg={card.categorySvg}
                                img={card.imgCard.url}
                                type={card.type}
                                dates={card.dates !== undefined ? card.dates : null}
                                id={card.id}
                                index={index}
                            />
                        ))}
                    </>
                }
            </div>

        </motion.section>
    )
}

export default Atrativos