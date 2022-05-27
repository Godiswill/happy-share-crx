import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Cascader } from 'antd';
import { ArticleInfoType } from '@/types';
import roadmap from '@/config/roadmap.json';

const Recommend: React.FC = () => {
    const [info, setInfo] = useState<ArticleInfoType>();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    useEffect(() => {
        (async () => {
            const tabs = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });
            const tabId = tabs?.[0].id;
            if (!tabId) return;
            chrome.tabs.sendMessage(
                tabId,
                {
                    type: 'GET_ARTICLE_INFO',
                },
                (res) => {
                    console.log(res);
                    setInfo(res);
                }
            );
        })();
    }, []);

    return info ? (
        <Form
            name="recommend"
            layout="vertical"
            // initialValues={info}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="文章标题"
                name="title"
                rules={[{ required: true, message: '必填' }]}
                initialValue={info?.title}
            >
                <Input maxLength={50} />
            </Form.Item>

            <Form.Item
                label="推荐理由"
                name="reason"
                rules={[{ required: true, message: '必填' }]}
                initialValue={info?.description}
            >
                <Input.TextArea rows={4} maxLength={120} />
            </Form.Item>

            <Form.Item
                label="推荐人花名"
                name="nickname"
                rules={[{ required: true, message: '必填' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="设置分类"
                name="category"
                rules={[{ required: true, message: '必选' }]}
            >
                <Cascader options={roadmap} placement="topLeft" maxTagCount="responsive" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    好文推荐
                </Button>
            </Form.Item>
        </Form>
    ) : null;
};

export default Recommend;
