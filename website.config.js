export const personalInfo = {
  name: 'Congcong Zhu',
  profilePicture: '/profile.jpg', //optional
  role: 'Postdoctor',
  university: 'USTC SCAI Lab',
  universityWebsite: 'https://sz.ustc.edu.cn/rcdw_show/181.html',
  socialMedia: [
    { name: 'Email', url: 'https://sz.ustc.edu.cn/rcdw_show/181.html' },
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/anxndsgn/academic-homepage-template',
    // },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'ORCID', url: 'https://orcid.org/0000-0001-5146-222X' },
    { name: 'Google Scholar', url: 'https://scholar.google.com.hk/citations?user=yfcI9FcAAAAJ&hl=zh-CN' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'HCI researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  // { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  HonorSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
