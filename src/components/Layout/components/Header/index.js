import classNames from 'classnames/bind';
import styles from './Header.modules.scss'

const cx = classNames.bind(styles) //

function Header() {
    return <header className={cx('wrapper')}>Header</header>;
}

export default Header;