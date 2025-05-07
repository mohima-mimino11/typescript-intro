type Role = 'admin' | 'user' | 'guest';
const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'guest':
      return 'You can do nothing';
    default:
      // never reach here util we add a new role
      const _unreachable: never = role;
      throw new Error(`Invalid role: ${_unreachable}`);
  }
};

console.log(authorize('admin'));
console.log(authorize('user'));
console.log(authorize('guest'));
// console.log(authorize('seller'));


