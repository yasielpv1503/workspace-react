import React, {  } from 'react';
import { useApp } from '../app-context';
import { Row, Col, Card, Input, Typography, Table } from 'antd';
 
const WorlspaceList = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
    

    return (

        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

                <Card title="Card title" bordered={false} >
                    <Table dataSource={dataSource} columns={columns} />;
                </Card>

            </Col>

        </Row>



    );
}


export default WorlspaceList;

