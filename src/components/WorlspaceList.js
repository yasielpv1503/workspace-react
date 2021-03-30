import React from 'react';
import { useApp } from '../app-context';
import { Row, Col, Card, Avatar, Popconfirm, Table, Alert,Typography } from 'antd';
import { getInitial } from '../helper/common';
import { DeleteOutlined } from '@ant-design/icons';
import { SvgLoader, SvgProxy } from "react-svgmt";
import template from '../svg-template/template.svg'
const { Title } = Typography;

const WorlspaceList = () => {

  const { workspace } = useApp();
   

  return (<div>
  
    <SvgLoader  path={template}>
        {/* Important! this proxy will reset the color to black,
          otherwise old elements would still be shown in red
          because this library doesn't store previous states */}
        <SvgProxy selector={"#circle1"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e1"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e2"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e3"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e4"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e5"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#e6"} fill={workspace.color?workspace.color:""} />
        <SvgProxy selector={"#url"}>{(workspace.url?workspace.url:"")+".dofleini.com"}</SvgProxy>
        <SvgProxy selector={"#name1"}>Plankton - {workspace.name?workspace.name:""}</SvgProxy>



      </SvgLoader>
</div>


  );
}


export default WorlspaceList;

