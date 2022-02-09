import React, { useEffect, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";

import { useSettingConfig } from "../hooks";
import MyDiv from "../components/MyDiv";
import MyCard from "../components/MyCard";

const dot = "🔴";

const WhiteSpaceStarReplacer = () => {
  const element1 = useRef(null);
  const element2 = useRef(null);

  const [{ wsrRows: rows, replace1, replace2 }] = useSettingConfig();

  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: { text1: "", text2: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onText1Change = (e) => {
    handleChange(e);
    const text = e.target.value;
    const space = new RegExp("\\s", "gmu");
    if (space.test(text)) {
      const text1 = text
        .replace(/\r/g, dot)
        .replace(/\n/g, dot)
        .replace(/\f/g, dot)
        .replace(/\v/g, dot);
      setValues((old) => ({ ...old, text1 }));
    } else {
      setValues((old) => ({ ...old, text }));
    }
  };

  // const onCleanSymbol = () => {
  //   const text1 = values.text1.replaceAll(dot, "");
  //   setValues((old) => ({ ...old, text1 }));
  // };

  const onCopyText = async () => {
    // const {text1} = values;
    const text1 = values.text1.replaceAll(dot, "");
    setValues((old) => ({ ...old, text1 }));
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text1);
    } else {
      return document.execCommand("copy", true, text1);
    }
  };

  const onClearText = () => {
    setValues({
      text1: "",
      text2: "",
    });
  };

  return (
    <MyCard title="White Space Replacer">
      <Form noValidate onSubmit={handleSubmit} className="form-space-replacer">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="text1">
              {/* <Form.Label>Text</Form.Label> */}
              <Form.Control
                as="textarea"
                ref={element1}
                rows={15}
                name="text1"
                value={values.text1}
                onChange={onText1Change}
              />
            </Form.Group>
            {/* <Button
              variant="primary"
              onClick={onCleanSymbol}
              disabled={!values.text1}
            >
              Clean
            </Button> */}
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button
              variant="success"
              onClick={onCopyText}
              disabled={!values.text1}
            >
              Clean & Copy
            </Button>
          </Col>
          <Col xs={{ span: 4, offset: 4 }} style={{ textAlign: 'right'}}>
            <Button
              variant="danger"
              onClick={onClearText}
              disabled={!values.text1}
            >
              Clear Text
            </Button>
          </Col>
        </Row>
      </Form>
    </MyCard>
  );
};

export default WhiteSpaceStarReplacer;
