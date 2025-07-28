---
title: 🛜 设置包主机
id: set_up_host
---

import DiffViewer from '@site/src/components/DiffViewer';
import Highlight from '@site/src/components/Highlight';

在添加资源包之前，您需要为其设置托管。如果您只是在本地测试，只需运行 /ce reload all - 它将为您处理打包和发送资源包！

:::info
以下所有配置都在 `config.yml` 文件中设置。

对于需要 API 密钥的服务，我们建议使用 CraftEngine 的 <Highlight color="#1877F2">**环境变量**</Highlight>。\
**不使用环境变量共享您的 config.yml 是有风险的——不要这样做！**
:::

:::tip

想检查您的资源包是否已完全托管？只需运行 /ce reload all，看看它是否能正常下载！

:::

## 自托管
<Highlight color="#1877F2">**基本解决方案**</Highlight>

优点是什么？它完全免费——只需要您现有的服务器。非常适合测试和开发。但除非您有极好的带宽，否则不要在生产环境中使用它。资源包下载会占用您服务器的连接，并可能导致其他玩家延迟。

<DiffViewer>
{`
resource-pack:
    delivery:
      hosting:
        - type: "self"
-       ip: "localhost"
+       ip: "您的服务器 IP" # 例如 111.222.333.444
          port: 8163
          protocol: "http"
          deny-non-minecraft-request: true
          one-time-token: true
          rate-limit:
            max-requests: 5
            reset-interval: 20 # 秒
`}
</DiffViewer>

:::info

`deny-non-minecraft-request` 设置会阻止所有来自非 Minecraft 客户端的请求。\
至于 `one-time-token`，它会为每个玩家生成一个一次性的、有时间限制的下载链接。

您可以通过设置一个完整/完整的 URL 来避免使用 IPv4 地址作为资源包 URL。
```yaml
- type: "self"
  ip: "111.222.333.444"
  port: 8163
  url: "https://mydomain.com:8163/"
  ...更多选项
```

:::

:::caution

如果您没有 SSL 证书，请不要使用 `https`。

:::

## Lobfile 
<Highlight color="#1877F2">**用户友好**</Highlight><Highlight color="#10ae28ff">**免费**</Highlight>

对于寻找资源托管解决方案的初学者来说，Lobfile 实际上是一个非常可靠的选择。它在大多数地区都能很好地工作——当然，除了像中国这样有严格互联网限制的地方。

<details>
  <summary>获取 API 密钥</summary>

1️⃣ 访问 **https://lobfile.com/** 并创建一个帐户 \
2️⃣ 点击 `帐户` -> `设置` \
3️⃣ 点击 <Highlight color="#1877F2">**将 API 密钥复制到剪贴板**</Highlight>

</details>

```yaml
resource-pack:
  delivery:
    hosting:
      - type: "lobfile"
        api-key: "abcdefghijkl"
        use-environment-variables: false
```

<details>
  <summary>环境变量</summary>
  - CE_LOBFILE_API_KEY
</details>

## S3 
<Highlight color="#1877F2">**高级用户**</Highlight><Highlight color="#ae1010ff">**付费**</Highlight>

S3（简单存储服务）是云服务提供商提供的高度可扩展、持久且可用的对象存储服务。为防止带宽盗窃，CraftEngine 为每次下载颁发唯一的、会过期的令牌——从而阻止直接滥用。

```yaml
resource-pack:
  delivery:
    hosting:
      - type: s3
        endpoint: ""
        bucket: ""
        access-key-id: ""
        access-key-secret: ""
        protocol: "https"
        path-style: false
        region: "auto"
        upload-path: "server_resource_pack.zip"
        use-legacy-signature: true
        validity: 10
        # 可选 CDN
        cdn:
          domain: ""
          protocol: "https"
```

:::info

不同的云提供商有各自设置 S3 存储的方式。在未来版本的文档中，我们将尝试为主要提供商提供带截图的分步指南。

:::

:::caution

其余是一些不太常见的托管方法。如果您需要它们，请随时继续阅读。但如果您想自己托管资源包，请改用 API 方法 ResourcePackHosts.register()。

:::

## 外部

```yaml
resource-pack:
  delivery:
    hosting:
      - type: external
        url: ""
        uuid: "" # 可选
        sha1: "" # 可选
```

:::info

在外部服务器上托管您的资源包。
这可以消除您自己服务器上的带宽消耗。

通常，在将资源包上传到托管平台后，它会为您提供：

- URL
- UUID（可选）
- SHA1（可选）

只需用相应的值填充这三个字段即可。

:::

:::caution

请注意，需要定期更新资源包以保持版本完整性。此维护过程需要手动干预。

:::

## OneDrive

```yaml
resource-pack:
  delivery:
    hosting:
      - type: onedrive
        use-environment-variables: false
        client-id: ""
        client-secret: ""
        refresh-token: ""
        upload-path: "server_resource_pack.zip"
```

<details>
  <summary>环境变量</summary>
  - CE_ONEDRIVE_CLIENT_ID
  - CE_ONEDRIVE_CLIENT_SECRET
  - CE_ONEDRIVE_REFRESH_TOKEN
</details>

## Dropbox

```yaml
resource-pack:
  delivery:
    hosting:
      - type: dropbox
        use-environment-variables: false
        app-key: ""
        app-secret: ""
        refresh-token: ""
        upload-path: "server_resource_pack.zip"
```

<details>
  <summary>环境变量</summary>
  - CE_DROPBOX_APP_KEY
  - CE_DROPBOX_APP_SECRET
  - CE_DROPBOX_REFRESH_TOKEN
</details>

## Alist

```yaml
resource-pack:
  delivery:
    hosting:
      - type: alist
        use-environment-variables: false
        disable-upload: false
        api-url: ""
        username: ""
        password: ""
        file-password: ""
        otp-code: ""
        upload-path: "server_resource_pack.zip"
```

<details>
  <summary>环境变量</summary>
  - CE_ALIST_USERNAME
  - CE_ALIST_PASSWORD
  - CE_ALIST_FILE_PASSWORD
</details>

## Gitlab

```yaml
resource-pack:
  delivery:
    hosting:
      - type: gitlab
        use-environment-variables: false
        gitlab-url: ""
        access-token: ""
        project-id: ""
```

<details>
  <summary>环境变量</summary>
  - CE_GITLAB_ACCESS_TOKEN
</details>

:::warning

根据 GitLab 的服务条款，您不得使用 GitLab 的服务器进行内容分发。您必须设置自己的 GitLab 服务器。

https://handbook.gitlab.com/handbook/legal/acceptable-use-policy/

> 我们在全文中都提到“我们的服务”——这指的是 GitLab 拥有或运营的所有服务（包括相关网站）。
>
> 3. 为了使我们的服务以及他人的服务能够安全、无中断地运行，您不得：
>
> 采取任何可能损害、超载或以其他方式损害我们的服务或他人服务的行为，包括使用我们的服务挖掘或演示加密货币或区块链的工作量证明，或主要用于分发内容。

:::