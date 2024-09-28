  import React from "react";

  // OutboundUI 컴포넌트는 검색 조건 입력 UI와 데이터 리스트를 화면에 렌더링합니다.
  export default function OutboundUI({
    data,
    status,
    setStatus,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    arriveName,
    setArriveName,
    item,
    setItem,
    outboundIds,
    setOutboundIds,
    fetchData,
    approveOutboundRequests,
    rejectOutboundRequests,
    handleCheckboxChange
  }) {
    return (
      <div>
        <h2>출고 요청 리스트</h2>
        {/* 검색 조건 입력 UI */}
        <div>
          <input
            type="text"
            placeholder="상태"
            value={status}
            //값이 변경될 때 호출되는 이벤트 핸들러
            //onChange : 사용자가 입력 필드 내용을 변경할 때 발생하는 이벤트
            //(e) : 이벤트 객체
            //e.target.value : 입력 필드의 현재값
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="수신지"
            value={arriveName}
            onChange={(e) => setArriveName(e.target.value)}
          />
          <input
            type="text"
            placeholder="품목"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={fetchData}>검색</button>
        </div>

        {/* 데이터 리스트 렌더링 */}
        {/* data와 data.data가 존재하고, data.data가 배열인지 확인 */}
        {/* data : data가 null이나 undefined인지 확인 */}
        {/* Array.isArray(data.data) : .map() 메서드를 사용하기 위해서 data.data가 배열인지 확인 */}
        {/* data.data.length : 길이가 0이면 출력할 데이터가 없는 것이므로 false를 반환 */}
        {data && Array.isArray(data.data) && data.data.length > 0 ? (
          <ul>
            {data.data.map((item, index) => (
              <li key={index}>
              
                {/* 체크박스와 출고 ID 표시 */}
                <input
                  type="checkbox"
                  checked={outboundIds.includes(item.outboundId)}
                  onChange={() => handleCheckboxChange(item.outboundId)}
                />

                <p>출고 ID: {item.outboundId}</p>
                <p>진행상태: {item.status}</p>
                <p>출고 창고명: {item.departStorageName}</p>
                <p>도착지 이름: {item.arriveName}</p>
                <p>상품 목록: {item.products}</p>
                <p>요청 날짜: {item.requestDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>데이터가 없습니다.</p> // 데이터를 찾을 수 없을 때 출력
        )}

        
        {/* 승인 버튼 추가 */}
          <button onClick={approveOutboundRequests}>승인</button>
          <button onClick={rejectOutboundRequests}>반려</button>
      </div>
    );
  }











// import * as S from "./requsestoutbound.styles";
// import { Divider, Tabs ,Table } from 'antd';

// export default function OutboundUI() {
//   const onChange = (key) => {
//     console.log(key);
//   };
  
//   const items = [
//     {
//       key: '1',
//       label: '사원목록',
//     },
//     {
//       key: '2',
//       label: '비사원목록',
//     }
//   ];
  
//   const columns = [
//     {
//       title: '이름',
//       dataIndex: 'name',
//       // render: (text) => <a>{text}</a>,
//     },
//     {
//       title: '사원번호',
//       dataIndex: 'userId',
//     },
//     {
//       title: '이메일',
//       dataIndex: 'email',
//     },
//     {
//       title: '근무처',
//       dataIndex: 'address',
//     },
//     {
//       title: '직함',
//       dataIndex: 'role',
//     },
//   ];

//   const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sydney No. 1 Lake Park',
//     },
//     {
//       key: '4',
//       name: 'Disabled User',
//       age: 99,
//       address: 'Sydney No. 1 Lake Park',
//     },
//   ];
  
//   // rowSelection object indicates the need for row selection
//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === 'Disabled User',
//       // Column configuration not to be checked
//       name: record.name,
//     }),
//   };
  
//   // 이 부분이 추가되었습니다.
//   return (
//     <div>
//       <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
//       <Divider />
//       <Table
//         rowSelection={{
//           type: 'checkbox',
//           ...rowSelection,
//         }}
//         columns={columns}
//         dataSource={data}
//       />
//     </div>
//   );
// }
