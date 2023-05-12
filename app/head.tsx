const title = 'Autonomars';
const url = 'https://robocar-sim.vercel.app/';
const description = 'Explore automation on mars.';
const author = 'Jack Hollis-London';
const twitter = '@jh0co';

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Explore, Game, Automation, Mars, Education, Programming, Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content='/icons/share.png' />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#ffffff' href='/icons/safari-pinned-tab.svg' />
      <link rel='icon' type='image/png' sizes='196x196' href='/icons/favicon-196.png' />

      <link rel='apple-touch-icon' href='/icons/apple-icon-180.png' />

      <meta name='apple-mobile-web-app-capable' content='yes' />

      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2048-2732.jpg'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2732-2048.jpg'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1668-2388.jpg'
        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2388-1668.jpg'
        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1536-2048.jpg'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2048-1536.jpg'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1668-2224.jpg'
        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2224-1668.jpg'
        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1620-2160.jpg'
        media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2160-1620.jpg'
        media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1290-2796.jpg'
        media='(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2796-1290.jpg'
        media='(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1179-2556.jpg'
        media='(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2556-1179.jpg'
        media='(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1284-2778.jpg'
        media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2778-1284.jpg'
        media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1170-2532.jpg'
        media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2532-1170.jpg'
        media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1125-2436.jpg'
        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2436-1125.jpg'
        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1242-2688.jpg'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2688-1242.jpg'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-828-1792.jpg'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1792-828.jpg'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1242-2208.jpg'
        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-2208-1242.jpg'
        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-750-1334.jpg'
        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1334-750.jpg'
        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-640-1136.jpg'
        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      />
      <link
        rel='apple-touch-startup-image'
        href='/icons/apple-splash-1136-640.jpg'
        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
      />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/icons/apple-touch-icon.png' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={twitter} />
    </>
  );
}
