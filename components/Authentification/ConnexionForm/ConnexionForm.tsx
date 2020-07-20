import React, { FormEvent, useContext, useState } from 'react';
import { useLogin } from '../../../shared/api/user/login/login';

interface ConnexionFormProps {
}

const ConnexionForm: React.FC<ConnexionFormProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data, loading, errors, triggerQuery: triggerLogin } = useLogin({ email, password, autoTrigger: false });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    triggerLogin();
  }

  let loginDisplay;

  if (loading) {
    loginDisplay = <span>loading...</span>;
  } else if (errors && errors.message) {
    console.log('errors', errors);
    loginDisplay = <span>{errors.message}</span>
  } else if (data?.login?.user) {
    loginDisplay = <span>{data.login.user.username}</span>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="email"
               value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="password"
               value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button>Login</button>

      {loginDisplay}
    </form>
  );
}

export default ConnexionForm;
