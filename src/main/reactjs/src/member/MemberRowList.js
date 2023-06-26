import React from 'react';

function MemberRowList(props) {

    const {idx, row, onDelete} = props;

    return (
        <tr>
            <td>{idx+1}</td>
            <td>{row.myname}</td>
            <td>{row.myid}</td>
            <td>{row.myaddress}</td>
            <td>{row.gaipday}</td>
            <td>
                <button type='button' className='btn btn-sm btn-outline-danger' onClick={()=>{
                    const b = window.confirm("삭제?");  //확인창 띄우기
                    if(b){                             //확인을 누른 경우
                        onDelete(row.num)              //삭제함수 호출
                    }
                }}>삭제</button>
            </td>
        </tr>
    );
}

export default MemberRowList;