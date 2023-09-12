import "./navbar.css"
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

function Navbar(){

    const { navbarState, setNavbarState } = useContext(UserContext)
    

    return (
        <section className="navbar">
            <div className="navbar-div ">
                <Link to='/inicio'>
                    <div className={navbarState == 'inicio' && 'active-navbar'} onClick={() => setNavbarState('inicio')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
                        <path d="M27.4205 12.2952L14.6986 0.273787C14.607 0.186997 14.4982 0.118142 14.3784 0.0711619C14.2586 0.024182 14.1302 0 14.0006 0C13.8709 0 13.7425 0.024182 13.6227 0.0711619C13.503 0.118142 13.3942 0.186997 13.3026 0.273787L0.580655 12.2952C0.210024 12.6457 0 13.1217 0 13.6182C0 14.6492 0.886425 15.4874 1.9767 15.4874H3.31715V24.0654C3.31715 24.5823 3.75881 25 4.30549 25H12.0239V18.4577H15.4831V25H23.6957C24.2423 25 24.684 24.5823 24.684 24.0654V15.4874H26.0245C26.5495 15.4874 27.053 15.2918 27.4236 14.9384C28.1926 14.2082 28.1927 13.0253 27.4205 12.2952Z" fill={navbarState == 'inicio' ? '#096475' : '#bdbdbd'}/>
                        </svg>
                        <p>Início</p>
                    </div>
                </Link>
                <Link to='/associados'>
                    <div className={navbarState == 'associados' && 'active-navbar'} onClick={() => setNavbarState('associados')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">
                        <path d="M14.5136 8.38068L11.5545 5.39773C11.2727 5.11364 11.1318 4.7822 11.1318 4.40341C11.1318 4.02462 11.2727 3.69318 11.5545 3.40909L14.5136 0.426136C14.7955 0.142045 15.1242 0 15.5 0C15.8758 0 16.2045 0.142045 16.4864 0.426136L19.4455 3.40909C19.7273 3.69318 19.8682 4.02462 19.8682 4.40341C19.8682 4.7822 19.7273 5.11364 19.4455 5.39773L16.4864 8.38068C16.2045 8.66477 15.8758 8.80682 15.5 8.80682C15.1242 8.80682 14.7955 8.66477 14.5136 8.38068ZM1.4091 25C1.00985 25 0.674959 24.8636 0.404414 24.5909C0.133868 24.3182 -0.000934518 23.9811 4.87575e-06 23.5795V19.3182C4.87575e-06 18.5133 0.276187 17.8385 0.82855 17.294C1.38091 16.7495 2.04413 16.4773 2.81819 16.4773H7.43296C7.90265 16.4773 8.34887 16.5956 8.77159 16.8324C9.19432 17.0691 9.53485 17.3887 9.79318 17.7912C10.4742 18.7145 11.3141 19.4366 12.3126 19.9574C13.3112 20.4782 14.3737 20.7386 15.5 20.7386C16.6508 20.7386 17.7254 20.4782 18.724 19.9574C19.7226 19.4366 20.5502 18.7145 21.2068 17.7912C21.5121 17.3887 21.8705 17.0691 22.282 16.8324C22.6934 16.5956 23.1218 16.4773 23.567 16.4773H28.1818C28.9803 16.4773 29.6496 16.7495 30.1898 17.294C30.7299 17.8385 31 18.5133 31 19.3182V23.5795C31 23.982 30.8647 24.3196 30.5942 24.5923C30.3236 24.8651 29.9892 25.0009 29.5909 25H22.5455C22.1462 25 21.8113 24.8636 21.5408 24.5909C21.2702 24.3182 21.1354 23.9811 21.1364 23.5795V21.7685C20.3144 22.3603 19.4276 22.8101 18.476 23.1179C17.5244 23.4257 16.5324 23.5795 15.5 23.5795C14.4902 23.5795 13.5038 23.4195 12.5409 23.0994C11.578 22.7794 10.6856 22.3239 9.86364 21.733V23.5795C9.86364 23.982 9.72837 24.3196 9.45782 24.5923C9.18728 24.8651 8.85285 25.0009 8.45455 25H1.4091ZM4.22728 15.0568C3.05303 15.0568 2.05493 14.6425 1.23296 13.8139C0.41099 12.9853 4.87575e-06 11.9792 4.87575e-06 10.7955C4.87575e-06 9.58807 0.41099 8.57576 1.23296 7.75852C2.05493 6.94129 3.05303 6.53314 4.22728 6.53409C5.425 6.53409 6.42922 6.94271 7.23991 7.75994C8.05061 8.57718 8.45549 9.58901 8.45455 10.7955C8.45455 11.9792 8.0492 12.9853 7.2385 13.8139C6.42781 14.6425 5.42406 15.0568 4.22728 15.0568ZM26.7727 15.0568C25.5985 15.0568 24.6004 14.6425 23.7784 13.8139C22.9564 12.9853 22.5455 11.9792 22.5455 10.7955C22.5455 9.58807 22.9564 8.57576 23.7784 7.75852C24.6004 6.94129 25.5985 6.53314 26.7727 6.53409C27.9705 6.53409 28.9747 6.94271 29.7854 7.75994C30.5961 8.57718 31.0009 9.58901 31 10.7955C31 11.9792 30.5947 12.9853 29.784 13.8139C28.9733 14.6425 27.9695 15.0568 26.7727 15.0568Z" fill={navbarState == 'associados' ? '#096475' : '#bdbdbd'}/>
                        </svg>
                        <p>Associados </p>
                    </div>
                </Link>
                <Link to='/eventos'>
                    <div className={navbarState == 'eventos' && 'active-navbar'} onClick={() => setNavbarState('eventos')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                        <path d="M14.6944 20C13.8 20 13.044 19.6979 12.4264 19.0937C11.8088 18.4896 11.5 17.75 11.5 16.875C11.5 16 11.8088 15.2604 12.4264 14.6562C13.044 14.0521 13.8 13.75 14.6944 13.75C15.5889 13.75 16.3449 14.0521 16.9625 14.6562C17.5801 15.2604 17.8889 16 17.8889 16.875C17.8889 17.75 17.5801 18.4896 16.9625 19.0937C16.3449 19.6979 15.5889 20 14.6944 20ZM2.55556 25C1.85278 25 1.25095 24.755 0.750057 24.265C0.249169 23.775 -0.000849682 23.1867 2.1694e-06 22.5V5C2.1694e-06 4.3125 0.250447 3.72375 0.751335 3.23375C1.25222 2.74375 1.85363 2.49917 2.55556 2.5H3.83333V0H6.38889V2.5H16.6111V0H19.1667V2.5H20.4444C21.1472 2.5 21.7491 2.745 22.2499 3.235C22.7508 3.725 23.0009 4.31333 23 5V22.5C23 23.1875 22.7496 23.7762 22.2487 24.2662C21.7478 24.7562 21.1464 25.0008 20.4444 25H2.55556ZM2.55556 22.5H20.4444V10H2.55556V22.5Z" fill={navbarState == 'eventos' ? '#096475' : '#bdbdbd'}/>
                        </svg>

                        <p>Eventos</p>
                    </div>
                </Link>
                <Link to='/municipios'>
                    <div className={navbarState == 'municipios' && 'active-navbar'} onClick={() => setNavbarState('municipios')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                    <path d="M10.5 0C4.71062 0 0.000106895 4.48625 0.000106895 9.99375C-0.0379552 18.05 10.101 24.73 10.5 25C10.5 25 21.038 18.05 20.9999 10C20.9999 4.48625 16.2894 0 10.5 0ZM10.5 15C7.59941 15 5.25005 12.7625 5.25005 10C5.25005 7.2375 7.59941 5 10.5 5C13.4006 5 15.7499 7.2375 15.7499 10C15.7499 12.7625 13.4006 15 10.5 15Z" fill={navbarState == 'municipios' ? '#096475' : '#bdbdbd'}/>
                    </svg>
                        <p>Municípios </p>
                    </div>
                </Link>
                <Link to='/atrativos'>
                    <div className={navbarState == 'atrativos' && 'active-navbar'} onClick={() => setNavbarState('atrativos')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M0.545 3.84141C1.49012e-07 4.46805 0 5.54445 0 7.69472V19.5629C0 21.0866 7.45058e-08 21.8484 0.39375 22.422C0.78625 22.9955 1.47375 23.2369 2.84875 23.7182L4.46625 24.2855C5.3425 24.5925 6.01625 24.8287 6.5825 24.9803C6.9525 25.0801 7.29125 24.787 7.29125 24.4004V5.26019C7.28693 5.10676 7.23246 4.95909 7.13635 4.84024C7.04025 4.72139 6.90791 4.63805 6.76 4.60323C6.27375 4.47815 5.68875 4.27349 4.8875 3.99302C2.94625 3.31205 1.975 2.9722 1.2375 3.31711C0.97297 3.44107 0.737071 3.61968 0.545 3.84141ZM13.275 1.73661L11.355 3.08212C10.6612 3.56852 10.1512 3.92606 9.7175 4.18C9.61529 4.2377 9.52987 4.32152 9.46976 4.42306C9.40966 4.5246 9.37698 4.64032 9.375 4.75863V23.7687C9.375 24.2362 9.855 24.5293 10.245 24.2766C10.6637 24.0063 11.1438 23.6702 11.725 23.2634L13.645 21.9179C14.3388 21.4315 14.8488 21.0739 15.2825 20.82C15.3847 20.7623 15.4701 20.6785 15.5302 20.5769C15.5903 20.4754 15.623 20.3597 15.625 20.2414V1.23C15.625 0.761283 15.145 0.469442 14.755 0.720855C14.3363 0.992482 13.8562 1.32854 13.275 1.73661ZM22.15 1.28053L20.5338 0.714538C19.6575 0.407536 18.9837 0.171283 18.4175 0.0196776C18.0475 -0.0801296 17.7087 0.212975 17.7087 0.59957V19.7398C17.7131 19.8932 17.7675 20.0409 17.8636 20.1598C17.9598 20.2786 18.0921 20.3619 18.24 20.3968C18.7262 20.5218 19.3113 20.7253 20.1125 21.007C22.0538 21.6879 23.025 22.0278 23.7625 21.6829C24.027 21.5589 24.2629 21.3803 24.455 21.1586C25 20.532 25 19.4556 25 17.3053V5.43706C25 3.91342 25 3.15034 24.6062 2.57803C24.2137 2.00445 23.5263 1.76315 22.1513 1.2818L22.15 1.28053Z" fill={navbarState == 'atrativos' ? '#096475' : '#bdbdbd'}/>
                    </svg>
                        <p>Atrativos  </p>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Navbar