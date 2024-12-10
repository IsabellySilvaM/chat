## Objetivo

O objetivo deste projeto é adicionar funcionalidades específicas em um aplicativo de mensagens. A funcionalidade principal, **envio de imagens**, foi parcialmente implementada. Além disso, uma funcionalidade extra, **indicação de "usuário digitando" em tempo real**, foi incorporada para melhorar a experiência do usuário.

### Tecnologias

- **React Native** com Expo para desenvolvimento móvel.
- **TailwindCSS** (via NativeWind) para estilização.
- **Firebase** (Firestore e Storage) para backend.

## Funcionalidades

### 1. Envio de Imagens (Funcionalidade Principal)

- A funcionalidade abrange:
  - Seleção de imagens diretamente da galeria do dispositivo.
  - Integração com o **Firebase Storage** para upload das imagens.
  - Exibição do link da imagem dentro da conversa.

- **Restrições**: A funcionalidade não foi completamente implementada devido a mudanças nas permissões do Firebase Storage. Para finalizar o envio de imagens, são necessárias configurações avançadas no Firebase.

### 2. Indicação de "Usuário Digitando" em Tempo Real (Funcionalidade Adicional)

- Implementação de um indicador visual que sinaliza quando um usuário está digitando uma mensagem, tornando a experiência mais interativa.
- A interação entre os usuários se torna mais fluída, pois é possível perceber quando alguém está prestes a enviar uma mensagem.

## Instruções para Utilização

### Pré-requisitos

1. Clone este repositório:

   ```
   git clone https://github.com/IsabellySilvaM/chat.git
   ```

2. Instale as dependências do projeto:

   ```
   npm install
   ```

3. Inicie o projeto:

   ```
   npm start
   ```

## Testando o APK

- Link para o [APK](https://expo.dev/accounts/isabellysilvam/projects/appchatIsa/builds/5f2941ef-9b10-4df5-b4de-e21be48f61c3). 
