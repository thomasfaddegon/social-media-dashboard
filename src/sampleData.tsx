import facebookIcon from "../public/images/icon-facebook.svg";
import twitterIcon from "../public/images/icon-twitter.svg";
import instagramIcon from "../public/images/icon-instagram.svg";
import youtubeIcon from "../public/images/icon-youtube.svg";
import "../types.d.ts";

export const followerData: FollowerData = [
  {
    platform: "facebook",
    icon: facebookIcon,
    handle: "@nathanf",
    value: 1987,
    metric: "followers",
    change: 12,
  },
  {
    platform: "twitter",
    icon: twitterIcon,
    handle: "@nathanf",
    value: 1044,
    metric: "followers",
    change: 99,
  },
  {
    platform: "instagram",
    icon: instagramIcon,
    handle: "@realnathanf",
    value: 11000,
    metric: "followers",
    change: 1099,
  },
  {
    platform: "youtube",
    icon: youtubeIcon,
    handle: "Nathan F.",
    value: 8239,
    metric: "subscribers",
    change: -144,
  },
];

export const metricData: MetricData = [
  {
    platform: "facebook",
    metric: "Page Views",
    icon: facebookIcon,
    value: 87,
    change: 3,
  },
  {
    platform: "facebook",
    metric: "Likes",
    icon: facebookIcon,
    value: 52,
    change: -2,
  },
  {
    platform: "instagram",
    metric: "Profile Views",
    icon: instagramIcon,
    value: 52000,
    change: 1375,
  },
  {
    platform: "instagram",
    metric: "Likes",
    icon: instagramIcon,
    value: 5462,
    change: 2257,
  },
  {
    platform: "twitter",
    metric: "Retweets",
    icon: twitterIcon,
    value: 117,
    change: 303,
  },
  {
    platform: "twitter",
    metric: "Likes",
    icon: twitterIcon,
    value: 507,
    change: 553,
  },
  {
    platform: "youtube",
    metric: "Total Views",
    icon: youtubeIcon,
    value: 1407,
    change: -12,
  },
  {
    platform: "youtube",
    metric: "Likes",
    icon: youtubeIcon,
    value: 107,
    change: -19,
  },
];
