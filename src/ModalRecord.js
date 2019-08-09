import React from "react";
import { Modal, Form, Input, Icon, Select } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 }
  }
};

export default function ModalRecord({ visible, title, close }) {
  return (
    <Modal visible={visible} title={title} onCancel={close} okText="Simpan" cancelText="Tutup">
      <Form {...formItemLayout}>
        <Form.Item label="Nama Penuh">
          <Input placeholder="Nama Penuh" type="text" addonAfter={<Icon type="user" />} />
        </Form.Item>

        <Form.Item label="Emel">
          <Input placeholder="Emel" type="email" addonAfter={<Icon type="mail" />} />
        </Form.Item>

        <Form.Item label="Negeri">
          <Select>
            <Select.Option value="selangor">Selangor</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
