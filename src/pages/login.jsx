import { message } from 'antd';
import { BasicLayout } from '../layout';
import { LoginForm } from '../component';
import { login } from '../service/auth';

export default function Login({ history }) {
  return (
    <BasicLayout
      content={
        <LoginForm
          onSubmit={async (val) => {
            const { username, password } = val;
            if (await login(username, password)) {
              message.success('로그인 성공');
              history.push('/posting');
            }
          }}
        />
      }
    />
  );
}
