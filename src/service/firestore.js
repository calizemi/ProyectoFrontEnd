import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Ky9eOVw3nZ6t-7Igter0rk6zYfqNHZ0",
  authDomain: "codigo13-88c18.firebaseapp.com",
  projectId: "codigo13-88c18",
  storageBucket: "codigo13-88c18.appspot.com",
  messagingSenderId: "1076934602059",
  appId: "1:1076934602059:web:d3a19bac400ce67b9b4cce",
  measurementId: "G-9GZNEWJCZG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getUsersData = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionUsers = collection(db, "usuarios-data");
  // paso 2: Traer los documentos
  const documentUsers = await getDocs(collectionUsers);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const users = documentUsers.docs.map((doc) => doc.data());
  return users;
};

// debemos crear una funcion que se encargue de poder crear
// elementos en nuestra base de datos
// ojo: vamos a recibir como parametro un objeto que contenga
// la informacion del producto que estamos creado
export const storeUsers = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

// actualizar un datos en firebase
export const updateProductClothe = async (product) => {
  const productRef = doc(db, "product_clothes", product.id);

  await updateDoc(productRef, product);
};

// eliminar un registros de la db
export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

// vamos a crear una funcion qu reciba un email y password
// y cree un cuenta en firebase
export const auth = getAuth();

//Esta funcion va a enviar el correo de verificacion
export const sendEmail = async () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
};


export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const storeUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};
