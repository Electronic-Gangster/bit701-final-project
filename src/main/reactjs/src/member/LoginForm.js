import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios  from 'axios';



function LoginForm(props) {

    const [myid, setMyid] = useState('');
    const [mypass, setMypass] = useState('');
    const navi = useNavigate();

    //submit 이벤트
    const onSubmitLogin=(e)=>{
        
        e.preventDefault(); //기본 이벤트 무효화
        
        const url=`/member/login?myid=${myid}&mypass=${mypass}`;
        
        Axios.get(url)
        .then(res=>{
            if((res.data.success)==='yes'){
                alert("로그인 성공");

                /* localStorage : 직접 지우기전에는 브라우저에 남아있음 */
                /* sessionStorage : 브라우저 닫으면 지워짐 */

                sessionStorage.loginok="yes";
                sessionStorage.myname=res.data.myname;
                sessionStorage.myid=myid;

                navi("/");

                window.location.reload();
            }else{
                alert("로그인 실패");
                sessionStorage.loginok="no";
                sessionStorage.myname="";
                sessionStorage.myid="";
            }
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitLogin} className=''>
                <table className='table' style={{width:'500px'}}>
                    <caption align="top"><b>로그인</b></caption>
                    <tbody>
                        <tr>
                            <th style={{width:'100px',backgroundColor:"lightred"}}>아이디</th>
                            <td className='input-group'>
                                <input type='text' className='form-control' placeholder='아이디' required value={myid} onChange={(e)=>{
                                    setMyid(e.target.value)}}/>
                            </td>
                        </tr>

                        <tr>
                            <th style={{width:'100px',backgroundColor:"lightblue"}}>비밀번호</th>
                            <td>
                                <input type='password' className='form-control' placeholder='비번입력' required value={mypass} onChange={(e)=>setMypass(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align='center'>
                                <button type='submit' className='btn btn-outline-info bb2'
                                style={{width:'100px'}}>로그인</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </form>
        </div>
    );
}

export default LoginForm;