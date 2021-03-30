import React, { useState, useEffect } from 'react';
import { useApp } from '../app-context';
import { Row, Col, Button, Form, Card, Input, Typography, Space } from 'antd';
import { fetchOption, fetchColor } from '../helper/common';
import FormBuilder from 'antd-form-builder'
import LogoField from './widget/LogoField'
import WorkspaceNameField from './widget/WorkspaceNameField';
import WorkspaceURLField from './widget/WorkspaceURLField';
import TeamField from './widget/TeamField';
import ColorField from './widget/ColorField';
import PoliticsField from './widget/PoliticsField';
const { Title } = Typography;

const WorkspaceForm = () => {
    const { createWorkSpace, workspace } = useApp();
    const [form] = Form.useForm()
    const updateForm = (data) => {
        console.log(workspace)
        createWorkSpace({ ...workspace, ...data })
    }
    const meta = {
        fields: [
            { key: 'logo', widget: LogoField },
            { key: 'name', widget: WorkspaceNameField },
            { key: 'url', widget: WorkspaceURLField,   },
            { key: 'team', widget: TeamField },
            { key: 'color', widget: ColorField },
            { key: 'politics', widget: PoliticsField },
        ],
    }
    return (
        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Card bordered={false} >
                    <Title level={4} strong>Configuraciones</Title>
                    <Form form={form} onValuesChange={(data) => updateForm(data)}>
                        <FormBuilder meta={meta} form={form} />
                        <Form.Item wrapperCol={{}}>
                            <Space>
                                <Button type="primary">Guardar cambios</Button>
                                <Button>Descargar</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}

export default WorkspaceForm;

