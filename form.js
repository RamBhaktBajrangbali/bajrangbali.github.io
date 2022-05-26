import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore,deleteDoc,  collection, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
var config = {
	apiKey: "AIzaSyCdzbcpM_Oe3NQgBmpJcJJq1cs0z5VFWYc",
  	authDomain: "fir-web-login-906b6.firebaseapp.com",
  	projectId: "fir-web-login-906b6",
  	storageBucket: "fir-web-login-906b6.appspot.com",
  	messagingSenderId: "1014146452701",
  	appId: "1:1014146452701:web:39150ab67e871555db1f34",
  	measurementId: "G-X24EJNJLQV"
};

const app = initializeApp(config)
const db = getFirestore(app)
const grp = collection(db, "collection")
const usrs = collection(db, "users");

function any(list){
    const n = list.length;
    for(var i = 0; i < n; i++){
        if(list[i].length == 0){
            return true;
        }
    }
    return false;
}
async function uploadnew(object){
    try{
        //const docRef = await addDoc(collection(db, "collection"), object)
        //const str = Math.random().toString(36).substring(2, 7);
        await setDoc(doc(grp, object.name), object)
        swal(
            "Video Uploaded Successfully", 
            "Your video was successfully uploaded, \n you can now access it on the main website!", 
            "success"
        )
    }
    catch{
        swal(
            "Video Submission Failure", 
            "Your video was not uploaded to the website, try again.", 
            "error"
        )
    }
}

async function addNewUser(){

    const Email = document.getElementById("email").value;
    if(Email.length === 0){
        swal("Account Verification Failed", "Please enter an email address to verify the account.", "error");
        return;
    }

    const OBJ = {
        email:Email
    }

    try{
        await setDoc(doc(usrs, Email), OBJ);
        swal("Account Verified", `${Email} is now a verified account.`, "success");
    }
    catch{
        swal("Account Verification Failed", "The account was not verified, please try again.", "error");
    }
}

async function deleteUser(){
    const Email = document.getElementById("email_del").value;
    if(Email.length === 0){
        swal("Account Deletion Failed", "Please enter and email address to delete account.", "error");
        return;
    }
    try{
        await deleteDoc(doc(usrs, Email));
        swal("Account Successfully Deleted", `${Email} was successfully deleted.`, "success");
    }
    catch{
        swal("Account Deletion Failed", "The account was not deleted, please try again.", "error");
    }
}

function upload(){
    const vidname = document.getElementById("vidname").value;
    const vidlink = document.getElementById("vidlink").value;
    const vidis = document.getElementById("vidis").value;
    const slides = document.getElementById("slides").value;

    if(any([vidname, vidlink, vidis, slides])){
        swal(
            "Video Submission Failed", 
            "Please fill the whole form,\n (*) means that the input field is required to fill. \n (Uploading Video Poster is optional)",
            "error"
        )
    }
    else{

        const object = {
            "name":vidname,
            "link":vidlink,
            "description":vidis,
            "slides":slides,
        }

        console.log(object)
        //getCities(db)
        uploadnew(object)
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());


window.upload = upload
window.uploadnew = uploadnew
window.addNewUser = addNewUser
window.deleteUser = deleteUser