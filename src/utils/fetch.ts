// import { message } from 'antd';
import { message } from 'antd';

export default async function request({
    url,
    method,
    data = {},
}: {
    url: string;
    method: string;
    data: Record<string, any>;
}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (response.status !== 200) {
        const msg = response.statusText || '接口异常';
        message.error(msg);
        return Promise.reject(msg);
    }
    const res = await response.json();
    if (res.code && res.code !== 200) {
        message.error(res.msg);
        return Promise.reject(res);
    }
    return res; // parses JSON response into native JavaScript objects
}
