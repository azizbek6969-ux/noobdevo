  import { MdEdit } from "react-icons/md";

  export default function ProfileCard({ profileData, onEdit }) {
    return (
      <div className="bg-white w-[340px] p-1 h-[294px] rounded-xl">
        <div className="bg-[#BFC9D9] rounded-lg h-[106px]">
          <div className="flex items-center justify-between mr-2">
            <div className="w-[92px] rounded-full border border-[5px] mt-12 z-10 ml-3 bg-gray-500">
              <img src="./Avatar.png" alt="Profile Avatar" />
            </div>
            <button
              className="bg-[#006FEE] flex items-center p-2 rounded-lg gap-2 text-white -mt-6"
              onClick={onEdit}
            >
              <MdEdit /> Edit Profile
            </button>
          </div>
        </div>
        <div className="p-4 mt-3">
          <h2 className="font-bold text-[18px]">{profileData.fullName}</h2>
          <p className="bg-[#338EF7] w-12 rounded-md text-center">{profileData.title}</p>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <p>Telegram:</p>
            <p>Phone:</p>
          </div>
          <div className="font-bold text-[#006FEE]">
            <p>{profileData.telegram}</p>
            <p>{profileData.phone}</p>
          </div>
        </div>
      </div>
    );
  }
