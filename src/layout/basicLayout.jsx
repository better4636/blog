export default function BasicLayout({ children }) {
  return (
    <div>
      <div style={{ display: 'flex', 'justify-content': 'center', paddingTop: '15%' }}>
        {children}
      </div>
    </div>
  );
}
