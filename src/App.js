import React from 'react';
import { Avatar, Card, Icon, List, Tabs } from 'antd';
import Typist from 'react-typist';
import { education, experience, github, headshot, linkedin, name, skills } from './content';
import Accordion from './Accordion';
import EmailForm from './EmailForm';

export default () => (
  <div>
    <Card
      actions={[
        <EmailForm />,
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <Icon type="github" />
        </a>,
        <a target="_blank" rel="noopener noreferrer" href={linkedin}>
          <Icon type="linkedin" />
        </a>
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={headshot} />}
        title={
          <Typist className="typing" cursor={{ show: false, avgTypingDelay: 200 }}>
            {name}
          </Typist>
        }
      />
      <Tabs defaultActiveKey="0">
        <Tabs.TabPane tab="Skills" key="0">
          <List
            dataSource={skills}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Experience" key="1">
          <Accordion data={experience} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Education" key="2">
          <Accordion data={education} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  </div>
);
