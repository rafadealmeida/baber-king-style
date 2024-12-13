# Bem-vindo ao seu aplicativo Expo com Gluestack-UI 👋

Este é um projeto [Expo](https://expo.dev) criado com
[`create-expo-app`](https://www.npmjs.com/package/create-expo-app), integrado ao
[Gluestack-UI](https://gluestack-ui.dev) para facilitar o desenvolvimento de interfaces modernas e
responsivas.

### Pré requisitos

- [Node](https://nodejs.org/pt)
- [Nvm](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12) -
  [Tutorial](https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows)

## Começando

1. Clone o projeto

```bash
git clone https://github.com/rafadealmeida/baber-king-style.git
cd baber-king-style
```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

Após executar o comando, você verá opções para abrir o aplicativo em:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), uma sandbox limitada para testar o desenvolvimento com Expo

### Pode executar o app por meio de um aplicativo Android ou IOs.

**O smartphone e o computador que está rodando o servidor deve estar no mesmo wifi**

Este projeto utiliza o sistema de roteamento baseado em arquivos do
[Expo (file-based routing)](https://docs.expo.dev/router/introduction). Os componentes de UI são
criados utilizando o [Gluestack-UI](https://gluestack.io/), proporcionando consistência visual e
flexibilidade.

Você pode começar o desenvolvimento editando arquivos dentro da pasta **app** .

## Get a fresh project

Caso tenha problema de cache pode rodar o projeto com esta flag, para limpar o cache

```bash
npx expo start -c
```

## Gluestack-UI

Como esta lib de componente funciona , ela adiciona o código de um componente a sua base de código
usando para estilização - [TailwindCSS](https://tailwindcss.com/)

> Exemplo de como adicionar um componente

```bash
npx gluestack-ui add card
```

Estes componentes será adicionado na pasta `components/ui`

## Implementando SplashScreen

1 - Primeiro copiamos a imagem em formato `.png` para a pasta `assets/images` 2 - Iremos modificar o
arquivo de configuração do expo `app.json` 3 - Adicionamos a imagem no icon

```bash
    "icon": "./assets/images/splash-icon.png",
```

4 - Adiconamos a imagem na splash-screen _este é um modo provisório, depois a splash screen será
feita com gif, para ser animada_

```bash
     "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with
  our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step
  tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
