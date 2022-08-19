import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";

import axios from "axios";
import cheerio from "cheerio";

import MyCard from "./MyCard";

const FaceBookIdFinder = () => {
  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: { link: "", fbid: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const formatFaceBookUrl = (text) => {
    let username = "";
    if (text.indexOf("facebook.com/") !== -1) {
      username = text.split("facebook.com/")[1];
    } else {
      username = text;
    }
    return `https://www.facebook.com/${encodeURIComponent(username)}`;
  };

  const onFindIdClick = () => {
    const url = formatFaceBookUrl(values.link);
    console.log(url);

    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // axios.defaults.headers.get['Origin'] = 'facebook.com';

    axios({
      url: 'https://www.facebook.com/javascript4u/',
      method: 'GET',
      responseType: 'text',
    }).then((res) => {
      console.log(res);
    });
   
    // axios.get(url).then((res) => {
    //   const $ = cheerio.load(res.data);
    //   const url1 = $('meta[property="al:android:url"]').attr("content");
    //   const url2 = $('meta[property="al:ios:url"]').attr("content");
    //   const fbid = url1.replace('fb://profile/');
    // //   if (url1 === url2) {
    // //     console.log(url1.replace("fb://profile/", ""));
    // //     console.log(url2.replace("fb://profile/", ""));
    // //   }
    // //   console.log({ url1, url2 });
    //   setValues((old) => ({ ...old, fbid }));
    // });
  };

  return (
    <MyCard title="Facebook ID Finder">
      <Form noValidate onSubmit={handleSubmit} className="form-facebook-id">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="link">
              <Form.Label>Facebook Link / Username</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={values.link}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                https://www.facebook.com/username <b>OR</b> username
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              onClick={onFindIdClick}
              disabled={!values.link}
            >
              Find ID
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="fbid">
              <Form.Label>Facebook ID</Form.Label>
              <Form.Control
                type="text"
                name="fbid"
                value={values.fbid}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </MyCard>
  );
};

export default FaceBookIdFinder;
