import React from 'react';
import { Row, Col, Typography, Input, Form, Radio, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { fetchOption } from '../../helper/common';

const { Text } = Typography;

const teamOption = fetchOption()

const TeamField = ({ value, onChange }) => (<Row>
    <Col span={24} className="separe">
        <Text strong>¿Cuántas personas trabajarán contigo, incluyendote a ti?</Text>
    </Col>
    <Col span={24} className="separe">
        <Radio.Group value={value} onChange={onChange}>
            <Space size={[8, 16]} wrap>
                {teamOption.map((team, key) => <Radio.Button key={key} size="large" className="select-btn" value={team.value}>{team.text}</Radio.Button>)}
            </Space>
        </Radio.Group>
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



export default TeamField 