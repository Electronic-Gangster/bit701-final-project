import React, { useEffect, useState } from 'react';
import '../App.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import BoardRowList from './BoardRowList';

function BoardList(props) {

    const [data,setData] = useState({});

    const {currentPage} = useParams();
    const navi = useNavigate();

    //페이징처리에 필요한 데이터 가져오기
    const list=()=>{
        const url = "/board/list?currentPage="+(currentPage==null?1:currentPage);
        Axios.get(url)
        .then(res=>{
            setData(res.data);
        })
    }

    // eslint-disable-next-line
    useEffect(()=>{                 //컴포넌트가 로드되면 실행
        list();                     //목록 가져오기
    },[currentPage]);               //currentPage가 변경되면 실행

    //글쓰기 버튼 이벤트
    const onWriteButtonEvent = () => {
        if(sessionStorage.loginok==null){
            alert('로그인이 필요합니다.');
            navi('/login');
        }else{
            navi('/board/form');
        }
    }

    return (
        <div style={{marginLeft:'30px'}}>
            <button type='button' className='btn btn-outline-success'
            style={{width:'100px', marginLeft:'100px'}} onClick={onWriteButtonEvent}>글쓰기</button>
            
            <h5><b>총 {data.totalCount}개의 글이 있습니다.</b></h5>
            
            <table className='table table-boardred' style={{width:'600px', textAlign:'center'}}>
                <thead>
                    <tr style={{backgroundColor:"#dfd"}}>
                        <th style={{width:'40px'}}>번호</th>
                        <th style={{width:'100px'}}>제목</th>
                        <th style={{width:'70px'}}>작성자</th>
                        <th style={{width:'50px'}}>작성일</th>
                        <th style={{width:'50px'}}>조회</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.list &&
                        data.list.map((row,idx)=>
                        <BoardRowList key={idx} row={row} no={data.no} idx={idx} currentPage={currentPage}/>)
                    }
                </tbody>
            </table>
            <div style={{width:'800px',textAlign:'center'}}>
                {
                    // 이전 버튼 처리
                    data.startPage > 1?
                    <NavLink to={`/board/list/${data.startPage-1}`} style={{textDecoration:'none', cursor:'pointer'}}>이전</NavLink>:''
                }

                {/* 페이징처리 */}
                {
                    data.parr &&
                    data.parr.map((pno,i)=>
                        <NavLink to={`/board/list/${pno}`} style={{textDecoration:'none'}}>
                            <b style={{marginRight:'10px', color:pno===Number(currentPage==null?1:currentPage)?'red':'black'}}>{pno}</b>
                        </NavLink>
                    )
                }
                {
                    //다음 버튼 처리
                    data.endPage < data.totalPage?
                    <NavLink to={`/board/list/${data.endPage+1}`} style={{textDecoration:'none', cursor:'pointer'}}>다음</NavLink>:''
                }
                
            </div>
        </div>
    );
}

export default BoardList;