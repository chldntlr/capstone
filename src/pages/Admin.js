import React, { useState, useEffect } from 'react';

function Admin() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // 출석 데이터를 서버로부터 받아오는 로직 (예시로 임시 데이터를 사용)
    const fetchData = [
      { id: 1, name: '홍길동', time: '9:00 AM', status: '출석' },
      { id: 2, name: '김철수', time: '9:15 AM', status: '지각' },
    ];
    setAttendanceData(fetchData);
  }, []);

  return (
    <div>
      <h2>출석체크 관리자 페이지</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>출석 시간</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.time}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
