import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-width-container main'>{children}</main>
    </div>
  );
};

export default Layout;