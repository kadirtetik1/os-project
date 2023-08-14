import React from 'react'
import styles from './UserInfoAreas.module.css'
import {useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserInfoAreas = (props) => {

  const showToastMessage = () => {
    toast.success(props.title, {
        position: toast.POSITION.TOP_RİGHT
    });
};

  const navigate = useNavigate();

  const handleLogin = (event) => {

    if(props.title==="Profil Bilgileri"){

      navigate("/userInfos");
    }

    else if(props.title==="Aldığım Dersler"){
      navigate("/taken-courses");
      
    }

    else if(props.title==="Ders Programım"){

      navigate("/schedule");
    }

    else if(props.title==="Çıkış"){

      alert("Çıkış yapmak istediğinize emin misiniz? ");  // Soru cevap şeklinde sor, if(answer=="yes") => çıkış..
     
      navigate("/");
      
      localStorage.removeItem("Token");
      localStorage.removeItem("Id");
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      
    }
  }
  return (
    <div className={styles.container1}>

    <div onClick={(event) => handleLogin(event)} className={styles.container}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.content}>{props.title}</div>

        </div>

        <div className={styles.bottomLine}></div>
        <ToastContainer />
    </div>
  )
}

export default UserInfoAreas
