import config from "../toggle-config.json";

function normalLoginFlow() {
    console.log("Standard login flow");
    // 假設這裡是原始登入步驟
}

function fastLoginFlow() {
    console.log("Fast login flow");
    // 這裡簡化 UI 或跳過次要步驟
}

export function login() {
    if (config.fastLogin) {
        return fastLoginFlow();
    } else {
        return normalLoginFlow();
    }
}

// 測試
login();
