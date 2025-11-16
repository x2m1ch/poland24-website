import logo from '../assets/img/header/logo.svg'
import telegram from '../assets/img/header/telegram.svg'
import viber from '../assets/img/header/viber.svg'
import mail from '../assets/img/header/mail.svg'
import ukraine from '../assets/img/header/ukraine-flag.png'
import arrow from '../assets/img/header/arrow_drop_down.svg'

import './styles/header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
                
                <section className='logo-body'>
                    <h1><span style={{ color: '#EA0C0C' }}>PO</span>LAND24.COM.UA</h1>
                    <p style={{ letterSpacing: '3px' }}>быстрая доставка</p>
                </section>
            </div>

            <section className='contacts'>
                <section className='messangers'>
                    <p>Наши мессенджеры</p>
                    <img style={{ width: '30px' }} src={viber} alt="" />
                    <img style={{ width: '30px' }} src={telegram} alt="" />
                </section>

                <section className='mail'>
                    <img src={mail} alt="" />
                    <p>info@poland24.com.ua</p>
                </section>
            </section>

            <section className='exchange-rate'>
                <section className='zloty'>
                    <h2>'zł</h2>
                    <p>00.00</p>
                </section>

                <section className='euro'>
                    <h2>€</h2>
                    <p>00.00</p>
                </section>
            </section>

            <button className='active'>
                <button className='button-order'>Оформить заказ</button>
                <h2>Вход/Регистрация</h2>
                <section className='switch-lang'>
                    <img src={ukraine} alt="" />
                    <p>Укр</p>
                    <img src={arrow} alt="" />
                </section>
            </button>
        </header>
    )
}

export default Header