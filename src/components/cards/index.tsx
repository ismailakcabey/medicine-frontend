import React , { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import Item from 'antd/es/list/Item';




export default function Cards({item}:any) {
  const { Meta } = Card;
  return (
    <>
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://cdn-icons-png.flaticon.com/512/1404/1404476.png"
      />
    }
    actions={[
      <Link to={`/phamarcy/${item._id}`}><EllipsisOutlined key="ellipsis" /><EllipsisOutlined key="ellipsis" /></Link>
    ]}
  >
    <Meta
      title={"Eczane Adı: "+item.phamarcyName}
      description={"Eczane Adresi: "+item.adress}
    />
  </Card>
    </>
  )
}
