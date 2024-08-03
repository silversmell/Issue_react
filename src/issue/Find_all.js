import '../App.css';

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../components/GlobalContext';

import {getIP} from '../components/Tool';

import UpdateImg from './images/update.png'; // 수정
import DeleteImg from './images/delete.png'; // 삭제

// 함수의 첫자는 대문자를 사용, 미사용시 에러 발생
function Issue_Find_all() {
  const { sw } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  /*
  [
    {
        "issueno": 2,
        "title": "시스템 접속자 증가",
        "content": "시스템 장애 조치 완료",
        "cnt": 0,
        "rdate": "2024-06-17 04:31:16"
    },
    {
        "issueno": 3,
        "title": "사용자 로그인 오류 발생 증가",
        "content": "시스템 장애 조치중",
        "cnt": 0,
        "rdate": "2024-06-17 04:31:16"
    }
]
  */

  useEffect(() => {
    // http://localhost:9100/issue/find_all_by_order_by_rdate_desc
    fetch(`http://${getIP()}/issue/find_all_by_order_by_rdate_desc`, { // Spring Boot JPA
      method: 'GET'
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({
      //   id: id,
      //   passwd: passwd
      // })
    })
    .then(result => result.json())
    .then(result => {
      // for (let item of result) { // Spring -> Js
      //   console.log('-> ', item.issueno, item.title, item.content, item.cnt, item.rdate);
      // }
      setData(result);
      // console.log("-> data[0]['issueno']:", data[0]['issueno'])
    })
    .catch(err => console.error(err))
  }, []); // []: 최초 1회만 렌더링 실행

  return (
    <>
      <h5>
        Resort 긴급 공지사항
        {sw === true ? (
           <span> [<Link to="/issue/create">등록</Link>]</span>
         ) : (
           <span></span>
        )}
      </h5>

      <table className='table_center table table-hover'>
        <tbody>
        {
          // item.issueno, item.title, item.content, item.cnt, item.rdate
          // data가 null이 아닐때만 map 함수 실행
          // data.map((item, index) => ...: item은 data 배열에 저장된 객체가 할당됨
          // index: 0~    
          data && data.map((item, index) =>
            <tr key={index}>
              <td className="table_underline" style={{textAlign: 'left', height: '30px'}}>
                <Link to={`/issue/${item.issueno}`}>
                  {item.rdate} {item.title}
                </Link>
                <span style={{fontSize: '0.8em', marginRight: '10px'}}>({item.cnt})</span>
                {sw === true ? (
                  <>
                    <Link to={`/issue/update/${item.issueno}`}><img src={UpdateImg} title='수정' style={{width: '14px', marginRight: '5px'}} /></Link>
                    <Link to={`/issue/delete/${item.issueno}`}><img src={DeleteImg} title='삭제' style={{width: '14px'}} /></Link>
                  </>
                ) : (
                  <span></span>
                )}
              </td>
            </tr>)
        }
        </tbody>
      </table>
    </>
  ) 
}

export default Issue_Find_all;


