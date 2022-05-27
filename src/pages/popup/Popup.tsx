import { Tabs } from 'antd';
import { LikeOutlined, BankOutlined, ReadOutlined } from '@ant-design/icons';
import devData from '@/config/develop.json';
import Recommend from './components/Recommend';

function Popup() {
    return (
        <div className="App">
            <Tabs type="card">
                <Tabs.TabPane
                    tab={
                        <>
                            <LikeOutlined />
                            好文推荐
                        </>
                    }
                    key="1"
                >
                    <Recommend />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab={
                        <>
                            <BankOutlined />
                            前端学院
                        </>
                    }
                    key="2"
                >
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {devData.map((it) => (
                            <div
                                key={it.key}
                                onClick={() => window.open(chrome.extension.getURL('develop.html'))}
                            >
                                <img src={it.icon} alt="icon" />
                                {it.title}
                            </div>
                        ))}
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab={
                        <>
                            <ReadOutlined />
                            前端文档
                        </>
                    }
                    key="3"
                >
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
}

export default Popup;
