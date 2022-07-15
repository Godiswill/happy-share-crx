const getArticleInfo = (): ArticleInfoType => {
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    // const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const ogDescription = document
        .querySelector('meta[property="og:description"]')
        ?.getAttribute('content');

    const title = document.getElementsByTagName('title')?.[0]?.textContent || '';

    const description = document.querySelector('meta[name=description]')?.getAttribute('content');

    return {
        title: ogTitle || title || '',
        url: window.location.href,
        description: ogDescription || description || '',
        image: ogImage || '',
    };
};

export {};

chrome.runtime.onMessage.addListener(
    (msg: MessageEventType, sender: chrome.runtime.MessageSender, sendResponse) => {
        console.log('[content.js]. Message received1x', msg);
        if (process.env.NODE_ENV === 'development') {
            if (msg.type === 'window.location.reload') {
                sendResponse('receivedx');
                console.log('current page will reload.');
                window.location.reload();
            }
        }
        if (msg.type === 'GET_ARTICLE_INFO') {
            const info = getArticleInfo();
            console.log('current page info: ', info);
            sendResponse(info);
        }
    }
);
