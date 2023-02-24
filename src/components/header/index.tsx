import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button} from 'antd';
import { UserContext } from '../../context/AuthContext';
export default function Heade() {
    const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    console.log('logine bastın')
    const newUser = {
      name: "111111",
      email: "11111111",
    };
    console.log(newUser)
    setUser(newUser);
    console.log(user)
  };
        return (
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to="/">eMedicine</Link>
                        
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/">Eczaneler</Link>
                        </li>
                        <li>
                            <Link to="/">İlaçlar</Link>
                        </li>
                        <li>
                            <Link to="/user">Kullanıcılar</Link>
                        </li>
                        <li>
                            <Link to="/">Siparişler</Link>
                        </li>
                        <li>
                            <Link to="/">Dağıtıcılar</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.rigth}>

                    <Link to="/login">
                        <Button id={styles.id} type="primary" size="large">
                            Giriş Yap
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button type="dashed" size="large">
                            Kayıt Ol
                        </Button>
                    </Link>


                </div>
                {user ? (
        <>
          <p>Welcome, 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {user.name} 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {user.email}</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
            </nav>
        )
    }
