const firebaseConfig = {
    apiKey: "AIzaSyCt4VvXFxVI56TIelBwBZEkvIbCmpq9jRo",
    authDomain: "lets-chat-b454d.firebaseapp.com",
    projectId: "lets-chat-b454d",
    storageBucket: "lets-chat-b454d.appspot.com",
    messagingSenderId: "310595981445",
    appId: "1:310595981445:web:a168521f5f93ac513759ec"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  localStorage.getItem("user_name")
  localStorage.getItem("room_name")