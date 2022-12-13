// import { Tabs } from 'antd';
// import { LikeOutlined, BankOutlined, ReadOutlined } from '@ant-design/icons';
// import devData from '@/config/develop.json';
import Recommend from './components/Recommend';

function Popup() {
    return (
        <div className="App">
            {/* <Tabs
                type="card"
                defaultActiveKey="1"
                items={[
                    {
                        label: (
                            <>
                                <LikeOutlined />
                                好文推荐
                            </>
                        ),
                        key: '1',
                        children: <Recommend />,
                    },
                    {
                        label: (
                            <>
                                <BankOutlined />
                                前端学院
                            </>
                        ),
                        key: '2',
                        children: (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {devData.map((it) => (
                                    <div
                                        key={it.key}
                                        onClick={() =>
                                            window.open(chrome.runtime.getURL('develop.html'))
                                        }
                                    >
                                        <img src={it.icon} alt="icon" />
                                        {it.title}
                                    </div>
                                ))}
                            </div>
                        ),
                    },
                    {
                        label: (
                            <>
                                <ReadOutlined />
                                前端文档
                            </>
                        ),
                        key: '3',
                        children: `Content of Tab Pane 3`,
                    },
                ]}
            /> */}
            <Recommend />
        </div>
    );
}

export default Popup;
