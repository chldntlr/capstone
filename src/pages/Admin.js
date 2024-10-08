import React, { useState, useEffect } from 'react';
import './Admin.css';

function Admin() {
  // 가상의 수업 목록과 출석 데이터를 미리 설정
  const courses = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0].id); // 기본 선택된 수업
  const [attendanceData, setAttendanceData] = useState([]);

  // 가상의 수업별 출석 데이터 (실제 백엔드 연동 시 서버에서 가져옴)
  const attendanceDatabase = {
    1: [
      { id: 1, name: '홍길동', time: '09:00' },
      { id: 2, name: '이몽룡', time: '09:05' },
    ],
    2: [
      { id: 3, name: '성춘향', time: '09:10' },
      { id: 4, name: '임꺽정', time: '09:15' },
    ],
    3: [
      { id: 5, name: '장길산', time: '09:20' },
      { id: 6, name: '변학도', time: '09:25' },
    ],
  };

  // 드롭다운에서 선택된 수업의 출석 정보를 업데이트하는 함수
  useEffect(() => {
    setAttendanceData(attendanceDatabase[selectedCourse]);
  }, [selectedCourse]);

  return (
    <div className="admin-container">
      <h2>출석 체크 관리</h2>

      {/* 수업 선택 드롭다운 */}
      <div className="course-select-container">
        <label htmlFor="course-select">수업 선택: </label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(Number(e.target.value))} // 선택된 수업 변경
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* 선택된 수업의 출석 정보 테이블 */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
