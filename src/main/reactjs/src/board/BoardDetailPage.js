import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

function BoardDetailPage(props) {
    const [dto,setDto] = useState({});                  //dto는 객체이므로 {}로 초기화
    const {num, currentPage} = useParams();                          //파라미터 num을 가져옴

    const navi=useNavigate();                           //네비게이터 선언

    const photourl = process.env.REACT_APP_BOARDURL;    //이미지 경로

    const selectData=()=>{                              //글번호에 해당하는 데이터 가져오기
        const url=`/board/detail?num=${num}`            //url에 num을 붙여서 보냄
        Axios.get(url)                                  //get방식으로 보냄
        .then(res=>{                                    //받은 데이터를 res에 저장
            setDto(res.data);                           //dto에 res.data를 저장
        })
    }
    
    //세션스토리지에서 로그인 정보 가져오기
    const myid = sessionStorage.myid;   
    const loginok = sessionStorage.loginok;
    
    // 아이디 마스킹 처리
    const maskedId = dto.myid?.slice(0, 3) + "*".repeat(3);

    useEffect(()=>{                                     //컴포넌트가 로드되면 실행
        selectData();                                   //글번호에 해당하는 데이터 가져오기
    },[]);                                              //num이 변경되면 실행


    return (
        <div style={{marginLeft:'30px'}}>
           <h5><b>{dto.subject}</b></h5>
           <h6>
                <span>작성자 : {dto.myname}({maskedId})</span>
                <span style={{float:'right', color:'gray'}}>
                    조회 &nbsp;&nbsp; {dto.readcount}<br></br>
                    {dto.writeday}
                </span>
           </h6>
           {
            dto.photo==null?'':
            <img alt='' src={`${photourl}${dto.photo}`}
            style={{border:'1px solid gray', maxWidth:'500px'}}/>
           }
           <br/><br/>
           <pre>{dto.content}</pre>
           <br/>
           <div>
                <button type='button' className='btn btn-outline-danger' style={{width:'80px', marginRight:'10px'}} onClick={()=>navi("/board/form")}>글쓰기</button>
                
                <button type='button' className='btn btn-outline-warning' style={{width:'80px', marginRight:'10px'}}
                onClick={()=>navi("/board/list/1")}>목록</button>

                {
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-success' style={{width:'80px', marginRight:'10px'}}onClick={()=>{
                        const url = `/board/delete?num=${dto.num}`;
                        Axios.delete(url)
                        .then(res=>{
                            //목록으로 이동
                            navi(`/board/list/${currentPage}`);
                        })
                    }}>삭제</button>:''
                }

                {
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-info' style={{width:'80px', marginRight:'10px'}}onClick={()=>{

                    }}>수정</button>:''
                }
           </div>
        </div>
    );
}

export default BoardDetailPage;