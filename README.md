# MeetProducer

Projet Next.js avec intégration Firebase pour la production de réunions.

## 🚀 Technologies

- **Next.js** 16.0.1 - Framework React
- **React** 19.2.0
- **TypeScript** 5
- **Firebase** 12.4.0 - Backend et services cloud
- **Tailwind CSS** 4 - Framework CSS

## 📋 Prérequis

- Node.js 20 ou supérieur
- npm ou yarn
- Un compte Firebase (pour la configuration)

## 🔧 Installation

1. Clonez le repository :
```bash
git clone [](https://github.com/grmvincent/meetproducer.git)
cd meetproducer
```

2. Installez les dépendances :
```bash
npm install
```

## 🔥 Configuration Firebase

Le projet est configuré avec Firebase. La configuration se trouve dans `lib/firebase.ts`.

### Configuration actuelle

- **Project ID** : `meetproducer`
- **Auth Domain** : `meetproducer.firebaseapp.com`
- **Services configurés** :
  - Firebase Analytics
  - Prêt pour l'ajout d'autres services (Auth, Firestore, Storage, etc.)

### Initialiser Firebase CLI

Si vous souhaitez utiliser Firebase CLI :

```bash
# Installer Firebase CLI globalement
npm install -g firebase-tools

# Se connecter à votre compte Firebase
firebase login

# Lister vos projets Firebase
firebase projects:list

# Initialiser Firebase dans le projet
firebase init
```

## 🛠️ Commandes disponibles

### Développement

```bash
npm run dev
```

Lance le serveur de développement sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

Compile l'application pour la production.

### Lancer en production

```bash
npm start
```

Lance l'application en mode production.

### Linter

```bash
npm run lint
```

Vérifie le code avec ESLint.

## 📁 Structure du projet

```
meetproducer/
├── app/                 # Pages et routes Next.js
│   └── page.tsx        # Page principale
├── lib/                # Utilitaires et configurations
│   └── firebase.ts     # Configuration Firebase
├── package.json        # Dépendances et scripts
└── README.md           # Documentation
```

## 🔥 Utilisation de Firebase

### Analytics

Pour utiliser Firebase Analytics dans un composant client :

```typescript
"use client";

import { getFirebaseAnalytics } from "@/lib/firebase";
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    const analytics = getFirebaseAnalytics();
    if (analytics) {
      // Analytics est maintenant disponible
    }
  }, []);

  return <div>Mon composant</div>;
}
```

### Autres services Firebase

Pour ajouter d'autres services Firebase (Auth, Firestore, Storage), importez depuis `firebase` :

```typescript
import app from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);
```

## 📝 Scripts

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile pour la production
- `npm start` - Lance en mode production
- `npm run lint` - Vérifie le code

## 👤 Auteur

**grmvincent**

## 📄 Licence

ISC
