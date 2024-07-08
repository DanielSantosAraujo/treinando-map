import React from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom';

import { CgProfile } from 'react-icons/cg';
import { MdMarkunreadMailbox, MdOutlineCancel } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { CiCircleQuestion } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { FaEye, FaCheck, FaArrowRight } from 'react-icons/fa';

const Cadastro = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('#e5e7eb');

  const [icon, setIcon] = React.useState(CiCircleQuestion);

  function handleWidth(event) {
    setName(event.target.value);
    if (name.length > 4) {
      setColor('#22c55e');
      setIcon(FiCheckCircle);
    }
    if (name.length < 4) {
      setColor('#ef4444');
      setIcon(MdOutlineCancel);
    }
    if (name.length === '0') {
      setColor('#ef4444');
      setIcon(MdOutlineCancel);
    }
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Sign up</h1>
          <span>Secure your Communication with Easymail</span>

          <form action="#" onSubmit={(e) => e.preventDefault}>
            <div className="input" style={{ borderBottomColor: color }}>
              <CgProfile id="icon-input" />
              <input
                type="text"
                placeholder="Digite seu nome"
                id="name"
                onChange={handleWidth}
              />
              <div style={{ color: color }}>{icon}</div>
            </div>
            <div className="input">
              <MdMarkunreadMailbox id="icon-input" />
              <input type="text" placeholder="Digite seu email" />
              <CiCircleQuestion />
            </div>
            <div className="input">
              <RiLockPasswordFill id="icon-input" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
              />
              <button onClick={(e) => setShowPassword(!showPassword)}>
                <FaEye />
              </button>
            </div>
            <div className="conditions-password">
              <ul>
                <li>
                  <GoDotFill /> 8 caracteres
                </li>
                <li>
                  <GoDotFill /> Contenha numeros (0-9)
                </li>
                <li>
                  <GoDotFill /> Minúsculas (a-z) e Maiúsculas (A-Z)
                </li>
              </ul>
            </div>
            <div className="input">
              <RiLockPasswordFill id="icon-input" />
              <input type="text" placeholder="Digite novamente sua senha" />
            </div>
            <a className="button-submit">
              Cadastro{' '}
              <span>
                <FaArrowRight />
              </span>
            </a>
            <p className="back">
              Already account?{' '}
              <Link className="backLogin" to="/">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
