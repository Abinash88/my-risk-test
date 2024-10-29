const User = ({ email }: { email?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/images/profile-image.jpeg"
        alt="profile-image"
        className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
      />
      <div className="hidden md:flex gap-1  items-center">
        <div className="">
          <h3 className="text-[#000080] text-sm font-[600]">Uther Martin</h3>
          <p className="md:text-xs text-[10px] text-gray-600">{email}</p>
        </div>
        <img src="/images/badge.png" alt="badge" />
      </div>
    </div>
  );
};

export default User;
