import React from 'react';
import { Divider, Tabs } from 'antd';
import devData from '@/config/dev.json';
import { DevDataType } from '@/types';

const Item = ({ data }: { data: DevDataType['cat'][0]['items'][0] }) => {
    return (
        <section className="cat-item">
            <a href={data.url} target="_blank" rel="noreferrer">
                <h3>
                    <img src={data.icon} alt="logo" />
                    <span>{data.title}</span>
                </h3>
                <div className="cat-item__desc" title={data.desc}>
                    {data.desc}
                </div>
            </a>
        </section>
    );
};

const Develop = () => {
    return (
        <div className="App">
            <Tabs tabPosition="left">
                {(devData as DevDataType[]).map((d) => (
                    <Tabs.TabPane tab={d.title} key={d.key}>
                        <h2 className="cat-title">{d.title}</h2>
                        <main className="cat-container">
                            {d.cat.map((cat, index) => (
                                <React.Fragment key={index}>
                                    {cat.title && <Divider orientation="left">{cat.title}</Divider>}
                                    {cat.items.map((it) => (
                                        <Item data={it} key={it.url} />
                                    ))}
                                </React.Fragment>
                            ))}
                        </main>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default Develop;
