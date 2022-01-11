import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>App Test initiation.</h1>
      <nav
        style={{borderBottom: "solid 1px", paddingBottom: '1rem'}}
      >
      </nav>
    </div>
  );
}
/*
 * Link 컴포넌트는 react-router-dom이 나중에 <a> 태그로 렌더링 해준다. 클릭하여 다른 페이지에 접근할 수 있도록 하는 역할임
 * Link = a / to = href
 * to에 들어가는 경로는 해당 컴포넌트의 parentURL + 경로로 적용됨
 * ".." 사용가능!
 * 
 * Nested Route 🔽
 * route도 중첩하고 <Outlet/>을 사용하면 Outlet에 중첩한 경로의 요청 내용을 가져옴
 */