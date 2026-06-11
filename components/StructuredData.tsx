// JSON-LD structured data for Google rich results.
// Schema.org types: MusicGroup, MusicRecording, Event.
// Keep this in sync with Members.tsx / Music.tsx / Shows.tsx when those change.

const SITE_URL = 'https://angeloakorchestra.com';

const MEMBERS = [
  'Andreas Petersson',
  'Fideli Jonson',
  'Magnus Petersson',
  'Andreas Lengyel',
  'Vlado Markovic',
  'Robin Åverling',
];

const SOCIAL_URLS = [
  'https://www.instagram.com/theangeloakorchestra/',
  'https://www.facebook.com/angeloakorchestra',
  'https://open.spotify.com/artist/2cOQ17w2fRbsxAumPfa57d',
  'https://www.youtube.com/@AngelOakOrchestra',
  'https://soundcloud.com/angel-oak-orchestra',
];

const musicGroup = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  '@id': `${SITE_URL}/#band`,
  name: 'Angel Oak Orchestra',
  alternateName: 'AOO',
  url: SITE_URL,
  logo: `${SITE_URL}/images/AOO_Spotify_ProfileAvatar_Monogram_Glow_500.png`,
  image: `${SITE_URL}/images/AOO_Spotify_Header_Band_2660x1140.png`,
  description:
    'Cinematic Americana from Oskarshamn, Sweden. Six friends drawing on folk, Nashville country and Americana to write songs that need room to breathe.',
  genre: ['Cinematic Americana', 'Folk', 'Americana', 'Nashville Country'],
  foundingLocation: {
    '@type': 'Place',
    name: 'Oskarshamn, Sweden',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oskarshamn',
      addressCountry: 'SE',
    },
  },
  member: MEMBERS.map((name) => ({
    '@type': 'Person',
    name,
    memberOf: { '@id': `${SITE_URL}/#band` },
  })),
  sameAs: SOCIAL_URLS,
};

const musicRecording = {
  '@context': 'https://schema.org',
  '@type': 'MusicRecording',
  '@id': `${SITE_URL}/#i-think-i-love-you`,
  name: 'I Think I Love You',
  byArtist: { '@id': `${SITE_URL}/#band` },
  inAlbum: {
    '@type': 'MusicAlbum',
    name: 'I Think I Love You',
    albumProductionType: 'https://schema.org/StudioAlbum',
    albumReleaseType: 'https://schema.org/SingleRelease',
    numTracks: 1,
  },
  datePublished: '2026-06-12',
  url: `${SITE_URL}/#music`,
  image: `${SITE_URL}/images/AOO_i-think-i-love-you_cover_1254.png`,
  sameAs: 'https://open.spotify.com/track/2mNjpBUr0n6NYiKDbsJl5U',
};

const event = {
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: 'Music on a Summer Evening',
  description: 'An evening in Nashville-Country style with Angel Oak Orchestra.',
  startDate: '2026-08-06T19:00:00+02:00',
  endDate: '2026-08-06T20:30:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  performer: { '@id': `${SITE_URL}/#band` },
  organizer: {
    '@type': 'Organization',
    name: 'Svenska kyrkan — Döderhult',
    url: 'https://www.svenskakyrkan.se/doderhult',
  },
  location: {
    '@type': 'Place',
    name: 'Påskallavik Church',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kustvägen 2',
      postalCode: '57274',
      addressLocality: 'Påskallavik',
      addressCountry: 'SE',
    },
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.svenskakyrkan.se/kalender?eventId=dda7323e27ab4078a3a0c36dc2c7c946&webId=1337786',
    price: '0',
    priceCurrency: 'SEK',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-06-01',
  },
  image: `${SITE_URL}/images/AOO_Spotify_Header_Band_2660x1140.png`,
  url: 'https://www.svenskakyrkan.se/kalender?eventId=dda7323e27ab4078a3a0c36dc2c7c946&webId=1337786',
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicRecording) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </>
  );
}
