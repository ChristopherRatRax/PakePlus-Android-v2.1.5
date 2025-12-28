# 列车运行记录应用 - APK生成指南

## 准备状态
✅ PWA配置文件已准备完成
✅ 应用已转换为PWA格式
✅ 本地服务器已启动 (http://localhost:8080)

## APK生成步骤

### 方案一：使用PWA Builder（推荐）

1. **访问PWA Builder网站**
   - 打开浏览器，访问：https://pwabuilder.com/

2. **输入应用地址**
   - 在"PWA URL"输入框中输入：`http://localhost:8080`
   - 点击"Analyze"按钮分析应用

3. **选择Android平台**
   - 分析完成后，会看到多个平台的选项
   - 点击"Android"选项卡

4. **生成APK**
   - 在Android页面中，点击"Generate Package"按钮
   - 选择"APK"作为输出格式
   - 等待生成完成

5. **下载APK**
   - 生成完成后，会显示下载链接
   - 点击下载到本地

### 方案二：使用Bubblewrap CLI工具

如果您想使用命令行工具：

1. **安装Bubblewrap**
   ```bash
   npm install -g @bubblewrap/cli
   ```

2. **初始化项目**
   ```bash
   bubblewrap init --manifest http://localhost:8080/manifest.json
   ```

3. **构建APK**
   ```bash
   bubblewrap build
   ```

## 安装和测试

### 在Android设备上安装APK

1. **传输APK文件**
   - 将生成的APK文件传输到Android设备
   - 可以通过USB、蓝牙、云存储等方式

2. **允许未知来源安装**
   - 在Android设备上，进入"设置" > "安全"
   - 启用"未知来源"或"允许安装未知应用"

3. **安装应用**
   - 点击APK文件开始安装
   - 按照提示完成安装过程

4. **测试功能**
   - 启动应用
   - 测试中日双语切换功能
   - 测试离线功能（断网状态下使用）

## 注意事项

1. **应用签名**
   - 生成的APK文件可能需要签名才能在某些设备上正常安装
   - 如果遇到安装问题，可以使用jarsigner工具对APK进行签名

2. **权限设置**
   - 确保应用有必要的网络权限
   - 检查manifest.json中的权限配置

3. **测试环境**
   - 建议在不同版本的Android系统上测试
   - 测试PWA功能（离线缓存、安装提示等）

## 故障排除

**问题1：PWA Builder无法访问localhost**
- 确保本地服务器正在运行
- 检查端口8080是否被占用
- 尝试使用内网IP地址而非localhost

**问题2：APK安装失败**
- 检查Android设备的安全设置
- 尝试使用adb install命令进行安装
- 检查APK文件是否完整

**问题3：应用无法离线使用**
- 检查service-worker.js是否正确部署
- 确认manifest.json中的离线配置
- 验证缓存策略是否正确

## 下一步

生成APK文件后，您可以：
1. 在Android设备上进行充分测试
2. 如需发布到Google Play商店，需要进行应用签名
3. 考虑添加更多PWA功能（如推送通知、后台同步等）

---
*生成时间：2025-12-28*
*应用版本：v1.0 (中日双语PWA版)*