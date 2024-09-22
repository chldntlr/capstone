import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username, password });
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            placeholder=" "
            value={username}
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(username.length > 0)}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={isUsernameFocused || username ? 'focused' : ''} htmlFor="username">아이디</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(password.length > 0)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={isPasswordFocused || password ? 'focused' : ''} htmlFor="password">비밀번호</label>
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
      <p>
        아직 회원이 아니신가요? <a href="/signup">회원가입하기</a>
      </p>
    </div>
  );
}

export default Login;
