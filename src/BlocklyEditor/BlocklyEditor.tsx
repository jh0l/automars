import BlocklyComponent, {BlocklyCategories} from './BlocklyComponent';

export default function BlocklyEditor() {
  // statically defined options for BlocklyComponent
  return (
    <BlocklyComponent
      className='absolute bottom-0 h-1/2 w-full'
      options={OPTIONS}
      initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="events_start" x="140" y="60">
    </block>
</xml>
`}
    >
      <BlocklyCategories />
    </BlocklyComponent>
  );
}

const OPTIONS = {
  readOnly: false,
  trashcan: true,
  renderer: 'zelos_custom',
  theme: 'zelos_custom',
  collapse: true,
  media: 'media/',
  move: {
    scrollbars: true,
    drag: true,
    wheel: false,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 0.7,
  },
  grid: {
    spacing: 40,
    length: 3,
    colour: '#666666',
  },
  comments: true,
  disable: true,
  sounds: true,
};
