import React from 'react';
import { Row, Col, Typography, Input, Form, Radio, Card } from 'antd';
const { Text } = Typography;

const gridStyle = {
    width: '45%',
    textAlign: 'justify',
    marginRight:10
  };
  
const PoliticsField = ({ value, onChange }) => (<Row>
    <Col span={24} className="separe">
        <Text strong>Políticas de privacidad</Text>
    </Col>
    <Col span={24} className="separe">
        <Radio.Group name="radiogroup" onChange={onChange} defaultValue={value}>
            <Card>
                <Card.Grid style={{ ...gridStyle, border: value === 1 ? "1px #91c8f9 solid" : 0 }}>
                    <Radio value={1}>
                        <Text type="secondary">El contenido será visible sólo para tí y los miembros de tu Organización.</Text>
                    </Radio>
                </Card.Grid>
                <Card.Grid style={{ ...gridStyle, border: value === 2 ? "1px #91c8f9 solid" : 0 }}>
                    <Radio value={2}>
                        <Text type="secondary">El contenido será visible sólo para tí y los miembros de tu Organización.</Text>
                    </Radio>
                </Card.Grid>
            </Card>
        </Radio.Group>
    </Col>

</Row>
);



export default PoliticsField 