import React from 'react';
import { Collapse } from 'antd';

export default ({ data }) => (
  <Collapse bordered={false} accordion defaultActiveKey="0">
    {data.map(({ title, link, date, points, courses }, key) => (
      <Collapse.Panel
        key={key}
        header={(
          <div>
            {title}{link && ' | '}
            {link && <a target="_blank" href={link.url}>{link.label}</a>}
            <span className="accordion-date">{date}</span>
          </div>
        )}
      >
        {points.map(p => (<p key={p}>{p}</p>))}
        {courses && (
          <Collapse accordion>
            {courses.map((semester, key) => (
              <Collapse.Panel header={semester.label} key={key}>
                {semester.courses.map(c => (<p key={c}>{c}</p>))}
              </Collapse.Panel>
            ))}
          </Collapse>
        )}
      </Collapse.Panel>
    ))}
  </Collapse>
);
