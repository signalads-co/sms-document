

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'راهنمای وب سرویس پیامک سیگنال',
  tagline: 'signalads sms webservice openAPi',
  url: 'https://document.signalads.com/intro',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'signalads-co', 
  projectName: 'sms-document', 

  staticDirectories: ['static'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
        },
        blog: false, 
        theme: {
          customCss:[ require.resolve('./src/css/custom.css'),require.resolve('./src/css/font.css')],
        },
      },

    ],
  ],
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        direction: 'rtl',
      },
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'سیگنال',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        copyright: `تمامی حقوق و محتوا برای شرکت پردازش اطلاعات مالی پارت محفوظ می باشد.`,
      },
    }),
};

module.exports = config;
