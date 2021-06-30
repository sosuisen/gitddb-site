/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GitDocumentDB',
  tagline: 'Offline-first Database that Syncs with Git',
  url: 'https://gitddb.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sosuisen', // Usually your GitHub org/user name.
  projectName: 'git-documentdb', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-L1Z1XDHNQD',
      anonymizeIP: true,
    },
    navbar: {
      title: 'GitDocumentDB',
      logo: {
        alt: 'GitDocumentDB Site Logo',
        src: 'img/git-documentdb_icon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'tutorial/install',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'api/git-documentdb.gitdocumentdb',
          position: 'left',
          label: 'API',
        },        
        {
          type: 'doc',
          docId: 'guide/about',
          position: 'left',
          label: 'Guide',
        },                
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: 'versions',
          position: 'right',
          label: 'v0.4.0',
        },
        {
          href: 'https://github.com/sosuisen/git-documentdb',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorial/install',
            },
            {
              label: 'API',
              to: '/docs/api/API_overview',
            },
            {
              label: 'Guide',
              to: '/docs/guide/about',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/gitddb',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sosuisen/git-documentdb',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hidekazu Kubota`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sosuisen/gitddb-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sosuisen/gitddb-site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
