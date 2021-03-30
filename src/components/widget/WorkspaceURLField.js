import React from 'react';
import { Row, Col, Typography, Input, Form } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;


const WorkspaceURLField = ({ value, onChange }) => (<Row>
    <Col span={24}>
        <Text strong>Url del espacio (dirección web)</Text>
    </Col>
    <Col span={24}>
        <Form.Item
            name="url"
            rules={[{ required: true, message: 'Por favor entre correctamente la URL.' }]}
        >
            <Input
            value={value} onChange={v => onChange(v.target.value)}
                placeholder="Ep:mi.dominio"
                suffix="dofleini.com"
            />
        </Form.Item>
    </Col>
    <Col span={24} className="separe">
        <Row>
            <Col span={1}>
                <ExclamationCircleOutlined />
            </Col>
            <Col span={23}>
                <Text type="secondary">
                    Puedes cambiar la URL de tu espacio de trabajo en cualquier momento, pero por
                    cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor
                    no lo hagas muy seguido.
            </Text><br />
                <Text type="secondary">
                    Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde
                    la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros
                    sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro
                    espacio en el futuro.
            </Text>
            </Col>
        </Row>
    </Col>

</Row>
);



export default WorkspaceURLField 