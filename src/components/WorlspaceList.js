import React from 'react';
import { useApp } from '../app-context';
import { Row, Col, Card, Avatar, Popconfirm, Table, Alert,Typography } from 'antd';
import { getInitial } from '../helper/common';
import { DeleteOutlined } from '@ant-design/icons';
const { Title } = Typography;

const WorlspaceList = () => {

  const { workspaces, deleteWorkspace } = useApp();
  const handleDelete = (item) => {
    if (typeof deleteWorkspace === 'function')
      deleteWorkspace(item)
  }

  const columns = [
    {
      title: '',
      dataIndex: 'color',
      key: 'color',
      render: text =>
        <div style={{backgroundColor: text,borderLeft:"1px solid"+ text,height:40,width:10 }} />
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (text, record) =>
        <Avatar src={text} size={48} style={{ backgroundColor: text }}>{getInitial(record.name)}</Avatar>
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Equipo',
      dataIndex: 'team',
      key: 'team',
      render: text =>
        <Alert
          message={text}
          type="info"
        />,
    },

    {
      title: 'Acciones',
      dataIndex: 'operation',
      render: (_, record) =>
        <Popconfirm title="¿Confirma la eliminación del elemento?" onConfirm={() => handleDelete(record)}>
          <DeleteOutlined style={{color:"#f5222d",fontSize:28}} color="danger"  />
        </Popconfirm>
    },
  ];

  return (

    <Row>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

        <Card bordered={false} >
          <Title level={4} strong>Registros</Title>
          <Table dataSource={workspaces} columns={columns} />;
                </Card>

      </Col>

    </Row>



  );
}


export default WorlspaceList;

