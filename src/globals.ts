
/// BRAND
export const BRAND_NAME = 'Hope Uganda Ministries';
// https://68789596b43b1.site123.me/
export const OWNER_NAME = 'Johnmary Johnwest Mweseezi';
export const BRIEF_DESCRIPTION = 'Our church ministry is dedicated to fostering a strong sense of community through faith, worship, and outreach. We aim to build bridges, offer support, and share God’s word with love and compassion. Join us to experience spiritual growth and a sense of belonging as we journey together in faith.';
export const COOL_PITCH = 'A non-profit ministry of hope, teaching, feeding the hungry, thirsty orphans with food and spiritual food';
export const GOOGLE_MAPS_PLACE = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.059066888363!2d31.746066805010432!3d-0.31666647953388316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d78dd4e023e9d7%3A0x9784209fefab37af!2sNyendo%2C%20Uganda!5e0!3m2!1sen!2sau!4v1753081932887!5m2!1sen!2sau';

// TODO:
// logo - favicon
// - what we do (testimony)
// - youtube channel 
// -donors section (feature johnwest's first donor)


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
export const TEAM_JOHNWEST = 'assets/images/johnwest-1.jpg';
export const TEAM_NABUUSO = 'assets/images/nabuuso.jpg';
export const TEAM_RICHARD = 'assets/images/richard.jpg';

// Team Members
// RICHARD_NUMBER +256 752 821 990
// ROSE_NUMBER +256 758 384 165

// Keep old exports for backward compatibility
export const OWNER_JOHNWEST = TEAM_JOHNWEST;
export const OWNER_ROSE = TEAM_NABUUSO;
export const OWNER_RICHARD = TEAM_RICHARD;


export const HERO_IMAGES = [
  IMG_1,
  IMG_2,
  IMG_3,
  // IMG_4,
  IMG_6,
  // OWNER_JOHNWEST
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

export const INSTAGRAM_USERNAME = 'hopeugandaministries';
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




// PERSONAL TESTIMONY
// BY JOHN MARY.
// I was born and raised in Uganda , where I witnessed firsthand the struggles and hardships faced by many children and families. Growing up, I felt a deep sense of purpose to serve and make a difference in my community . Though God’s guidance, I found my calling in serving  vulnerable children and sharing the love of Christ.
// As I navigated life’s challenges, I experienced God’s unwavering presence and provision . His love transformed my heart , and I became  passionate about spreading hope and joy to those in need . Today , lam humbled to lead hope Uganda ministries , dedicated to empowering children and communication through Christian values and holistic support.

// When I was young I did not attend church because I was homeless and an orphan who was constantly moving from one place to another. I did not have a place to stay and I also had financial problems. But I had a Gideon’s international Bible and another publication which had the book of Revelation written in it. I used to read those two books and I loved reading them , but I really didn’t understand well what I was reading. Because of hunger and being homeless it crippled my mind.






// STATEMENT OF FAITH
// BY JOHNMARY.

// I decided to give my life to Jesus Christ when I was going through a very difficult point in my life . I did not have a job. I had lost all family members and I couldn't withstand the pain. I thought before I completely give up in life let me try God . Because Jesus saves from sin, He has power over everything , He will make my life better I thought. 

// About this time, I went to Namirembe fishing site at the age of nine years. It was here that I learned about repentance and the cross. Repentance to me means turn from sin and return to God. The cross is a  symbol of death and hope all at the same time . Jesus died  and rose from the dead. Like wise , our old nature must die so that we can live as a brand-new creation in Christ . it was a fundamental change in my life. Jesus saves me by His grace . He died and rose again just to pay the price for my sins.

// I was baptized by Masaka Church at Nabugabo landing Site in 2018 became a member of the church . I also got an opportunity to serve in the church each week. When I got to know Jesus as my savior it affected my daily life. I found that I started hating some of the things I used to do. I became more conscious of my behavior . knowing God and His Holiness has profoundly deepened my love and thanks and appreciation of what Jesus did for us! It  has also helped me to feat Him and pursue righteousness. I compare my life before and after I got saved, and I can truly say that after I received Christ as my savior I have seen favor after favor. To call God my father gives me joy, and knowing I can relate with Him is so comforting.

// I believe in  the lord Jesus Christ , the son of god , who died for our sins and rose again on third day . I trust in his power to transform lives and communities . As a follower of Christ , lam committed to sharing his love and teachings with others, particularly vulnerable children.
// my Faith is rooted in the Bible, which guides my actions and decisions. lam driven by compassion , empathy, and God’s love and mercy . though hope Uganda  ministries , lam to demonstrate Christ’s love in practical ways , bringing  hope , healing , and transformation to those we serve.
// I believe in the importance of partnerships and collaboration , working together with like-minded individuals and organizations to achieve our mission. I’m grateful for the opportunity to partner with Hope of the world ministry who share our vision and values. together, let’s bring hope and transformation to Uganda’s children and communities, shining the light of Christ’s love.(john 8:12).
