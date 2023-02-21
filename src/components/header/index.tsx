import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Stack } from '@chakra-ui/react'
export default class Header extends Component {
    render() {
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
                            <Link to="/">Kullanıcılar</Link>
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
            </nav>
        )
    }
}
