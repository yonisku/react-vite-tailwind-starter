const Layout = ({ children }) => {
  <div className="grid grid-cols-12">
    <section className="col-span-10 col-start-2">{children}</section>
  </div>;
};
export default Layout;
