export default function BasicLayout({ content }) {
  return (
    <div>
      <div style={{ display: 'flex', 'justify-content': 'center', paddingTop: '15%' }}>
        {content}
      </div>
    </div>
  );
}
