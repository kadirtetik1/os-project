import React from 'react'
import styles from './Register.module.css'
import {FiX} from "react-icons/fi";
import {GiTeacher} from "react-icons/gi";
import {PiStudentFill} from "react-icons/pi";


const Register = (props) => {
  return props.isClicked ? (
    <div className={styles.background} >

        <div className={styles.form}>

        <div className={styles.closeContainer}>
            <div className={styles.close}  onClick={() => props.closeRegister(false)}><FiX size={'2rem'}/></div>
        </div>

        <form className={styles.formContainer}>

          <div className={styles.roleBox}>

                  <div className={styles.selectRole}>

                  <input type="radio" id="teacher" name="akademik_unvan" value="teacher" required="required"/>
                  <div className={styles.inputTitle}>
                    <GiTeacher className={styles.icon} size={'2rem'} color={"#0076fa"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}} for="teacher">Öğretmen</label>
                 </div>

                  </div>

                  <div className={styles.selectRole}>

                  <input type="radio" id="student" name="akademik_unvan" value="student" required="required"/>
                  <div className={styles.inputTitle}>
                  <PiStudentFill className={styles.icon} size={'2rem'} color={"#0076fa"}/>
                 <label style={{fontSize:"11px", fontWeight:"600"}} for="student">Öğrenci</label>
                  </div>
                 
                </div>

                  <h4 style={{padding:"0", margin:"0"}}>Akademik Ünvanınızı Seçiniz</h4>
                

                  </div>
                
        <div className={styles.inputBox}>
                    <input type="text" required="required"/>
                    <span>İsim</span>
                    <i></i>
                </div>

                <div className={styles.inputBox}>
                    <input type="text" required="required"/>
                    <span>Soyisim</span>
                    <i></i>
                </div>
                
                <div className={styles.inputBox}>
                    <input type="text" required="required"/>
                    <span>E-mail</span>
                    <i></i>
                </div>


                <div className={styles.inputBox}>
                    <input type="text" required="required"/>
                    <span>Kullanıcı Adı</span>
                    <i></i>
                </div>

                <div className={styles.inputBox}>
                    <input type="password" required="required"/>
                    <span>Şifre</span>
                    <i></i>
                </div>

                <div className={styles.buttonContainer}>
                <input className={styles.uyeButton} type="submit" value="Üye Ol"/>
                </div>
                
               </form>
        </div>
      
    </div>
  )
  : ""
}

export default Register
