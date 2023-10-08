import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { bgColors } from "../utils/styles";
import { getAllUsers, getAllSongs, getAllAlbums, getAllArtists } from "../api";

export const DashboardCard = ({ icon, name, count }) => {
  const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];

  return (
    <div
      style={{ background: `${bg_color}` }}
      className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}
    >
      {icon}
      <p className="text-xl text-textColor font-semibold">{name}</p>
      <p className="text-sm text-textColor">{count}</p>
    </div>
  );
};

const DashBoardHome = () => {
  const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] =
    useStateValue();
  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        });
      });
    }

    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song,
        });
      });
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMNS,
          allAlbums: data.album,
        });
      });
    }

    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist,
        });
      });
    }
  }, []);
  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">
      <DashboardCard
        icon={<FaUsers className="text-3xl text-textColor" />}
        name={"User"}
        count={allUsers?.length > 0 ? allUsers?.length : 0}
      />

      <DashboardCard
        icon={<GiLoveSong className="text-3xl text-textColor" />}
        name={"Song"}
        count={allSongs?.length > 0 ? allSongs?.length : 0}
      />

      <DashboardCard
        icon={<GiMusicalNotes className="text-3xl text-textColor" />}
        name={"Album"}
        count={allAlbums?.length > 0 ? allAlbums?.length : 0}
      />

      <DashboardCard
        icon={<RiUserStarFill className="text-3xl text-textColor" />}
        name={"Artist"}
        count={allArtists?.length > 0 ? allArtists?.length : 0}
      />
    </div>
  );
};

export default DashBoardHome;
