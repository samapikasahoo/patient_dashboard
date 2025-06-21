import React, { useState, useContext } from "react";
import { Form, Row, Col, Input, Button, DatePicker, Select, Checkbox, Tooltip } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import { GlobalContext } from "../components/GlobalContext";

const { RangePicker } = DatePicker;
const { Option } = Select;

const SearchForm = (props) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const context = useContext(GlobalContext);

  const onFinish = (values) => {
    console.log("Form values:", values);
    props.searchRequest(values); // Pass values to parent
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      layout="vertical"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      initialValues={{ exactMatch: false }}
    >
      <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={8} className="search_inputs">
          <Form.Item name="name" label="Patient Name">
            <Input placeholder="Enter Patient's first or last name to filter" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} className="search_inputs">
          <Form.Item name="birthdate" label="Birthdate Range">
            <RangePicker />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} className="search_inputs">
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select a gender to filter" allowClear>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Col>

        {expand && (
          <>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item name="phone" label="Phone Number">
                <Input placeholder="Enter phone number to filter" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item name="address" label="Country and Address">
                <Input placeholder="Enter country code or address" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item name="maritalStatus" label="Marital Status">
                <Input placeholder="Enter marital status" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item name="id" label="Patient ID">
                <Input placeholder="Enter Patient ID" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={16}>
              <Form.Item name="anythingElse" label="Search for anything else">
                <Input.TextArea placeholder="Enter SSN, Passport Number, or keywords. Regex supported." rows={3} />
              </Form.Item>
            </Col>
          </>
        )}
      </Row>

      <Row>
        <Col xs={24} sm={8} md={8} lg={8}>
          <Form.Item name="exactMatch" valuePropName="checked">
            <Checkbox>
              <Tooltip
                placement={context?.isMobile ? "top" : "right"}
                title="Match the exact content from the search query"
              >
                Exact Match
              </Tooltip>
            </Checkbox>
          </Form.Item>
        </Col>

        <Col
          xs={24}
          sm={16}
          md={16}
          lg={16}
          style={{ textAlign: context?.isMobile ? "center" : "right" }}
        >
          <a
            style={{ marginRight: 12, fontSize: 12 }}
            onClick={() => setExpand(!expand)}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Search More
          </a>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={onReset}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
