import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { useApp } from '../app-context';
import { Row, Col, Upload, Button, Avatar, Form, Card, Space, Input, Typography, Radio } from 'antd';
import { required } from '../helper/validator';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Text, Link } = Typography;

const fethOption = () => {
    return [
        { value: "1", text: "Solo yo" },
        { value: "2-10", text: "2-10" },
        { value: "11-25", text: "11-25" },
        { value: "26-50", text: "26-50" },
        { value: "151-100", text: "51-100" },
        { value: "100+", text: "100+" },
    ]
}

const fethColor = () => {
    return [
        "#39b0ff",
        "#04b58b",
        "#3e9c4b",
        "#b6bc00",
        "#e59100",
        "#e55c00",
        "#ee1f50",
        "#d6198a",
        "#b321f1",
    ]
}
const WorkspaceForm = props => {
    const { createWorkSpace } = useApp();

    const [team, setTeam] = useState("1")
    const [color, setColor] = useState("")
    const [teamOption, setTeamOption] = useState([])
    const [colorOption, setColorOption] = useState([])

    React.useEffect(() => {
        setTeamOption(fethOption())
        setColorOption(fethColor())
    }, [])

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        createWorkSpace(values)
    };


    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const handleSizeChange = e => {
        setTeam(e.target.value)
    };

    return (

        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

                <Card title="Card title" bordered={false} >
                    <Form onFinish={onFinish} >
                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Logo del espacio</Text>
                            </Col>
                            <Col span={24} >
                                <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile}>
                                    <Space>
                                        <Avatar
                                            size={64}
                                            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>

                                        <Upload name="logo" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Subir logo</Button>
                                        </Upload>
                                    </Space>
                                </Form.Item>
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
                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Nombre de espacio</Text>
                            </Col>
                            <Col span={24} className="separe">
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="Ep: Mi espacio de trabajo" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row>
                            <Col span={24}>
                                <Text strong>Url del espacio (dirección web)</Text>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="url"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input
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

                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>¿Cuántas personas trabajarán contigo, incluyendote a ti?</Text>
                            </Col>
                            <Col span={24} className="separe">
                                <Radio.Group value={team} onChange={handleSizeChange}>
                                    <Space size={24}>
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

                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Color del tema</Text>
                            </Col>
                            <Col span={24} className="separe">

                                <Space size={12}>
                                    {colorOption.map((c, key) => <div className={color === c ? "color-selected" : "color"} key={key} onClick={() => setColor(c)}><Avatar
                                        size={color === c ? 36 : 48}
                                        style={{ backgroundColor: c }}></Avatar></div>)}
                                </Space>

                            </Col>

                        </Row>
                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Políticas de privacidad</Text>
                            </Col>
                            <Col span={24} className="separe">
                                <Form.Item
                                    name="politics"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <TextArea />
                                </Form.Item>
                            </Col>

                        </Row>


                        <Form.Item wrapperCol={{ span: 24 }}>
                            <Button style={{ float:'right' }} type="primary" htmlType="submit">
                                Crear
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </Col>

        </Row>



    );
}


export default WorkspaceForm;

