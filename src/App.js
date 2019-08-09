import React, { useReducer } from "react";
import { Table, Input, Button } from "antd";
import ModalRecord from "./ModalRecord";

export default function App() {
  const [state, setState] = useReducer((a, b) => ({ ...a, ...b }), {
    isShowModalRecord: true
  });

  return (
    <>
      <div className="wrapper">
        <Input.Search placeholder="Search" style={{ width: 300 }} />

        <Button style={{ marginLeft: 10 }} icon="reload">
          Reload
        </Button>

        <Button
          icon="edit"
          type="primary"
          style={{ float: "right" }}
          onClick={() => setState({ isShowModalRecord: true })}
        >
          Rekod Baru
        </Button>

        <Table
          style={{ marginTop: 10 }}
          className="list"
          bordered
          size="small"
          columns={[
            {
              title: "Nama Penuh",
              dataIndex: "namaPenuh"
            },
            {
              title: "Jantina",
              dataIndex: "jantina"
            },
            {
              title: "Negeri",
              dataIndex: "negeri"
            },
            {
              title: "Rekod",
              dataIndex: "rekod"
            },
            {
              title: "",
              dataIndex: "options"
            }
          ]}
        />
      </div>

      <ModalRecord
        visible={state.isShowModalRecord}
        title="Tambah Rekod Baru"
        close={() => setState({ isShowModalRecord: false })}
      />
    </>
  );
}
