// PWA 安装提示功能
let deferredPrompt;
const installButton = document.getElementById('install-button');

// 监听 beforeinstallprompt 事件
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // 显示安装按钮
    if (installButton) {
        installButton.style.display = 'block';
    }
});

// 安装按钮点击事件
if (installButton) {
    installButton.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('用户接受了安装提示');
                } else {
                    console.log('用户拒绝了安装提示');
                }
                deferredPrompt = null;
            });
        }
    });
}

// 应用已安装时的处理
window.addEventListener('appinstalled', (evt) => {
    console.log('应用已安装');
    if (installButton) {
        installButton.style.display = 'none';
    }
});

// 在页面底部添加安装提示（可选）
function showInstallPrompt() {
    const banner = document.createElement('div');
    banner.className = 'fixed bottom-4 left-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 transform translate-y-full transition-transform duration-300';
    banner.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <i data-lucide="download" class="w-5 h-5 mr-2"></i>
                <span data-translate="install-prompt">是否安装列车记录应用？</span>
            </div>
            <div class="flex space-x-2">
                <button id="accept-install" class="bg-white text-green-600 px-3 py-1 rounded text-sm font-medium">
                    <span data-translate="install">安装</span>
                </button>
                <button id="dismiss-install" class="text-white px-3 py-1 text-sm opacity-75">
                    <span data-translate="later">稍后</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    lucide.createIcons();
    
    // 显示动画
    setTimeout(() => {
        banner.style.transform = 'translateY(0)';
    }, 100);
    
    // 事件监听
    document.getElementById('accept-install').onclick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('用户接受了安装提示');
                }
                deferredPrompt = null;
            });
        }
        banner.remove();
    };
    
    document.getElementById('dismiss-install').onclick = () => {
        banner.remove();
    };
    
    // 5秒后自动消失
    setTimeout(() => {
        if (banner.parentNode) {
            banner.remove();
        }
    }, 5000);
}