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
            <Select.Option value="Johor">Johor</Select.Option>
            <Select.Option value="Kedah">Kedah</Select.Option>
            <Select.Option value="Kelantan">Kelantan</Select.Option>
            <Select.Option value="Melaka">Melaka</Select.Option>
            <Select.Option value="Negeri Sembilan">Negeri Sembilan</Select.Option>
            <Select.Option value="Pahang">Pahang</Select.Option>
            <Select.Option value="Penang">Penang</Select.Option>
            <Select.Option value="Perak">Perak</Select.Option>
            <Select.Option value="Perlis">Perlis</Select.Option>
            <Select.Option value="Selangor">Selangor</Select.Option>
            <Select.Option value="Sabah">Sabah</Select.Option>
            <Select.Option value="Sarawak">Sarawak</Select.Option>
            <Select.Option value="Terengganu">Terengganu</Select.Option>
            <Select.Option value="WP Kuala Lumpur">WP Kuala Lumpur</Select.Option>
            <Select.Option value="WP Putrajaya">WP Putrajaya</Select.Option>
            <Select.Option value="WP Labuan">WP Labuan</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
