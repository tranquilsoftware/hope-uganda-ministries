
/// BRAND
export const BRAND_NAME = 'Hope Uganda Ministries';
// https://68789596b43b1.site123.me/
export const OWNER_NAME = 'Johnmary Johnwest Mweseezi';
export const BRIEF_DESCRIPTION = 'Our church ministry is dedicated to fostering a strong sense of community through faith, worship, and outreach. We aim to build bridges, offer support, and share God’s word with love and compassion. Join us to experience spiritual growth and a sense of belonging as we journey together in faith.';
export const COOL_PITCH = 'A non-profit ministry of hope, teaching, feeding the hungry, thirsty orphans with food and spiritual food';
export const GOOGLE_MAPS_PLACE = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.059066888363!2d31.746066805010432!3d-0.31666647953388316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d78dd4e023e9d7%3A0x9784209fefab37af!2sNyendo%2C%20Uganda!5e0!3m2!1sen!2sau!4v1753081932887!5m2!1sen!2sau';

// TODO:
// logo - favicon
// - where our money is going
// - where our ministry is located.
// - what we do
// - youtube channel 


export const LOGO = 'assets/images/logo.png'; // 2048x2048 see views: http://clipart-library.com/img/910326.png
export const SMALL_LOGO = 'assets/images/small-logo.png';



// IMAGES
export const IMG_1 = 'assets/images/0.jpg';
export const IMG_2 = 'assets/images/1.jpg';
export const IMG_3 = 'assets/images/2.jpg';
export const IMG_4 = 'assets/images/3.jpg';
export const IMG_5 = 'assets/images/4.jpg';
export const IMG_6 = 'assets/images/5.jpg';

// Team Members
export const TEAM_JOHNWEST = 'assets/images/johnwest.jpg';
export const TEAM_NABUUSO = 'assets/images/nabuuso.jpg';
// export const TEAM_RICHARD = 'assets/images/richard.jpg';
export const TEAM_RICHARD = IMG_1;

// Team Members
// RICHARD_NUMBER +256 752 821 990
// ROSE_NUMBER +256 758 384 165

// Keep old exports for backward compatibility
export const OWNER_JOHNWEST = TEAM_JOHNWEST;
export const OWNER_ROSE = TEAM_NABUUSO;
// export const OWNER_RICHARD = TEAM_RICHARD;


export const HERO_IMAGES = [
  IMG_1,
  IMG_2,
  IMG_3,
  IMG_4,
  IMG_6,
  OWNER_JOHNWEST
];

/// SEE LoadingScreen.tsx (for preloading images.)
export const LOAD_IMAGES = [
  LOGO,
  SMALL_LOGO,

  OWNER_JOHNWEST,
  OWNER_ROSE,

  ...HERO_IMAGES
];

// contact details
export const AVAILABILITY = 'Every day'; // used in footer
export const CONTACT_PHONE = '+256-788 603 550'; // used in footer

export const CONTACT_EMAIL = 'hopeoforphans@gmail.com'; // used in footer
export const CONTACT_JOHNMARY_EMAIL = 'johnmary.moller@gmail.com';
export const CONTACT_RICHARD_EMAIL = 'kayembarichardk@gmail.com';

export const INSTAGRAM_USERNAME = 'johnmary_johnwest';
export const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
export const FACEBOOK_USERNAME = 'hopeoforphans';
export const FACEBOOK_LINK = `https://www.facebook.com/${FACEBOOK_USERNAME}`;
export const PAYPAL_LINK = 'https://www.paypal.com/paypalme/hopeoforphans';

// todo import
export const YOUTUBE_LINK = 'https://www.youtube.com/@johnmary8';

// Western Union Details TODO
export const WESTERN_UNION_INFO = {
  recipient: 'Johnmary John West Mwesezi',
  email: CONTACT_JOHNMARY_EMAIL,
  address: 'Nyendo',
  city: 'Masaka',
  country: 'Uganda',
  phone: '+256788603550',
  contactAfterSending: false
};

// Ministry Statistics
export const MINISTRY_START_DATE = '2018-01-01';
export const CHILDREN_FED_DAILY = 1080;

export const getDaysOperating = () => {
  const ministryStartDate = new Date(MINISTRY_START_DATE);
  return Math.floor((Date.now() - ministryStartDate.getTime()) / (1000 * 60 * 60 * 24));
};

export const getTotalMealsServed = () => {
  return CHILDREN_FED_DAILY * getDaysOperating() / 100;
};

// href links
export const HREF_HOME_LINK = 'https://tranquilsoftware.github.io/hope-uganda-ministries/'; // todo change in prod
export const TRANQUILSOFTWARE_LINK = 'https://tranquilsoftware.com/';
export const HREF_LINK_DONATE = '/donate';


