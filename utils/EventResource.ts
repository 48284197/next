import { fetchEventSource } from '@microsoft/fetch-event-source';

type EventSourceProps = {
    url: string;
    method: string;
    data: any;
    callback: (msg: any) => void;
    close?: () => void;
    signal?: AbortSignal;
}

export function EventSource({ url, method,data, callback,close,signal}:EventSourceProps) {



    return fetchEventSource(url, {
        method,
        signal,
        headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream",
            "Transfer-Encoding": "chunked",
        },
        body: JSON.stringify(data),

        async onopen(response) {

            if (response.ok) {
                // 成功建立连接
                return;
            } else {
                // 后端报500等情况
                const error = await response.json();
                throw new Error(error.detail);
            }
        },
        onmessage(msg) {
            callback(msg);
        },
        onerror(err) {
            // onopen抛出的异常在onerror也要抛，否则会不断触发重连
            throw err;
        },
        onclose() {
            if (close) {
                close()
            }

        },
        openWhenHidden: true,
    });
}