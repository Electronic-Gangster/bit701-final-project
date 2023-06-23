import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

function Menu(props) {

    return (
        <ul className='menu'>
            <li className=''>
                <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className=''>
                <NavLink to={"/member/form"}>회원가입</NavLink>
            </li>
            <li className=''>
                <NavLink to={"/member/list"}>회원목록</NavLink>
            </li>
            <li className=''>
                <NavLink to={"/board/list"}>게시판</NavLink>
            </li>
            <li>
                {
                    sessionStorage.loginok==null || sessionStorage.loginok==="no"?
                    <li>
                        <NavLink to={"/login"}>로그인</NavLink>
                    </li>:
                    <div>
                        <li style={{width:'250px', backgroundColor:'yellow', color:'red',cursor:'pointer'}} onClick={()=>{
                            sessionStorage.removeItem("loginok");
                            sessionStorage.removeItem("myid");
                            sessionStorage.removeItem("myname");
                            window.location.reload(); //새로고침
                        }}>로그아웃 &nbsp;&nbsp;&nbsp;
                            <b style={{color:'red'}}>{sessionStorage.myname}({sessionStorage.myid})님</b>
                        </li>
                    </div>
                }
            </li>
        </ul>
    );
}

export default Menu;