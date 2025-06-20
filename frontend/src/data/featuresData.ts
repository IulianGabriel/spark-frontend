import {
  HiOutlineUsers,
  HiOutlineCamera,
  HiOutlineHeart,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUser,
  HiOutlineBolt,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: HiOutlineUsers,
    title: "Connect & Follow",
    description:
      "Add friends and follow interesting people to build your social network effortlessly.",
  },
  {
    id: 2,
    icon: HiOutlineCamera,
    title: "Share Moments",
    description:
      "Post your thoughts, photos, and experiences with a beautiful, distraction-free interface.",
  },
  {
    id: 3,
    icon: HiOutlineHeart,
    title: "Express Yourself",
    description:
      "Like, react, and engage with posts that resonate with you in meaningful ways.",
  },
  {
    id: 4,
    icon: HiOutlineChatBubbleLeftRight,
    title: "Private Chats",
    description:
      "Have intimate conversations with friends through secure, private messaging.",
  },
  {
    id: 5,
    icon: HiOutlineUser,
    title: "Your Profile",
    description:
      "Customize your profile with photos and information that represents who you are.",
  },
  {
    id: 6,
    icon: HiOutlineBolt,
    title: "Minimalist Design",
    description:
      "Focus on what matters most with our clean, distraction-free interface.",
  },
];

export { featuresData, type Feature };
