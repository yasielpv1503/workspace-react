import React from 'react';
import { Row, Col, Typography, Input, Form } from 'antd';
const { Text } = Typography;


const WorkspaceNameField = ({ value, onChange }) => (<Row>
    <Col span={24} className="separe">
        <Text strong>Nombre de espacio</Text>
    </Col>
    <Col span={24} className="separe">
        <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor entre correctamente el nombre.' }]}
        >
            <Input value={value} onChange={v => onChange(v.target.value)} placeholder="Ep: Mi espacio de trabajo" />
        </Form.Item>
    </Col>
</Row>
);



export default WorkspaceNameField 