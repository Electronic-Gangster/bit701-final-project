import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';
import MemberRowList from './MemberRowList';

function MemberList(props) {

    const [mlist, setMlist] = useState([]);     //회원목록을 저장할 상태변수

    //목록 가져오는 함수
    const getList=()=>{
        const url="/member/list";

        Axios.get(url)              //get방식으로 요청
        .then(res=>{                //요청 성공시
            setMlist(res.data);     //데이터 저장
        })
    }

    //삭제하는 함수
    const deleteMember=(num)=>{     //num: 삭제할 회원의 번호
        const url="/member/delete?num="+num;        //삭제할 회원의 번호를 url에 붙여서 요청

        Axios.delete(url)           //delete방식으로 요청
        .then(res=>{                //요청 성공시
            //목록 다시 출력
            getList();              //삭제 후 목록을 다시 가져오는 함수 호출
        })
    }

    useEffect(()=>{                 //컴포넌트가 화면에 표시될 때 호출되는 함수
        getList();                  //목록 가져오는 함수 호출
    },[]);

    return (
        <div>
            <h4>총 회원수 : {mlist.length}명</h4>
            <table className='table table-bordered' style={{width:'600px', textAlign:'center'}}>
                <tr style={{backgroundColor:"#ff0"}}>
                    <th style={{width:'40px'}}>번호</th>
                    <th style={{width:'60px'}}>회원명</th>
                    <th style={{width:'80px'}}>아이디</th>
                    <th style={{width:'150px'}}>주소</th>
                    <th style={{width:'100px'}}>가입일</th>
                    <th style={{width:'50px'}}>삭제</th>
                </tr>
                {
                    mlist.map((row,idx)=><MemberRowList key={idx} row={row} onDelete={deleteMember} idx={idx}/>)    //map함수를 이용하여 목록 출력
                }
            </table>
        </div>
    );
}

export default MemberList;