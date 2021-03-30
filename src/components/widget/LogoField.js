import React from 'react';
import { Row, Col, Avatar, Space, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import FormBuilder from 'antd-form-builder'
import Uploader from './Uploader';
const { Text } = Typography;


const LogoField = ({ value, onChange }) => (<Row>
    <Col span={24} className="separe">
        <Text strong>Logo del espacio</Text>
    </Col>
    <Col span={24} >

        <Space>
            <Avatar
                src={value}
                size={64}
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>

            <Uploader logo={value} onChange={onChange} />
        </Space>

    </Col>
    <Col span={24} className="separe">
        <Row>
            <Col span={1}>
                <ExclamationCircleOutlined />
            </Col>
            <Col span={23}>
                <Text type="secondary">Este logo identificará tu espacio de trabajo del resto</Text><br />
                <Text type="secondary">Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fono transparente</Text>
            </Col>
        </Row>
    </Col>
</Row>
);



export default LogoField 