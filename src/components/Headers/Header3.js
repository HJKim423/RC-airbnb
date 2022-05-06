import { Link } from 'react-router-dom';

import { ReactComponent as LogoPink } from '../../svg/logo-pink.svg';
import { ReactComponent as Search } from '../../svg/search.svg';

import HeaderUser from './HeaderUser';

import './Header3.css';

function Header3(){
    return(
        <header className="header3">
        <div className="navbar3">
            <Link to="/" className="navbar__logo3"><LogoPink /></Link>
            <div className="search-bar3">
                <span className="search-ment3">검색 시작하기</span>
                <span className="search-icon3"><Search /></span>
            </div>
            <HeaderUser margin={"0 285.333px 0 0"}/>
        </div>
    </header>

    )
}

export default Header3;