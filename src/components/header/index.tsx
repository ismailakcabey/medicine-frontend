import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from 'antd';
import { UserContext } from '../../context/AuthContext';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
export default function Heade() {
    const { isOpen, onToggle } = useDisclosure();
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        console.log('logine bastın')
        const newUser = {
            fullName: "string",
            mail: "string",
            _id: "string",
            deleted: false,
            createdDate: new Date,
            updatedDate: new Date,
            password: "string",
            isMail: true,
            phamarcyId: "string",
            adress: "string",
            createdById: "string",
            updatedById: "string",
            identityId: "string",
            role: 1,
            phoneNumber: "1",
            token: "string",
        };
        console.log(newUser)
        setUser(newUser);
        console.log(user)
    };
    const handleLogout= ()=>{
        setUser(null);
    }
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
            </div>
            {user ? (
                <>
                    <Link to="/profile">
                        <Button id={styles.id} type="primary" size="large">
                            Profilim
                        </Button>
                    </Link>
                    <Button id={styles.id} type="primary" onClick={handleLogout} size="large">
                            Çıkış
                        </Button>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <Button id={styles.id} onClick={handleLogin} type="primary" size="large">
                            Giriş Yap
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button type="dashed" size="large">
                            Kayıt Ol
                        </Button>
                    </Link>
                </>

            )}
        </nav>
    )
}


{/*user ? (
    <>
        <Link to="/profile">
            <Button id={styles.id} type="primary" size="large">
                Profilim
            </Button>
        </Link>
        <Button id={styles.id} type="primary" onClick={handleLogout} size="large">
                Çıkış
            </Button>
    </>
) : (
    <>
        <Link to="/login">
            <Button id={styles.id} onClick={handleLogin} type="primary" size="large">
                Giriş Yap
            </Button>
        </Link>
        <Link to="/register">
            <Button type="dashed" size="large">
                Kayıt Ol
            </Button>
        </Link>
    </>

)*/}