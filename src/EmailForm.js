import React, { Component } from 'react';
import { Button, Form, Icon, Input, message, Modal } from 'antd';
import axios from 'axios';

class EmailForm extends Component {
  state = { visible: false }

  toggleModal = () => this.setState({ visible: !this.state.visible });

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, { name, email, text }) => {
      if (!err) {
        this.toggleModal();
        axios.post('https://postmail.invotes.com/send', {
          access_token: 'oqjfz6xyqt8wcytgj9hsrupi',
          subject: 'RUSSWALDMAN.COM CONTACT FORM',
          text: `From: ${name} <${email}>\n\n${text}`
        }).then(() => {
          message.success('Sent');
          this.props.form.resetFields();
        }).catch(() => message.error('Unable to send, try again'));
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Icon type="mail" onClick={this.toggleModal} />
        <Modal
          title="Send a message"
          visible={this.state.visible}
          onCancel={this.toggleModal}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <p>
              To communicate over a secure channel, ask me for my ProtonMail address or Signal number
            </p>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please enter your name' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="Name" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please enter your email', type: 'email' }],
              })(
                <Input prefix={<Icon type="mail" />} placeholder="Email" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('text', {
                rules: [{ required: true, message: 'Please enter your message' }],
              })(
                <Input.TextArea rows="3" placeholder="Message" />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button">
              Send
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create({})(EmailForm);
