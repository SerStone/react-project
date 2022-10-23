import React from 'react';
import {useForm} from "react-hook-form";

import css from './User.Info.module.css'

function UserInfo() {

    const {register, handleSubmit} = useForm();

    return (
        <div className={css.UserInfoWrap}>
            <div className={css.UserInfoAbout}>

                <form className={css.UserForm} onSubmit={handleSubmit((obj)=>{
                    localStorage.setItem('user',JSON.stringify(obj))
                })}>
                    <input className={css.UserInfoName} type={"text"} placeholder={'Username'} {...register('username')} />
                    <input className={css.UserInfoPassword} type={'text'} placeholder={'Password'} {...register('password')}/>
                    <button className={css.UserRegister}><span
                        className="text">Register</span><span>Sure?</span></button>
                </form>

            </div>
            <img className={css.UserInfoImg}
                 src={'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'} alt={'portrait'}/>
        </div>
    );
}

export {UserInfo};