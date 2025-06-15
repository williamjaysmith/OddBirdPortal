import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex gap-1.2 items-center font-medium text-medium text-grey-600">
      <img
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        className="block w-9 aspect-square object-cover object-center rounded-full outline outline-2 outline-grey-100"
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
