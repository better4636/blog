export async function tryLogin(id, pw) {
  if (id === 'admin' && pw === '1111') {
    return true;
  }

  return false;
}
