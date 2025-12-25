import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addProduct = async function() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  await addDoc(collection(db, "products"), { name, price, image });
  alert("تمت الإضافة");
}
