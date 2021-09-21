import React, { useState } from 'react';
import axios from 'axios';
import {url} from '../utils/baseurl';
import {saveLocalStorage} from '../utils/localStorage';
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(true);
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const history = useHistory();

  const toggle = () => {
    setSignIn(!signIn);
  };


  const submitForm = async () => {
    if(user.username.length === 0 || user.password === 0) {
      return;
    }
    let res;
    console.log(user);
    try {
      if (signIn) {
        res = await axios.post(`${url}/user/login`, {
          username: user.username,
          password: user.password
        });
      } else {
        res = await axios.post(`${url}/user/register`, {
          username: user.username,
          password: user.password
        });
      }
      saveLocalStorage(res.data.username);
      history.push("/upload");
      
    } catch(err) {
      console.log(err);
    }
  };


  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l6 m8 offset-l3 offset-m2'>
          <div
            className='card'
            style={{ padding: '20px', paddingBottom: '30px' }}
          >
            <div className='row'>
              <div className='col s12'>
                <h4
                  className='center'
                  style={{ color: '#374EA1', fontWeight: 'bold' }}
                >
                  {signIn ? 'Sign In' : 'Sign Up'}
                </h4>
              </div>
            </div>
            <div className='row'>
              <form className='col s12 center'>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      // placeholder='JohnDoe'
                      id='Username'
                      type='text'
                      className='validate'
                      value={user.username}
                      onChange={e => setUser({...user, username: e.target.value})}
                    />
                    <label htmlFor='Username'>Username</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      // placeholder='qwerty123'
                      id='Password'
                      type='password'
                      className='validate'
                      value={user.password}
                      onChange={e => setUser({...user, password: e.target.value})}
                    />
                    <label htmlFor='Password'>Password</label>
                  </div>
                </div>
              </form>
            </div>
            <div className='row center'>
              <button
                className='btn waves-effect waves-light'
                style={{ backgroundColor: '#0DAF55' }}
                type='submit'
                name='submit'
                onClick={submitForm}
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </div>
            <div
              className='row right'
              style={{
                color: '#374EA1',
                paddingBottom: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={toggle}
            >
              {signIn ? 'New User?' : 'Back to login?'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
