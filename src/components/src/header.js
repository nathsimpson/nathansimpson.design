/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import { Logo } from './logo';

const Header = () => (
  <header
    className="header"
    css={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '20px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Link exact to="/">
      <Logo />
    </Link>

    <ul
      css={{
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        padding: 0
      }}
    >
      {[
        {
          label: 'About',
          link: '/about'
        },
        {
          label: 'Talks',
          link: '/talks'
        }
      ].map(item => (
        <li key={item.label}>
          <Link
            css={{ color: 'white', margin: '0px 6px', fontWeight: 500 }}
            to={item.link}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        {/* <Link
          css={{ color: "white", margin: "0px 6px", fontWeight: 500 }}
          to={"/ds"}
        >
          {"DS"} //icon goes here
        </Link> */}
      </li>
    </ul>
  </header>
);

export default Header;
