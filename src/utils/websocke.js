let Socket = '';
let setIntervalWesocketPush = null;

/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
export const createSocket = (url, token) => {
  if (Socket) {
    Socket?.close();
  }
  if (!Socket) {
    console.log('建立websocket连接', token);
    const token1 =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b2RheS5vdXdlbnRhby5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NzE2MDY4NzAsImV4cCI6MTY3MTYwODY3MCwibmJmIjoxNjcxNjA2ODcwLCJqdGkiOiJQQ09sb0N5YWMwVWRMcmxTIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.xlAozMhqdcGPqEXdq7cMPqfR3I1FsfuPUOVRkupWAv0';
    Socket = new WebSocket('ws://today.ouwentao.com/ws', [token1]);
    console.log(Socket.readyState, 'readyStatereadyStatereadyStatereadyState');
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Socket.onopen = onopenWS;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Socket.onmessage = onmessageWS;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Socket.onerror = onerrorWS();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Socket.onclose = oncloseWS;
  } else {
    console.log('websocket已连接');
  }
};
/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 5000, ping = 'ping') => {
  clearInterval(setIntervalWesocketPush);
  Socket.send(ping);
  setIntervalWesocketPush = setInterval(() => {
    Socket.send(ping);
  }, time);
};
/**打开WS之后发送心跳 */
const onopenWS = () => {
  console.log('5754545');
  sendPing();
};

/**连接失败重连 */
const onerrorWS = () => {
  Socket.close();
  clearInterval(setIntervalWesocketPush);
  console.log('连接失败重连中');
  if (Socket.readyState !== 3) {
    Socket = null;
    createSocket();
  }
};

/**WS数据接收统一处理 */
const onmessageWS = e => {
  console.log(e, '355555555555555555555555');
  window.dispatchEvent(
    new CustomEvent('onmessageWS', {
      detail: {
        data: e.data,
      },
    })
  );
};

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
  setTimeout(() => {
    if (Socket.readyState === 0) {
      connecting(message);
    } else {
      Socket.send(JSON.stringify(message));
    }
  }, 1000);
};

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
export const sendWSPush = message => {
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close();
    createSocket();
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(message));
  } else if (Socket.readyState === 0) {
    connecting(message);
  }
};
export const closeWs = () => {
  Socket?.close();
};
/**断开重连 */
const oncloseWS = () => {
  clearInterval(setIntervalWesocketPush);
  console.log('websocket已断开....正在尝试重连');
  if (Socket?.readyState !== 2) {
    Socket = null;
    createSocket();
  }
};
