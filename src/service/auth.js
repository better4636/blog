import { tryLogin } from '../model/auth';

export async function login(id, pw) {
  if (await tryLogin(id, pw)) {
    return true;
  }
  return false;
}
