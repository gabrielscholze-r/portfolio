# 🔖 Portfólio Profissional - Gabriel Scholze

[![Website](https://img.shields.io/badge/🌐_Website-https%3A%2F%2Fgabrielscholze.tech-%2300ac47?style=for-the-badge)](https://gabrielscholze.tech)
[![GitHub](https://img.shields.io/badge/🐙_Repositório-black?style=for-the-badge&logo=github)](https://github.com/gabrielscholze-r/portfolio)
[![Node](https://img.shields.io/badge/Node-22.14-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)

## 🎯 Sobre o Projeto
**SPA moderna** apresentando:
- 👨💻 Perfil profissional e trajetória acadêmica
- 🛠️ Habilidades técnicas com classificação por nível
- 📂 Portfólio de projetos com detalhes técnicos
- 📈 Experiências profissionais cronológicas
- 🎨 Design responsivo e interativo

## 🛠 Stack Tecnológica

### Principais Dependências
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 19.0.0 | Biblioteca principal |
| React Router | 7.3.0 | Navegação SPA |
| Bootstrap | 5.3.3 | Framework CSS |
| React Bootstrap | 2.10.9 | Componentes UI |
| Vite | 6.2.0 | Build tool |

### Ambiente de Desenvolvimento
```bash
Node.js: v22.14.0
npm: 10.9.2
OS: Qualquer sistema compatível com Node.js
```

## 📦 Dependências Chave

### Core Framework
```json
"react": "^19.0.0"            # Biblioteca principal para construção de UI
"react-dom": "^19.0.0"        # Integração React com DOM
"react-router-dom": "^7.3.0"  # Sistema de roteamento SPA
"bootstrap": "^5.3.3"         # Framework CSS para layout responsivo
"react-bootstrap": "^2.10.9"  # Componentes Bootstrap otimizados para React
"bootstrap-icons": "^1.11.3"  # Kit de ícones modernos
"react-toastify": "^11.0.5"   # Sistema de notificações toast animadas
```

## 🚀 Execução Local
- git clone https://github.com/gabrielscholze-r/portfolio.git
- npm install
- npm run dev

## 🌐 Estratégia de Deploy
**Infraestrutura**
- Servidor: Digital Ocean Droplet (Ubuntu 22.04)
- Web Server: Caddy 2.6


## 🌐 Fluxo CI/CD

1. **Push na branch `master`:**
   - O fluxo é acionado quando há um push na branch `master` no GitHub.

2. **Checkout do código:**
   - A ação começa com o checkout do repositório para garantir que o código mais recente está disponível.

3. **Configuração de SSH:**
   - A chave privada SSH é configurada para permitir o acesso seguro ao servidor, e o host é verificado.

4. **Atualização do servidor:**
   - O código no servidor é atualizado com `git pull`, as dependências são instaladas com `npm install`, e o projeto é reconstruído com `npm run build`.

5. **Recarregar o Caddy:**
   - Se houver alterações na configuração do servidor, o Caddy é recarregado para garantir que as mudanças sejam aplicadas sem downtime.



# ✨ Destaques Técnicos

- **Responsividade**: Layout adaptável para todos os dispositivos

- **Segurança**: HTTPS implementado com certificado válido

- **CI/CD**: Deploy automatizado com atualização zero-downtime

# 📬 Contato
**Para oportunidades ou colaborações:**

- **Website**: https://gabrielscholze.tech

- **GitHub**: github.com/gabrielscholze-r

- **LinkedIn**: linkedin.com/in/gabrielscholze (exemplo)
