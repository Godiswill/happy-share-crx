import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Cascader, message, Rate } from 'antd';
import roadmap from '@/config/roadmap.json';
import request from '@/utils/fetch';

const desc = ['不错', '好', '非常好', '满分'];

const Recommend: React.FC = () => {
    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const [info, setInfo] = useState<ArticleInfoType>();
    const onFinish = async (values: any) => {
        const data = {
            ...values,
            category: values.category?.[1],
            score: values.score !== undefined ? 60 + values.score * 10 : undefined,
        };
        console.log(data);
        // await request({ url: 'http://localhost:8888/api/posts', method: 'POST', data });
        await request({
            url: 'https://xxx/api/workbench/public/articles',
            method: 'POST',
            data: {
                articles: [data],
            },
        });
        message.success('分享成功');
        setDisabledSubmit(true);
        localStorage.setItem('__happy_share_referrer__', values?.creator || '');
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
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            name="recommend"
            // layout="vertical"
            // initialValues={info}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="文章地址"
                name="url"
                hidden
                rules={[{ required: true, message: '必填' }]}
                initialValue={info?.url}
            >
                <Input maxLength={300} />
            </Form.Item>

            <Form.Item
                label="文章来源"
                name="source"
                hidden
                rules={[{ required: true, message: '必填' }]}
                initialValue={info?.source}
            >
                <Input maxLength={20} />
            </Form.Item>

            <Form.Item
                label="文章标题"
                name="title"
                rules={[{ required: true, message: '必填' }]}
                initialValue={info?.title}
            >
                <Input maxLength={200} />
            </Form.Item>

            <Form.Item
                label="文章简介"
                name="abstract"
                // rules={[{ required: true, message: '必填' }]}
                initialValue={info?.description}
            >
                <Input.TextArea rows={4} maxLength={1000} />
            </Form.Item>

            <Form.Item
                label="文章分类"
                name="category"
                // rules={[{ required: true, message: '必选' }]}
            >
                <Cascader
                    expandTrigger="hover"
                    options={roadmap}
                    // placement="topLeft"
                    maxTagCount="responsive"
                />
            </Form.Item>

            <Form.Item
                label="推荐姓名"
                name="creator"
                initialValue={localStorage.getItem('__happy_share_referrer__') || undefined}
            >
                <Input maxLength={32} />
            </Form.Item>

            <Form.Item label="推荐原因" name="description">
                <Input maxLength={500} />
            </Form.Item>

            <Form.Item label="主观评分" name="score">
                <Rate allowHalf tooltips={desc} count={4} />
            </Form.Item>

            <Form.Item label=" " colon={false}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="primary" htmlType="submit" disabled={disabledSubmit}>
                        好文推荐
                    </Button>
                    <Button
                        type="link"
                        href="https://dev.netease.com/workbench/public/articles"
                        target="_blank"
                    >
                        往期精彩好文
                    </Button>
                </div>
            </Form.Item>
        </Form>
    ) : null;
};

export default Recommend;
