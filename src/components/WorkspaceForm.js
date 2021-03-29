import React, { useState } from 'react';
import { useApp } from '../app-context';
import { Row, Col, Button, Avatar, Form, Card, Space, Input, Typography, Radio } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchOption, fetchColor, getInitial } from '../helper/common';
import Uploader from './Uploader';
const { TextArea } = Input;
const { Text,Title } = Typography;




const WorkspaceForm = () => {
    const { createWorkSpace } = useApp();

    const [team, setTeam] = useState("1")
    const [initial, setInitial] = useState("A")
    const [color, setColor] = useState("")
    const [logo, setLogo] = useState(null)
    const [teamOption, setTeamOption] = useState([])
    const [colorOption, setColorOption] = useState([])

    React.useEffect(() => {
        setTeamOption(fetchOption())
        setColorOption(fetchColor())
    }, [])

    const onFinish = (formData) => {
       if(typeof createWorkSpace==='function')
        createWorkSpace({
            ...formData,
            color,
            logo,
            team,
            id: new Date().getTime()
        })
    };



    const handleSizeChange = e => {
        setTeam(e.target.value)
    };

    return (

        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Card   bordered={false} >
                <Title level={4} strong>Configuraciones</Title>
                    <Form onFinish={onFinish} >
                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Logo del espacio</Text>
                            </Col>
                            <Col span={24} >
                                <Form.Item name="avatar"  >
                                    <Space>
                                        <Avatar
                                            src={logo}
                                            size={64}
                                            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{initial}</Avatar>

                                        <Uploader logo={logo} onChange={setLogo} />
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
                                    rules={[{ required: true, message: 'Por favor entre correctamente el nombre.' }]}
                                >
                                    <Input onChange={v => setInitial(getInitial(v.target.value))} placeholder="Ep: Mi espacio de trabajo" />
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
                                    rules={[{ required: true, message: 'Por favor entre correctamente la URL.' }]}
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

                        <Row>
                            <Col span={24} className="separe">
                                <Text strong>Color del tema</Text>
                            </Col>
                            <Col span={24} className="separe">

                                <Space size={[8, 16]} wrap>
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
                                    rules={[{ required: true, message: 'Por favor entre correctamente las políticas de privacidad.' }]}
                                >
                                    <TextArea />
                                </Form.Item>
                            </Col>

                        </Row>


                        <Form.Item wrapperCol={{ span: 24 }}>
                            <Button style={{ float: 'right' }} type="primary" htmlType="submit">
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

