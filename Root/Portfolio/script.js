import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getStorage, ref, listAll } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyB4-uBp4TvVZIUqa9WD7tKb3kkF3qZfPa4",
  authDomain: "garys-photography-portfolio.firebaseapp.com",
  projectId: "garys-photography-portfolio",
  storageBucket: "garys-photography-portfolio.appspot.com",
  messagingSenderId: "248650361791",
  appId: "1:248650361791:web:cccbaa2d9f9ae03b694f0a",
  measurementId: "G-TSWDSHCG5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

const listRef = ref(storage, "Dahlias");

listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {

    });
  }).catch((error) => {
    console.log("An error occured!")
  });
