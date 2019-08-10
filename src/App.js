import React, { useReducer, useEffect, useCallback } from "react";
import { Table, Input, Button, Modal, message, Tabs } from "antd";
import ModalRecord from "./ModalRecord";
import Axios from "axios";

const API_URL_KEY = "API_URL";

export default function App() {
  const [state, setState] = useReducer((a, b) => ({ ...a, ...b }), {
    isShowModalRecord: false,
    isLoadingData: false,
    activeTabKey: "1"
  });

  const applyApiBaseUrl = (url = "") => {
    if (url === "") {
      return;
    }

    localStorage.setItem(API_URL_KEY, url);
    message.success("API URL has been set.");
  };

  const fetchData = useCallback(async () => {
    const API_URL = localStorage.getItem(API_URL_KEY);

    try {
      if (!API_URL) {
        throw Error("Unable to fetch data. Please set API URL.");
      }

      setState({ isLoadingData: true });

      const res = await Axios.get(API_URL + "/pelajar");
    } catch (e) {
      Modal.error({
        title: "Error",
        content: e.message
      });

      setState({ isLoadingData: false });
    }
  }, []);

  useEffect(() => {
    //fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="topbar">
        <h3 className="title">CRUD-UI</h3>
      </div>

      <div className="wrapper">
        <Tabs
          activeKey={state.activeTabKey}
          onChange={value => setState({ activeTabKey: value })}
          animated={false}
        >
          <Tabs.TabPane key="1" tab="App">
            <Input.Search
              placeholder="Search"
              style={{ width: 300 }}
              disabled={state.isLoadingData}
            />

            <Button
              style={{ marginLeft: 10 }}
              icon="reload"
              disabled={state.isLoadingData}
              onClick={fetchData}
            >
              Reload
            </Button>

            <Button
              icon="edit"
              type="primary"
              style={{ float: "right" }}
              onClick={() => setState({ isShowModalRecord: true })}
              disabled={state.isLoadingData}
            >
              Rekod Baru
            </Button>

            <Table
              loading={state.isLoadingData}
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
                  title: "Emel",
                  dataIndex: "emel"
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
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Settings">
            <form
              onSubmit={e => {
                e.preventDefault();
                applyApiBaseUrl(e.target.url.value);
              }}
            >
              API URL :{" "}
              <Input
                placeholder="API BASE URL"
                style={{ width: 400 }}
                name="url"
                autoComplete="off"
                defaultValue={localStorage.getItem(API_URL_KEY) || ""}
              />
              <Button htmlType="submit" style={{ marginLeft: 5 }}>
                Apply
              </Button>
            </form>
          </Tabs.TabPane>
        </Tabs>
      </div>

      <ModalRecord
        visible={state.isShowModalRecord}
        title="Tambah Rekod Baru"
        close={() => setState({ isShowModalRecord: false })}
      />
    </>
  );
}
