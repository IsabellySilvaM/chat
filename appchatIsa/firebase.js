// Importando o SDK do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPsovP2seMi3kUouV3JOTQ_IXCD8LeXC0",
  authDomain: "chat-1ad3b.firebaseapp.com",
  projectId: "chat-1ad3b",
  storageBucket: "chat-1ad3b.firebasestorage.app",
  messagingSenderId: "30407851288",
  appId: "1:30407851288:web:e64963e1ed5761ed7eb26d"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando os serviços necessários
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Exportando as referências
export { auth, firestore, database };
