/**
 * The `username` helper displays a user's username in a <span class="username">
 * tag. If the user doesn't exist, the username will be displayed as [deleted].
 *
 * @param {User} user
 * @return {Object}
 */
export default function username(user) {
  const name = (user && user.username()) || '[deleted]';

  return <span className="username">{name}</span>;
}
