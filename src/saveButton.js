import config from "../toggle-config.json";

export function renderSaveButton() {
    if (config.quickSave) {
        console.log("⭐ Quick Save button rendered");
        return "<button>⭐ 一鍵收藏</button>";
    } else {
        console.log("Save button hidden");
        return "";
    }
}

// 測試
renderSaveButton();
