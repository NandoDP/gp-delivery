# 🚚 GP Delivery - Application de Livraison

Application web moderne de service de livraison construite avec Next.js, Docker et Jenkins CI/CD.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- Docker & Docker Compose
- Jenkins (pour CI/CD)

### Installation Locale

1. Cloner le repository
```bash
git clone https://github.com/votre-username/gp-delivery.git
cd gp-delivery
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en développement
```bash
npm run dev
```

4. Ouvrir http://localhost:3000

### 🐳 Docker
```bash
# Build
docker build -t gp-delivery .

# Run
docker run -p 3000:3000 gp-delivery
```

### Docker Compose
```bash
docker-compose up -d
```

## 📦 Structure du Projet
gp-delivery/
├── src/app/          # Code source Next.js
├── public/           # Fichiers statiques
├── Dockerfile        # Configuration Docker
├── Jenkinsfile       # Pipeline CI/CD
└── docker-compose.yml

## 🔧 Configuration Jenkins

1. Créer un nouveau pipeline
2. Pointer vers le Jenkinsfile du repository
3. Ajouter les credentials Docker Hub
4. Lancer le build

## 📝 License

MIT