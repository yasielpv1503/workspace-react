import React, {  } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { toBase64 } from '../../helper/common';

const Uploader = ({ onChange, logo }) => {
    const props = {
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
            if (!logo)
                toBase64(info.fileList[0].originFileObj).then(base64 => onChange(base64))
        },
    };
    return (<>
        {!logo ?
            <Upload maxCount={1} {...props}>
                <Button icon={<UploadOutlined />}>Subir logo</Button>
            </Upload> :
            <Button onClick={() => onChange(null)} icon={<DeleteOutlined />}>Borrar</Button>
        }
    </>
    );
};

export default Uploader;