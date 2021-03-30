import React from 'react';
import { Row, Col, Typography, Input, Form, Space, Avatar } from 'antd';
import { fetchColor } from '../../helper/common';

const { Text } = Typography;

const colorOption = fetchColor()

const ColorField = ({ value, onChange }) => (<Row>
    <Col span={24} className="separe">
        <Text strong>Color del tema</Text>
    </Col>
    <Col span={24} className="separe">

        <Space size={[8, 16]} wrap>
            {colorOption.map((c, key) => <div className={value === c ? "color-selected" : "color"} key={key} onClick={() => onChange(c)}><Avatar
                size={value === c ? 36 : 48}
                style={{ backgroundColor: c }}></Avatar></div>)}
        </Space>

    </Col>

</Row>
);



export default ColorField 