import HOME_URL from "../assets/Icons/Sidebar-icons/home.svg";
import SHORTS_URL from "../assets/Icons/Sidebar-icons/originals.svg";
import SUBS_URL from "../assets/Icons/Sidebar-icons/subscriptions.svg";
import LIBRARY_URL from "../assets/Icons/Sidebar-icons/library.svg";
import EXPLORE_URL from "../assets/Icons/Sidebar-icons/explore.svg";
import MUSIC_URL from "../assets/Icons/Sidebar-icons/youtube-music.svg";
import ARROW_URL from "../assets/Icons/Sidebar-icons/arrow.svg";
import CHANNEL_1 from "../assets/Channel-Pictures/channel-1.jpeg";
import CHANNEL_2 from "../assets/Channel-Pictures/channel-2.jpeg";
import CHANNEL_3 from "../assets/Channel-Pictures/channel-3.jpeg";
import CHANNEL_4 from "../assets/Channel-Pictures/channel-4.jpeg";
import CHANNEL_5 from "../assets/Channel-Pictures/channel-5.jpeg";
import CHANNEL_6 from "../assets/Channel-Pictures/channel-6.jpeg";

export const SM_SIDEBAR_LINKS = [
  { icon: HOME_URL, title: "Home" },
  { icon: SHORTS_URL, title: "Shorts" },
  { icon: SUBS_URL, title: "Subscriptions" },
  { icon: LIBRARY_URL, title: "Library" },
];

export const LG_SIDEBAR_LINKS = [
  { icon: LIBRARY_URL, title: "Library" },
  { icon: EXPLORE_URL, title: "History" },
  { icon: MUSIC_URL, title: "Music" },
  { icon: LIBRARY_URL, title: "Liked Videos" },
  { icon: ARROW_URL, title: "Show More" },
];

const subscription = [
  {
    channelIcon: CHANNEL_1,
    channelName: "Marques Brownlee",
  },
  {
    channelIcon: CHANNEL_2,
    channelName: "Random Guy",
  },
  {
    channelIcon: CHANNEL_3,
    channelName: "Pokimane",
  },
  {
    channelIcon: CHANNEL_4,
    channelName: "Velocity",
  },
  {
    channelIcon: CHANNEL_5,
    channelName: "The Net Ninja",
  },
  {
    channelIcon: CHANNEL_6,
    channelName: "Mr. Beast",
  },
];

export const SUBSCRIPTION_LIST = [...subscription,...subscription];